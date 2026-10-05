'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted }) => {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pagesLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Tokens Directory', href: '/tokens' },
    { label: 'Pricing Plans', href: '/pricing' },
    { label: 'Our Team', href: '/team' },
    { label: 'Our Process', href: '/process' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-emerald-400 to-teal-300 text-slate-950 font-black text-xl shadow-[0_0_20px_rgba(0,255,133,0.4)] group-hover:scale-105 transition-transform duration-300">
              <span>128</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Crypto<span className="text-emerald-400">128</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase -mt-1">
                Investments
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Pages Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPagesDropdownOpen(true)}
              onMouseLeave={() => setPagesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-medium py-1 transition-colors ${
                  pagesDropdownOpen ? 'text-emerald-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Pages</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    pagesDropdownOpen ? 'rotate-180 text-emerald-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {pagesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[460px] p-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl grid grid-cols-2 gap-2 animate-fadeIn">
                  {pagesLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2 p-2.5 rounded-xl transition-all ${
                        pathname === item.href
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-semibold">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/tokens"
              className={`text-sm font-medium transition-colors ${
                pathname === '/tokens' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Tokens
            </Link>

            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors ${
                pathname === '/pricing' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                pathname === '/about' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                pathname === '/contact' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenGetStarted}
              className="relative group overflow-hidden px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700/80 hover:border-emerald-400/60 text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,133,0.25)] flex items-center gap-2"
            >
              <span className="relative z-10 text-emerald-400 group-hover:text-white transition-colors">
                Get Started
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 space-y-4 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-3">
            {pagesLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  pathname === item.href
                    ? 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,255,133,0.3)] flex items-center justify-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
