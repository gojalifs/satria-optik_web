// Dropdown.tsx
import React from 'react';

interface Option {
  value: string;
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className='flex justify-between'>
      <select
        id='dropdown'
        name='dropdown'
        value={selectedValue}
        onChange={onChange}
        className='rounded-md shadow border py-2 px-3 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500 w-full'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className='w-52'>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface DropdownProps {
  options: Option[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default Dropdown;
