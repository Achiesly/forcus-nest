"use client";
import Logo from '../logo';
import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
    const [] = useState(false);

    return (
        <nav className={className}>
            <div className="flex items-center justify-between px-4 p-4 sm:px-2 md:px-1 lg:px-3 mb-4 md:mb-0 p-2 sm:p-0 md:p-4">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
        </nav>
    );
}
