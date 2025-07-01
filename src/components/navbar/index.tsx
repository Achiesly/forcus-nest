"use client";
import Logo from '../logo';
import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [] = useState(false); // this state isn't used, you can safely remove it

  return (
    <nav className={`w-full ${className}`}>
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10">
        {/* Logo */}
        <Link
        href="/"
        className="flex items-center justify-start sm:justify-center"
        >
        <Logo />
        </Link>

        {/* Future nav items or menu button could go here */}
        {/* Example: 
        <div className="hidden sm:flex space-x-4">
          <Link href="/about" className="text-white hover:underline">About</Link>
        </div> 
        */}
      </div>
    </nav>
  );
}
