'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, Globe, Share2, MessageSquare, ArrowUpRight } from 'lucide-react';

export const NewsletterFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 text-slate-950 font-black text-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,133,0.4)]">
                128
              </div>
              <span className="text-xl font-extrabold text-white">
                Crypto<span className="text-emerald-400">128</span>
              </span>
            </Link>

            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest leading-relaxed">
              NEVER MISS ANY UPDATED ABOUT US <br />
              BY SUBSCRIBING TO OUR NEWSLETTER
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-mono text-white focus:outline-none placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-lg transition-all shadow-[0_0_15px_rgba(0,255,133,0.3)] uppercase tracking-wider"
                >
                  SIGN UP
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you! Your submission has been received!</span>
                </div>
              )}
            </form>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'Facebook', path: 'M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z' },
                { label: 'LinkedIn', path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' }
              ].map((s, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label={s.label}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-semibold">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/tokens" className="hover:text-emerald-400 transition-colors">
                    Tokens Directory
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-emerald-400 transition-colors">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/team" className="hover:text-emerald-400 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="hover:text-emerald-400 transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                    FAQ & Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                    Contact Desk
                  </Link>
                </li>
                <li className="text-slate-500">support@crypto128.io</li>
                <li className="text-slate-500">+1 (800) 128-CRYPTO</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © Crypto 128. All Rights Reserved.{' '}
            <Link href="/faq" className="text-slate-400 hover:text-emerald-400 underline">
              Licensing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span>
              Webflow Templates by{' '}
              <a
                href="https://www.128.digital/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-emerald-400 underline"
              >
                128.digital
              </a>
            </span>
            <span>Powered by Next.js & Webflow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
