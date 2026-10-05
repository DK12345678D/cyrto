'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { NewsletterFooter } from '@/components/NewsletterFooter';
import { GetStartedModal } from '@/components/GetStartedModal';
import { FAQ_ITEMS } from '@/data/cryptoData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans">
      <Navbar onOpenGetStarted={() => setGetStartedOpen(true)} />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h5 className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
            HELP & SUPPORT
          </h5>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            Frequently Asked <span className="gradient-text-green">Questions</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Find quick answers to common questions about trading, security, deposits, and accounts.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-2xl text-sm text-white focus:outline-none"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center text-base font-bold text-white hover:text-emerald-400 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openIndex === idx ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <NewsletterFooter />
      <GetStartedModal isOpen={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
    </div>
  );
}
