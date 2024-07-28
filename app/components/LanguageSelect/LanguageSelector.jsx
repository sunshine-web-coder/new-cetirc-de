'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import React from 'react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = event => {
    setLanguage(event.target.value);
  };
  return (
    <select value={language} onChange={handleLanguageChange} className="border rounded text-sm">
      <option className='text-xs' value="en">Eng</option>
      <option className='text-xs' value="de">De</option>
    </select>
  );
}
