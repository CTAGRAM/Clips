"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            className="text-base font-semibold leading-none tracking-[0.02em] text-white bg-gradient-to-r from-[#ED37A2] to-[#A855F7] px-8 py-4 rounded-[12px] transition-all hover:shadow-button-hover"
          >
            Book a call
          </Link>
      )}
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1F]/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="home" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/svgs/67025756be96d71592e4ed50_TheClipsAgency-1.svg"
              alt="TheClipsAgency"
              width={180}
              height={22}
              className="w-auto h-[22px]"
            />
          </Link>

          <NavLinks />

          <div className="hidden lg:block">
            <Link
              href="/submit-form"
              className="text-base font-semibold leading-none tracking-[0.02em] text-white bg-gradient-to-r from-[#ED37A2] to-[#A855F7] px-8 py-4 rounded-[12px] transition-all hover:shadow-button-hover"
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
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#0B0B1F] py-8 border-t border-white/5">
           <NavLinks mobile />
        </div>
      )}
    </header>
  );
}