"use client";
import Settings from '../MainSection/Header';
import Logo from '../logo';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [] = useState(false);

    return (
        <nav className="bg-white flex items-center justify-between px-5 border-b border-gray-300">
            <div className="flex items-center w-full justify-between">
            <Link href="/" className="navbar-item flex-shrink-0 px-18">
                <Logo />
            </Link>
            <div className="flex items-center">
                <Settings />
            </div>
            </div>
        </nav>
    );
}
