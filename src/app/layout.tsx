import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Optik Satria Jaya',
  description: 'Optik Satria Jaya - Pesan Kacamata Di Cikarang',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <div className='mx-auto flex w-screen mt-4 text-slate-800'>
          <div>
            <Link href={'/'}>
              <Image
                src='/logo.svg'
                alt='Logo'
                width={64}
                height={64}
                className='ml-4'
              />
            </Link>
          </div>
          <div className='flex m-auto w-full justify-end'>
            <Link href={'/'}>
              <div className='p-2 rounded-md hover:bg-red-400 hover:text-white'>
                Beranda
              </div>
            </Link>
            <Link href={'/products'}>
              <div className='p-2 rounded-md hover:bg-red-400 hover:text-white mx-6'>
                Produk
              </div>
            </Link>
          </div>
        </div>
        {children}
        <div className='text-center bg-black text-white py-2'>
          Optik Satria Jaya &#169;2024
        </div>
      </body>
    </html>
  );
}
