'use client';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import Dropdown from './dropdown';

const options = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'man', label: 'Pria' },
  { value: 'woman', label: 'Wanita' },
  { value: 'unisex', label: 'Semua Kalangan' },
  { value: 'kid', label: 'Anak-anak' },
];

export default function Products() {
  const [selectedValue, setSelectedValue] = React.useState<string>('all'); // Initial selected value (type specified)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <main className='my-8 mx-2'>
      <div className='text-2xl my-2'>Best seller kami</div>

      <div className='mb-4'>
        <Dropdown
          options={options}
          selectedValue={selectedValue}
          onChange={handleChange}
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-white rounded-xl group'>
          <div className=' object-cover items-center'>
            <Image
              src={'/glass-1.webp'}
              width={300}
              height={0}
              alt='glass'
              className='h-max w-auto rounded-lg group-hover:scale-110 
              group-hover:transition-all duration-1000'
            />
          </div>
          <div className='pr-4'>
            <div className='text-slate-800 text-2xl font-medium'>Rayban</div>
            <div className='flex'>
              <div className='w-5 text-start'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='mx-auto text-amber-400'
                />
              </div>
              <div className='text-slate-700 '>4.5</div>
            </div>
            <div className='text-justify line-clamp-3'>Rp400.000</div>
          </div>
        </div>
        <div className='bg-white rounded-xl group'>
          <div className=' object-cover items-center'>
            <Image
              src={'/glass-1.webp'}
              width={300}
              height={0}
              alt='glass'
              className='h-max w-auto rounded-lg group-hover:scale-110 
              group-hover:transition-all duration-1000'
            />
          </div>
          <div className='pr-4'>
            <div className='text-slate-800 text-2xl font-medium'>Rayban</div>
            <div className='flex'>
              <div className='w-5 text-start'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='mx-auto text-amber-400'
                />
              </div>
              <div className='text-slate-700 '>4.5</div>
            </div>
            <div className='text-justify line-clamp-3'>Rp400.000</div>
          </div>
        </div>
      </div>
    </main>
  );
}
