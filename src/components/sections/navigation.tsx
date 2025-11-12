"use client";

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '/' },
  {
    label: 'SOLUTIONS',
    href: '/#solutions',
    isDropdown: true,
    dropdownItems: [{ label: 'GhostHost™', href: '/ghosthost' }],
  },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'CLIENT SUCCESS', href: '/client-success' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={mobile ? 'flex flex-col items-center space-y-6' : 'hidden lg:flex items-center gap-8'}>
      {navItems.map((item) =>
        item.isDropdown ? (
          <div key={item.label} className="relative group">
            <Link href={item.href} className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.05em] text-white hover:text-primary transition-colors">
              {item.label}
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 hidden group-hover:block bg-card rounded-md shadow-lg w-40 z-10">
              <div className="py-2">
                {item.dropdownItems?.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.label}
                    href={dropdownItem.href}
                    className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {dropdownItem.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-medium uppercase tracking-[0.05em] text-white hover:text-primary transition-colors"
            onClick={() => mobile && setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        )
      )}
      {mobile && (
         <Link
            href="/submit-form"
            className="text-base font-semibold leading-none tracking-[0.02em] bg-primary text-primary-foreground px-8 py-4 rounded-[12px] transition-all hover:shadow-[0_4px_16px_rgba(200,230,201,0.4)] hover:scale-105"
          >
            Book a call
          </Link>
      )}
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="home" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            <Logo className="w-[180px] h-auto" />
          </Link>

          <NavLinks />

          <div className="hidden lg:block">
            <Link
              href="/submit-form"
              className="text-base font-semibold leading-none tracking-[0.02em] bg-primary text-primary-foreground px-8 py-4 rounded-[12px] transition-all hover:shadow-[0_4px_16px_rgba(200,230,201,0.4)] hover:scale-105"
            >
              Book a call
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background/98 py-8 border-t border-primary/20 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-lg">
           <NavLinks mobile />
        </div>
      )}
    </header>
  );
}