"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white -mt-5">
        <div className="border-t-2 border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        </div>
      
        <div className="flex flex-row items-center space-x-4 justify-center mb-10">
          <Link href="/" className="text-blue-700 hover:text-blue-600 text-12sm font-medium transition-colors duration-200">Home</Link>
          <Link href="/privacy" className="text-blue-700 hover:text-blue-600 text-12sm font-medium transition-colors duration-200">Privacy</Link>
          <Link href="/terms" className="text-blue-700 hover:text-blue-600 text-12sm font-medium transition-colors duration-200">Terms</Link>
          <Link href="/contact" className="text-blue-700 hover:text-blue-600 text-12sm font-medium transition-colors duration-200">Contact</Link>
        </div>

        <div className="text-center mt-4 text-gray-500 text-xs mb-4">
           Copyright © {new Date().getFullYear()} ForcusNest. All rights reserved.
        </div>
    
    </footer>
  );
};

export default Footer;