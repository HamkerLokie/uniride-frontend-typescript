// ChargesInput.tsx

import React from 'react';

interface ChargesInputProps {
  placeholder: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const ChargesInput: React.FC<ChargesInputProps> = ({ placeholder, label, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };

  return (
      <input 
        className='flex bg-black text-center text-white m-[.1rem] w-full p-input outline-none border-none search-box-shadow'
        placeholder={placeholder}
        type='number'
        value={value}
        onChange={handleChange}
        name={label}
        id={label}
      />
  );
};

export default ChargesInput;
