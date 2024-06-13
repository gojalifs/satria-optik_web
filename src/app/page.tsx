import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faTag,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const plus = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <main className='mb-4 overflow-x-hidden'>
      {/* <div className='fixed bottom-4 right-4'>
        <FontAwesomeIcon
          icon={faWhatsapp}
          className='h-10 w-10 bg-white rounded-full shadow-md text-green-800 
          sm:h-14 sm:w-14 md:h-20 md:w-20'
        />
      </div> */}

      {/* 
        Bagian Body
      */}
      {/* 
          Ini bagian tagline
      */}
      <div
        className={`w-2/3 text-4xl mt-6 ml-8 font-semibold tracking-wider leading-relaxed ${plus.className}
        lg:text-8xl bg-red-400`}
      >
        Makin Trendy dengan Gaya Masa Kini
      </div>
      <div className='relative justify-between h-72 lg:h-[500px]'>
        {/* <div className='ml-24 mt-2 invisible lg:visible items-center'>
          <div className='bg-green-400'>
            <div className='flex text-slate-700 my-2'>
              <div className='w-8 text-center'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='text-slate-700 mx-auto'
                />
              </div>
              <div className='text-xl'>4.5+ Rating</div>
            </div>
            <div className='flex text-slate-700 my-2'>
              <div className='w-8 text-center'>
                <FontAwesomeIcon
                  icon={faTag}
                  className='text-slate-700 mx-auto'
                />
              </div>
              <div className='text-xl'>Mulai dari Rp400.000</div>
            </div>
            <div className='flex text-slate-700 my-2'>
              <div className='w-8 text-center'>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className='text-slate-700 mx-auto'
                />
              </div>
              <div className='text-xl'>Bebas biaya pengiriman</div>
            </div>
          </div>
        </div> */}
        <div
          className='absolute -top-16 md:right-9 xl:w-1/2 
        lg:w-1/2 lg:h-96 xl:h-full h-full w-auto -right-10 '
        >
          <Image src={'/man.png'} alt='' width={360} height={0} className='' />
        </div>
        {/* <div className='hidden md:visible absolute left-96 xl:right-44 mt-4 ml-2 text-slate-900'>
          <div className='m-4 bg-tertiary p-2 rounded-lg'>Sun Friendly</div>
          <div className='m-4 bg-tertiary p-2 rounded-lg'>Trendy</div>
          <div className='m-4 bg-tertiary p-2 rounded-lg'>Cozy Look</div>
        </div> */}
      </div>
      <div className='mt-4 ml-2 flex flex-wrap columns-3 text-slate-900 md:columns-1'>
        <div className='m-2 bg-tertiary p-2 rounded-lg'>Sun Friendly</div>
        <div className='m-2 bg-tertiary p-2 rounded-lg'>Trendy</div>
        <div className='m-2 bg-tertiary p-2 rounded-lg'>Cozy Look</div>
      </div>
      {/* 
        Ini bagian rating 
      */}
      <div className='ml-4 mt-2 lg:hidden'>
        <div className='flex text-slate-800 my-2'>
          <div className='w-8  text-center'>
            <FontAwesomeIcon icon={faStar} className='text-slate-700 mx-auto' />
          </div>
          <div>4.5+ Rating</div>
        </div>
        <div className='flex text-slate-700 my-2'>
          <div className='w-8 text-center'>
            <FontAwesomeIcon icon={faTag} className='text-slate-700 mx-auto' />
          </div>
          <div>Mulai dari Rp400.000</div>
        </div>
        <div className='flex text-slate-800 my-2'>
          <div className='w-8 text-center'>
            <FontAwesomeIcon
              icon={faCartShopping}
              className='text-slate-700 mx-auto'
            />
          </div>
          <div>Bebas biaya pengiriman</div>
        </div>
      </div>
      {/* 
          Ini bagian best seller
        */}
      <div>
        <div className='text-slate-700 text-2xl font-semibold my-4'>
          Best Seller
        </div>
        <div className='flex overflow-x-auto sm:flex-wrap md:gap-3 md:justify-center'>
          <div
            className='flex-none min-h-44 w-36 md:w-48 md:min-h-56 rounded-lg bg-gray-300 overflow-hidden mx-1
            '
          >
            <Image
              src={'/glass-1.webp'}
              alt='glass'
              width={200}
              height={200}
              className='md:w-48 md:h-44'
            />
            <div className='text-slate-800 text-xl'>Rayban</div>
            <div className='flex'>
              <div className='w-5 text-start'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='mx-auto text-amber-400'
                />
              </div>
              <div className='text-slate-700 '>4.5</div>
            </div>
          </div>
          <div
            className='flex-none min-h-44 w-36 md:w-48 md:min-h-56 rounded-lg bg-gray-300 overflow-hidden mx-1
            '
          >
            <Image
              src={'/glass-1.webp'}
              alt='glass'
              width={200}
              height={200}
              className='md:w-48 md:h-44'
            />
            <div className='text-slate-800 text-xl'>Rayban</div>
            <div className='flex'>
              <div className='w-5 text-start'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='mx-auto text-amber-400'
                />
              </div>
              <div className='text-slate-700 '>4.5</div>
            </div>
          </div>
          <div
            className='flex-none min-h-44 w-36 md:w-48 md:min-h-56 rounded-lg bg-gray-300 overflow-hidden mx-1
            '
          >
            <Image
              src={'/glass-1.webp'}
              alt='glass'
              width={200}
              height={200}
              className='md:w-48 md:h-44'
            />
            <div className='text-slate-800 text-xl'>Rayban</div>
            <div className='flex'>
              <div className='w-5 text-start'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='mx-auto text-amber-400'
                />
              </div>
              <div className='text-slate-700 '>4.5</div>
            </div>
          </div>
          <div
            className='flex-none min-h-44 w-36 md:w-48 md:min-h-56 rounded-lg bg-gray-300 overflow-hidden mx-1
            '
          >
            <Image
              src={'/glass-1.webp'}
              alt='glass'
              width={200}
              height={200}
              className='md:w-48 md:h-44'
            />
            <div className='text-slate-800 text-xl'>Rayban</div>
            <div className='flex'>
              <div className='w-5 text-start'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='mx-auto text-amber-400'
                />
              </div>
              <div className='text-slate-700 '>4.5</div>
            </div>
          </div>
          <div
            className='flex-none min-h-44 w-36 md:w-48 md:min-h-56 rounded-lg bg-gray-300 overflow-hidden mx-1
            '
          >
            <Image
              src={'/glass-1.webp'}
              alt='glass'
              width={200}
              height={200}
              className='md:w-48 md:h-44'
            />
            <div className='text-slate-800 text-xl'>Rayban</div>
            <div className='flex'>
              <div className='w-5 text-start'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='mx-auto text-amber-400'
                />
              </div>
              <div className='text-slate-700 '>4.5</div>
            </div>
          </div>
        </div>

        {/* 
          Visit Us Section
        */}
        <div className='my-4'>
          <div className='text-2xl my-2'>Visit Us</div>
          {/* 
          MAP
         */}

          <div className='my-4'>
            <Link href={'#'} target='_blank'>
              <div className='flex items-center content-center align-middle space-x-2 my-2'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='text-orange-600 w-10 h-10'
                />
                <div>@optiksatriajaya</div>
              </div>
            </Link>
            <Link href={'#'} target='_blank'>
              <div className='flex items-center content-center align-middle space-x-2 my-2'>
                <FontAwesomeIcon
                  icon={faTiktok}
                  className='text-orange-600 w-10 h-10'
                />
                <div>@optiksatriajaya</div>
              </div>
            </Link>
          </div>
          <div className='relative'>
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
}
