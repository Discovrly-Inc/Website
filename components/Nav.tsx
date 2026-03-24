'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
          {/* Logo — left */}
          <Link
            href="/"
            className="text-xl font-bold text-[#0f172a] tracking-tight hover:text-indigo-600 transition-colors justify-self-start"
          >
            Discovrly
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <Link
              href="/features"
              className="text-[15px] font-medium text-[#64748b] hover:text-[#0f172a] transition-colors"
            >
              Features
            </Link>
          </div>

          {/* Login — right */}
          <div className="hidden md:flex justify-end">
            <Link
              href="#"
              className="text-[15px] font-medium text-[#64748b] hover:text-[#0f172a] transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden col-start-3 flex justify-end">
            <button
              className="p-2 text-[#0f172a] hover:text-indigo-600 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col md:hidden transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#e2e8f0]">
          <span className="text-xl font-bold text-[#0f172a]">Discovrly</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-[#64748b] hover:text-[#0f172a] transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4 flex-1">
          <Link
            href="/features"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-lg text-[16px] font-medium text-[#0f172a] hover:bg-[#f8f9fb] transition-colors"
          >
            Features
          </Link>
        </nav>
        <div className="p-4 border-t border-[#e2e8f0]">
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center border border-[#e2e8f0] text-[#0f172a] text-[16px] font-medium rounded-lg px-6 py-3 hover:bg-[#f8f9fb] transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
