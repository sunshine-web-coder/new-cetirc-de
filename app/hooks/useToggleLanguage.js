"use client";

import { useState, useEffect } from 'react';

const useToggleLanguage = () => {
  const languages = ['en', 'de', 'fr']; // Add more languages as needed
  const [language, setLanguage] = useState(null); // Initially null to avoid flash
  const [isLoaded, setIsLoaded] = useState(false); // Track if the language is loaded

  const toggleLanguage = () => {
    setLanguage(prevLanguage => {
      const currentIndex = languages.indexOf(prevLanguage);
      const nextIndex = (currentIndex + 1) % languages.length;
      return languages[nextIndex];
    });
  };

  const setLanguageAndStore = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage('en'); // Default language
    }
    setIsLoaded(true); // Set loaded to true after setting the language
  }, []);

  return { language, setLanguage: setLanguageAndStore, toggleLanguage, isLoaded };
};

export default useToggleLanguage;
