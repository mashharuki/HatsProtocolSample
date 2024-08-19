import { Hat, HatsSubgraphClient } from '@hatsprotocol/sdk-v1-subgraph';
import _ from 'lodash';
import { Suspense } from 'react';

import ContractInteractionsCard from '@/components/contract-interactions-card';
import ControllersCard from '@/components/controllers-card';
import Header from '@/components/header';
import MetaCard from '@/components/meta-card';
import ModuleDetailsCard from '@/components/module-details-card';
import ResponsibilitiesCard from '@/components/responsibilities-card';
import { Skeleton } from '@/components/ui/skeleton';
import WearersListCard from '@/components/wearers-list-card';
import { ipfsToHttp, resolveIpfsUri } from '@/lib/ipfs';
import { IpfsDetails } from '@/types';
import { hatIdIpToDecimal } from '@hatsprotocol/sdk-v1-core';
import { optimism, sepolia } from 'viem/chains';

// SubGraph用のクライアントインスタンスを生成
const hatsSubgraphClient = new HatsSubgraphClient({
  config: {
    [sepolia.id]: {
      endpoint:
        "https://api.studio.thegraph.com/query/55784/hats-v1-sepolia/version/latest",
    },
    [optimism.id]: {
      endpoint:
        "https://api.studio.thegraph.com/query/55784/hats-v1-optimism/version/latest",
    },
  },
});

interface HatDataProps {
  chainId: number;
  hatId: string[];
}

interface ExtendedHat extends Hat {
  detailsDecoded: IpfsDetails;
  imageUri: string;
  errorMessage?: string;
}

/**
 * HatPage Component
 * @param param0 
 * @returns 
 */
export default async function HatPage({
  params,
}: {
  params: { chainId: number; hatId: any }; // this is potentially an array?
}) {
  const hatData = await getHatData({
    chainId: params.chainId,
    hatId: params.hatId,
  });

  if (!hatData) return;

  return (
    <main className=" min-h-screen w-full gap-y-12">
      <Header />
      <div className="grid gap-4 px-4 py-8 md:grid-cols-2 md:px-16">
        <Suspense
          fallback={
            <>
              <div className="h-10">
                <Skeleton className="h-30 w-full" />
              </div>
            </>
          }
        >
          <MetaCard
            id={hatData.id}
            details={hatData.detailsDecoded}
            imageUri={hatData.imageUri}
            status={hatData.status}
            mutable={hatData.mutable}
            levelAtLocalTree={hatData.levelAtLocalTree}
          />
        </Suspense>

        <Suspense fallback={<p>Loading...</p>}>
          { hatData.detailsDecoded.authorities && hatData.detailsDecoded.responsibilities && (
            <ResponsibilitiesCard
              authorities={hatData.detailsDecoded.authorities}
              responsibilities={hatData.detailsDecoded.responsibilities}
            />
          )}
        </Suspense>

        <Suspense fallback={<p>Loading...</p>}>
          <WearersListCard
            wearers={hatData.wearers}
            currentSupply={_.toNumber(hatData.currentSupply)}
            maxSupply={Number(hatData.maxSupply) || 0} // Convert to number and provide default
          />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <ContractInteractionsCard selectedHat={hatData} />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <ControllersCard
            eligibilityAddress={hatData.eligibility}
            toggleAddress={hatData.toggle}
          />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <ModuleDetailsCard
            chainId={params.chainId}
            eligibilityAddress={hatData.eligibility}
          />
        </Suspense>
      </div>
    </main>
  );
}

/**
 * getHatData method
 * @param param0 
 * @returns 
 */
const getHatData = async ({
  chainId,
  hatId,
}: HatDataProps): Promise<ExtendedHat | null> => {
  const trueHatId = _.first(hatId);
  if (!trueHatId) return null;
  console.log('chainId:', chainId);
  console.log('trueHatId:', trueHatId);
  const localHatId = hatIdIpToDecimal(trueHatId);
  console.log('localHatId:', localHatId);

  try {
    // get the hat data from the subgraph
    const hat = await hatsSubgraphClient.getHat({
      chainId: chainId,
      hatId: BigInt(trueHatId.toString()),
      props: {
        details: true, // get the hat details
        imageUri: true, // get the hat image uri
        status: true, //
        mutable: true,
        levelAtLocalTree: true,
        eligibility: true,
        toggle: true,
        currentSupply: true,
        maxSupply: true, // get the maximum amount of wearers for the hat
        prettyId: true,
        wearers: {
          props: {},
          filters: { first: 5 },
        },
      },
    });

    console.log('hat:', hat);

    let detailsContent: any = { name: '', description: '' }; // Default object structure
    let imageContent: string = '';

    detailsContent = {
      name: hat.details ?? '',
      description: hat.details ?? '',
    };
    
    if (false) {
      const resolvedDetails = await resolveIpfsUri(hat.imageUri!);

      const criteriaDetails = resolvedDetails.eligibility?.criteria.map(
        (criterion) => {
          return {
            link: criterion.link,
            label: criterion.label,
          };
        },
      );

      detailsContent = {
        name: resolvedDetails.name ?? '',
        description: resolvedDetails.description ?? '',
        guilds: resolvedDetails.guilds ?? [],
        spaces: resolvedDetails.spaces ?? [],
        responsibilities: resolvedDetails.responsibilities ?? [],
        authorities: resolvedDetails.authorities ?? [],
        eligibility: resolvedDetails.eligibility ?? {
          manual: false,
          criteria: criteriaDetails ?? [],
        },
        toggle: resolvedDetails.toggle ?? { manual: false, criteria: [] },
      };
    }

    if (hat.imageUri) {
      imageContent = (await ipfsToHttp(hat.imageUri)) || '';
    }

    return {
      ...hat,
      detailsDecoded: detailsContent,
      imageUri: imageContent,
    };
  } catch (error) {
    if (error) {
      console.log(error);
      console.error(
        `Hat with ID ${hatId} does not exist in the subgraph for chain ID ${chainId}.`,
      );

      return null;
    } else {
      // Handle other errors or rethrow them
      throw error;
    }
  }
};
