'use client';

import { useEffect, useState } from 'react';
import ComparisonChart from '@/components/ui/chats/comparison-chart';
import Avatar from '@/components/ui/avatar';
import OverviewChart from '@/components/ui/chats/overview-chart';
import TopPools from '@/components/ui/top-pools';
import TransactionTable from '@/components/transaction/transaction-table';
import WalletCard from '@/components/ui/wallet-card';
import TransactCoin from '@/components/ui/transact-coin';
import PriceFeedSlider from '@/components/ui/live-price-feed';
import { priceFeedData } from '@/data/static/price-feed';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import ImageCarousel from '../ui/imageCarsoule';

//images
import AuthorImage from '@/assets/images/author.jpg';

const topPoolsLimit = (breakpoint: string) => {
  switch (breakpoint) {
    case 'md':
      return 5;
    case '2xl':
      return 5;
    default:
      return 4;
  }
};

export default function MinimalScreen() {
  const [limit, setLimit] = useState(4);
  const breakpoint = useBreakpoint();
  const backgroundColor = '#1a202c'; // Example background color

  useEffect(() => {
    setLimit(topPoolsLimit(breakpoint));
  }, [breakpoint]);
  return (
    <>
      <div className="">
      <div className="relative w-full h-96 bg-cover bg-center rounded-xl bg-blue-500" >
  {/* Optional overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
  
  {/* Content inside the banner */}
  <div className="absolute inset-0 flex items-center justify-center  rounded-xl bg-blue-500">
    <div className="text-white text-center">
      <h1 className="text-4xl lg:text-6xl font-bold mb-4">Your Banner Title</h1>
      <p className="text-lg lg:text-2xl">Your banner subtitle or call to action</p>
    </div>
  </div>
</div>

        <ImageCarousel />
         <ol className="items-center sm:flex">
      {/* Item 1 */}
      <li className="relative mb-6 mt-9 sm:mb-9">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
      </li>

      {/* Item 2 */}
      <li className="relative mb-6 mt-9 sm:mb-9">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
      </li>

      {/* Item 3 */}
      <li className="relative mb-6 mt-9 sm:mb-9">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
      </li>
    </ol>
        <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-12">


          <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 3xl:col-span-6">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              <OverviewChart chartWrapperClass="h-[224px] lg:h-[214px] xl:h-[190px] 2xl:h-[214px] 3xl:h-[268px] 4xl:h-[352px]" />
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 3xl:col-span-6">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              <TopPools limit={limit} />
            </div>
          </div>


          <div className="
      col-span-12           /* Default: full width in a 12-column grid */
      md:col-span-12        /* Medium screens and above: full width */
      lg:col-span-12        /* Large screens and above: full width */
      xl:col-span-12        /* Extra-large screens and above: full width */
      2xl:col-span-12       /* 2X extra-large screens and above: full width */
      3xl:col-span-12       /* 3X extra-large screens and above: full width */
      xl:row-start-2        /* Extra-large screens: starts at row 2 */
      xl:row-end-3          /* Extra-large screens: ends at row 3 */
      2xl:row-start-2       /* 2X extra-large screens: starts at row 2 */
      2xl:row-end-3         /* 2X extra-large screens: ends at row 3 */
      3xl:row-start-2       /* 3X extra-large screens: starts at row 2 */
      3xl:row-end-3         /* 3X extra-large screens: ends at row 3 */
    ">
            <TransactionTable />
          </div>

        </div>
      </div>
    </>
  );
}
