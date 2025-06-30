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
            <div className="flex items-center justify-between p-4">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
        </nav>
    );
}
