'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/#ranking', label: 'ランキング' },
  { href: '/#area', label: 'エリア別' },
  { href: '/#purpose', label: '目的別' },
  { href: '/faq/', label: 'お役立ち' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      {/* Mobile PR bar */}
      <div className="sm:hidden bg-gray-100 text-gray-500 text-xs text-center py-1">PRを含みます</div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-teal-500 font-bold text-xl">パーソナルジムびより</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gray-300 hover:text-teal-500 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop PR text */}
          <span className="hidden sm:block text-xs text-gray-400 shrink-0">PRを含みます</span>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="sm:hidden bg-navy-light border-t border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-3 text-sm text-gray-300 hover:text-teal-500 hover:bg-gray-800 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
