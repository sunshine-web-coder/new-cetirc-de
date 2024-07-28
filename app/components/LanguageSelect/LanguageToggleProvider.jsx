// app/components/LanguageToggleProvider/LanguageToggleProvider.jsx
"use client";

import React from 'react';
import { LanguageProvider } from '@/app/context/LanguageContext';
import useToggleLanguage from '@/app/hooks/useToggleLanguage';

const LanguageToggleProvider = ({ children }) => {
  const { language, setLanguage, toggleLanguage, isLoaded } = useToggleLanguage();

  if (!isLoaded) {
    return null; // Render nothing until language is loaded
  }

  return (
    <LanguageProvider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageProvider>
  );
};

export default LanguageToggleProvider;
