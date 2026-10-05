'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { PricingSection } from '@/components/PricingSection';
import { NewsletterFooter } from '@/components/NewsletterFooter';
import { GetStartedModal } from '@/components/GetStartedModal';
import { FAQ_ITEMS } from '@/data/cryptoData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans">
      <Navbar onOpenGetStarted={() => setGetStartedOpen(true)} />

      <main className="pt-16">
        <PricingSection onOpenGetStarted={() => setGetStartedOpen(true)} />

        {/* Pricing FAQ Section */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-extrabold text-white">Pricing Frequently Asked Questions</h2>
              <p className="text-slate-400 text-sm">Everything you need to know about our plans, billing, and zero-fee trading.</p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        openFaqIndex === idx ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 border-t border-slate-800/60 leading-relaxed animate-fadeIn">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <GetStartedModal isOpen={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
    </div>
  );
}
