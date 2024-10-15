"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const Logo = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check if window is defined to avoid SSR issues
    if (typeof window !== 'undefined') {
      // Try to get the theme from localStorage or any other source
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);

      // Listen for theme changes
      const observer = new MutationObserver(() => {
        const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        setTheme(newTheme);
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });

      return () => observer.disconnect();
    }
  }, []);

  const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg';

  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black dark:text-white px-2 py-1 relative z-20"
    >
      <Image 
        src={logoSrc} 
        alt="Bhartee AI Logo" 
        width={108} 
        height={72} 
        priority 
        onLoad={() => console.log('Logo loaded')}
      />
    </Link>
  );
};