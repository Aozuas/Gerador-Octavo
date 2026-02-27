'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, ArrowLeftRight, Type, AlertCircle } from 'lucide-react';

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Gerador Octavo', href: '/', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Como Usar', href: '/como-usar', icon: <AlertCircle className="w-4 h-4" /> },
        { name: 'Conversor', href: '/conversor', icon: <ArrowLeftRight className="w-4 h-4" /> },
        { name: 'ASCII', href: '/ascii', icon: <Type className="w-4 h-4" /> },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 print:hidden">
            <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
                <a href="https://corrupiola.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center">
                    <img src="/corrupiola-logo.png" alt="Corrupiola" className="h-[18px] w-auto object-contain dark:invert" />
                </a>
                <div className="flex items-center gap-1 sm:gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all active:scale-95 ${isActive
                                    ? 'bg-neutral-900 text-white shadow-sm'
                                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                                    }`}
                            >
                                {item.icon}
                                <span className="hidden sm:inline-block">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav >
    );
}
