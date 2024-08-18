# HatsProtocolSample

HatsProtocol を調査・学習するためのサンプルリポジトリです。

## 動かし方

- インストール

  ```bash
  yarn
  ```

- 環境変数の設定

  `pkgs/sample` ディレクトリ直下に `.env`ファイルを作成し、以下の変数をセットする。

  ```txt
  PRIVATE_KEY=""
  RPC_URL=""
  ```

  `pkgs/sample-hats-module`ディレクトリ直下に `.env`ファイルを作成し、以下の変数をセットする。

  ```txt
  GC_RPC=
  POLYGON_RPC=
  INFURA_KEY=
  export PRIVATE_KEY=
  ETHERSCAN_KEY=
  GNOSISSCAN_KEY=
  POLYGONSCAN_KEY=
  OPTIMISM_KEY=
  ARBISCAN_KEY=
  FOUNDRY_PROFILE=
  ```

- サンプルスクリプトの実行

  ```bash
  yarn sample sample
  ```

- HatID を IP に変換する

  ```bash
  yarn sample hatIdToIp
  ```

  ```bash
  hatIdHex: 0x000001c000020000000000000000000000000000000000000000000000000000
  hatIdIp: 448.2
  ✨  Done in 1.65s.
  ```

- Subgraph 用の SDK のサンプルスクリプトの実行

  ```bash
  yarn sample subgraph
  ```

  ```bash
  hat: {
    id: '0x000001c000020000000000000000000000000000000000000000000000000000',
    maxSupply: '500',
    wearers: [ { id: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266' } ],
    events: [
      {
        id: 'HatMinted-6510649-131',
        transactionID: '0xaa5366f06f93f5003e36ea612dd80c0608d5b2178f43f327cba7526416f4538f',
        __typename: 'HatMintedEvent',
        wearer: [Object],
        operator: '0x51908f598a5e0d8f1a3babfa6df76f9704dad072'
      },
      {
        id: 'HatBurned-6510649-131',
        transactionID: '0xaa5366f06f93f5003e36ea612dd80c0608d5b2178f43f327cba7526416f4538f',
        __typename: 'HatBurnedEvent',
        wearer: [Object],
        operator: '0x51908f598a5e0d8f1a3babfa6df76f9704dad072'
      },
      {
        id: 'HatMinted-6492802-254',
        transactionID: '0x734483b0ebba7e8ad3a75c263a1e0742e61215fb33afae2feb06356fce30987c',
        __typename: 'HatMintedEvent',
        wearer: [Object],
        operator: '0x51908f598a5e0d8f1a3babfa6df76f9704dad072'
      },
      {
        id: 'HatCreated-6492791-169',
        transactionID: '0xaa70d7e8bf6e7eaf2ee586297a93892942b6db0385a90f11f117de9826fd6654',
        __typename: 'HatCreatedEvent',
        hatDetails: 'This is a sample Hat2',
        hatMaxSupply: '500',
        hatEligibility: '0x0000000000000000000000000000000000000001',
        hatToggle: '0x0000000000000000000000000000000000000001',
        hatMutable: true,
        hatImageUri: 'ipfs://bafkreiflezpk3kjz6zsv23pbvowtatnd5hmqfkdro33x5mh2azlhne3ah4'
      }
    ]
  }
    hatsByIds: [
    {
      id: '0x000001c000020000000000000000000000000000000000000000000000000000',
      wearers: [ [Object] ]
    }
  ]
  ✨  Done in 2.63s.
  ```

- TopHat をミントするスクリプトの実行

  ```bash
  yarn sample mintTopHat
  ```

  ```bash
  mintTopHatResult: {
    status: 'success',
    transactionHash: '0xadcb165c2a65f6a0b348a0387c4cc5426cf59607585ce32e486454efaf5b977a',
    hatId: 12078056106883486628010822758984794541789440701298176471534417391648768n
  }
  ```

  [mintTopHat Transaction](https://sepolia.etherscan.io/tx/0xadcb165c2a65f6a0b348a0387c4cc5426cf59607585ce32e486454efaf5b977a)

- createHat

  ```bash
  yarn sample createHat
  ```

  ```bash
  createHatResult: {
    status: 'success',
    transactionHash: '0x2d0a7c492a0ba9a49ab6fda97bfb329a6a22dff6c27f65670ab97fe229b03898',
    hatId: 12078056518259625958312333297727090181127066946982142879929383228801024n
  }
  ```

- batchCreateHats

  ```bash
  yarn sample batchCreateHats
  ```

  ```bash
  batchCreateHatsResult: {
    status: 'success',
    transactionHash: '0xaa70d7e8bf6e7eaf2ee586297a93892942b6db0385a90f11f117de9826fd6654',
    hatIds: [
      12078056929635765288613843836469385820464693192666109288324349065953280n
    ]
  }
  ```

- mintHat

  ```bash
  yarn sample mintHat
  ```

  ```bash
  mintTopHatResult: {
    status: 'success',
    transactionHash: '0x734483b0ebba7e8ad3a75c263a1e0742e61215fb33afae2feb06356fce30987c'
  }
  ```

- transferHat

  ```bash
  yarn sample transferHat
  ```

  管理権限を持っているアカウントで操作可能。

  ```bash
  transferHatResult: {
    status: 'success',
    transactionHash: '0xaa5366f06f93f5003e36ea612dd80c0608d5b2178f43f327cba7526416f4538f'
  }
  Done in 13.16s.
  ```

  https://sepolia.etherscan.io/tx/0xaa5366f06f93f5003e36ea612dd80c0608d5b2178f43f327cba7526416f4538f

- renounceHat

  ```bash
  yarn sample renounceHat
  ```

  ```bash

  ```

- HatsModule SDK の読み取り系メソッドを実行するスクリプト

  ```bash
  yarn sample hatsModule
  ```

  ```bash
  module2: {
    name: 'JokeRace Eligibility',
    details: [
      'By using this module, communities can elect the wearers of a hat through a JokeRace election. More specifically, the eligible wearers are creators of the top voted proposals in the election',
      'The number of winners of an election, and thus the number of possible wearers made eligible through this integration, is configurable. Additionally, a term period can be set, after which the winners will no longer be eligible to wear the hat.',
      'You must have already deployed a JokeRace contest before deploying this Eligibility Module.',
      'NOTE: proposals ranking is currently only supported in Jokerace contests with down-voting disabled, and so this module only works with down-voting disabled contests.'
    ],
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/Hats-Protocol/jokerace-eligibility'
      }
    ],
    parameters: [
      {
        label: 'Module Admin Hat ID',
        functionName: 'ADMIN_HAT',
        displayType: 'hat'
      },
      {
        label: 'Contest Address',
        functionName: 'underlyingContest',
        displayType: 'jokerace'
      },
      {
        label: 'Term End',
        functionName: 'termEnd',
        displayType: 'timestamp'
      },
      {
        label: 'Number Of Elected Hat Wearers',
        functionName: 'topK',
        displayType: 'default'
      }
    ],
    type: { eligibility: true, toggle: false, hatter: false },
    tags: [],
    implementationAddress: '0xAE0e56A0c509dA713722c1aFFcF4B5f1C6CDc73a',
    deployments: [
      { chainId: '5', block: '10092827' },
      { chainId: '11155111', block: '4749517' },
      { chainId: '10', block: '112566278' },
      { chainId: '137', block: '50286793' },
      { chainId: '42161', block: '153224468' },
      { chainId: '100', block: '31089668' },
      { chainId: '8453', block: '12329992' },
      { chainId: '42220', block: '24755770' }
    ],
    creationArgs: {
      useHatId: true,
      immutable: [ [Object] ],
      mutable: [ [Object], [Object], [Object] ]
    },
    customRoles: [
      {
        id: 'jokeraceAdmin',
        name: 'JokeRace Admin',
        criteria: 'ADMIN_HAT',
        hatAdminsFallback: true
      }
    ],
    writeFunctions: [
      {
        roles: [Array],
        functionName: 'pullElectionResults',
        label: 'Pull Election Results',
        description: "Pulls the election's final results",
        primary: true,
        args: []
      },
      {
        roles: [Array],
        functionName: 'reelection',
        label: 'New Term',
        description: 'Setup a new term, once the current term has ended',
        primary: true,
        args: [Array]
      }
    ],
    abi: [
      {
        inputs: [Array],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        inputs: [],
        name: 'JokeraceEligibility_ContestNotCompleted',
        type: 'error'
      },
      {
        inputs: [],
        name: 'JokeraceEligibility_MustHaveDownvotingDisabled',
        type: 'error'
      },
      {
        inputs: [],
        name: 'JokeraceEligibility_MustHaveSortingEnabled',
        type: 'error'
      },
      { inputs: [], name: 'JokeraceEligibility_NotAdmin', type: 'error' },
      {
        inputs: [],
        name: 'JokeraceEligibility_TermNotCompleted',
        type: 'error'
      },
      {
        anonymous: false,
        inputs: [Array],
        name: 'Initialized',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [Array],
        name: 'NewTerm',
        type: 'event'
      },
      {
        inputs: [],
        name: 'ADMIN_HAT',
        outputs: [Array],
        stateMutability: 'pure',
        type: 'function'
      },
      {
        inputs: [],
        name: 'HATS',
        outputs: [Array],
        stateMutability: 'pure',
        type: 'function'
      },
      {
        inputs: [],
        name: 'IMPLEMENTATION',
        outputs: [Array],
        stateMutability: 'pure',
        type: 'function'
      },
      {
        inputs: [Array],
        name: 'eligibleWearersPerContest',
        outputs: [Array],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [Array],
        name: 'getWearerStatus',
        outputs: [Array],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'hatId',
        outputs: [Array],
        stateMutability: 'pure',
        type: 'function'
      },
      {
        inputs: [],
        name: 'pullElectionResults',
        outputs: [Array],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [Array],
        name: 'reelection',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'reelectionAllowed',
        outputs: [Array],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [Array],
        name: 'setUp',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'termEnd',
        outputs: [Array],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'topK',
        outputs: [Array],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'underlyingContest',
        outputs: [Array],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'version',
        outputs: [Array],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'version_',
        outputs: [Array],
        stateMutability: 'view',
        type: 'function'
      }
    ]
  }
  Current Block Number: 6515787n
  module3: undefined
  module4: [ undefined, undefined ]
  ```

- HatsSignerGate SDK のサンプルスクリプトを実行する

  インスタンスを作成する。

  ```bash
  yarn sample hatsSignerGate
  ```

  ```bash
  createHsgResult: {
    status: 'success',
    transactionHash: '0xdd6fd3c7bd0173153103f0fba3e997cd66563bb2a08f9f4d2822d20df4b471f2',
    newHsgInstance: '0xd0574A652382c16EA68Fbe725da2b9b94Dfe3567',
    newSafeInstance: '0x1E10452002610FEcA53A773F5EaCB9a95684d484'
  }
  ✨  Done in 68.67s.
  ```

  [トランザクション](https://sepolia.etherscan.io/tx/0xdd6fd3c7bd0173153103f0fba3e997cd66563bb2a08f9f4d2822d20df4b471f2)

  [作成された HsgInstance](https://sepolia.etherscan.io/address/0xd0574A652382c16EA68Fbe725da2b9b94Dfe3567)

  [作成された SafeInstance](https://sepolia.etherscan.io/address/0x1E10452002610FEcA53A773F5EaCB9a95684d484)

- hsgClaimSigner の機能を呼び出す

  ```bash
  yarn sample hsgClaimSigner
  ```

- hsgIsValidSigner の機能を試す

  ```bash
  yarn sample hsgIsValidSigner
  ```

  ```bash
  isValidSignerResult: false
  ```

- claimedAndStillValid の機能を試す

  ```bash
  yarn sample claimedAndStillValid
  ```

  ```bash
  validSignerCount: 0n
  claimedAndStillValidResult: false
  ```

- getHsgInstanceProperties の機能を試す

  ```bash
  yarn sample getHsgInstanceProperties
  ```

  ```bash
  signersHat: 12078056518259625958312333297727090181127066946982142879929383228801024n
  safe: 0x1E10452002610FEcA53A773F5EaCB9a95684d484
  minThreshold: 2n
  targetThreshold: 2n
  maxSigners: 3n
  ownerHat: 12078056106883486628010822758984794541789440701298176471534417391648768n
  ```

- HatsAccount1ofNClient を作成する

  ```bash
  yarn sample hatsAccount1ofNClient
  ```

  ```bash
  createHatsAccountResult: {
    status: 'success',
    transactionHash: '0x552818326496076b343aed12ad7d1166ddd8a20cbce0656400bc19ac1ca5a118',
    newAccount: '0x675d12D78338E484D8D18E4df88ab5158b01a5aE'
  }
  ✨  Done in 14.05s.
  ```

  [トランザクション](https://sepolia.etherscan.io/tx/0x552818326496076b343aed12ad7d1166ddd8a20cbce0656400bc19ac1ca5a118)

  [作成された HsgInstance](https://sepolia.etherscan.io/address/0x675d12D78338E484D8D18E4df88ab5158b01a5aE)

- executeFromHatsAccount1ofN の機能を試す

  ```bash
  yarn sample executeFromHatsAccount1ofN
  ```

  今回はコントラクトから 0.05 ETH を特定のアドレスに送信してみました。

  ```bash
  executionResult: {
    status: 'success',
    transactionHash: '0xe09b071a8061f252d982a2e6f84c9bfc42d44087029e59f5a36ec472bc8a1abe'
  }
  ✨  Done in 18.01s.
  ```

  [トランザクション](https://sepolia.etherscan.io/tx/0xe09b071a8061f252d982a2e6f84c9bfc42d44087029e59f5a36ec472bc8a1abe)

- HatsModules コントラクトのセットアップ

  ```bash
  yarn sample-hats-module setUp
  ```

  `forge install` が実行される。

- HatsModules コントラクトのフォーマットチェック

  ```bash
  yarn sample-hats-module fmt
  ```

- HatsModules コントラクトのビルド

  ```bash
  yarn sample-hats-module build
  ```

- HatsModules コントラクトのテスト

  ```bash
  yarn sample-hats-module test
  ```

  ```bash
  Ran 5 tests for test/Module.t.sol:Deployment
  [PASS] test_hatId() (gas: 13088)
  [PASS] test_hats() (gas: 13212)
  [PASS] test_implementation() (gas: 13205)
  [PASS] test_initialization() (gas: 19603)
  [PASS] test_version() (gas: 18366)
  Suite result: ok. 5 passed; 0 failed; 0 skipped; finished in 2.05s (1.08ms CPU time)

  Ran 1 test suite in 2.05s (2.05s CPU time): 5 tests passed, 0 failed, 0 skipped (5 total tests)
  Done in 3.02s.
  ```

- HatsModules コントラクトをデプロイする

  ```bash
  yarn sample-hats-module deploy -vvv --tc Deploy --chain sepolia --broadcast --verify
  ```

  ```bash

  ```

- フロントエンドのビルド

  ```bash
  yarn frontend build
  ```

- フロントエンドの起動

  ```bash
  yarn frontend dev
  ```

### 参考文献

1. [GitHub - Hats-Protocol/hats-module](https://github.com/Hats-Protocol/hats-module/tree/e83bd72cb3eebdbeadabcb63e3c6f69ab61a5562)
