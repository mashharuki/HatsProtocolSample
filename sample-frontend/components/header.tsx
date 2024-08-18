import Image from 'next/image';
import Link from 'next/link';

import ConnectWallet from './connect-wallet';

/**
 * Header Component
 * @returns 
 */
export default function Header() {
  return (
    <div className="flex w-full items-center justify-between px-8 py-2 shadow-md ">
      <div className="flex flex-row items-center">
        <Link href="/">
          <div className="flex flex-row items-center">
            <Image
              src="/hats-logo2.png"
              alt="Hats Logo"
              width={60}
              height={60}
            />
            <div className="hidden items-center gap-4 text-xl md:flex">
              <strong>Sample Hats App</strong>
            </div>
          </div>
        </Link>
      </div>
      <div className="h-12">
        <ConnectWallet />
      </div>
    </div>
  );
}
