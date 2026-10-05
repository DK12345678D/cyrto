'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { NewsletterFooter } from '@/components/NewsletterFooter';
import { GetStartedModal } from '@/components/GetStartedModal';
import { Wallet, Shield, RefreshCw, BarChart, ArrowRight } from 'lucide-react';

export default function ProcessPage() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  const steps = [
    {
      num: '01',
      icon: Wallet,
      title: 'Create & Connect Wallet',
      desc: 'Connect your Web3 self-custody wallet or sign up in under 30 seconds via passkey authentication.'
    },
    {
      num: '02',
      icon: Shield,
      title: 'Deposit / Fund Account',
      desc: 'Add funds using bank wire, card, or direct crypto transfers with zero deposit fees.'
    },
    {
      num: '03',
      icon: RefreshCw,
      title: 'Swap & Trade Instantly',
      desc: 'Execute instant token swaps across 15+ blockchains with sub-second match speed.'
    },
    {
      num: '04',
      icon: BarChart,
      title: 'Monitor Predictive Yield',
      desc: 'Track AI-driven short-term & long-term portfolio forecasts to maximize returns.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans">
      <Navbar onOpenGetStarted={() => setGetStartedOpen(true)} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h5 className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
            OUR PROCESS
          </h5>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            How Crypto 128 <span className="gradient-text-green">Works</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Start trading and managing your digital asset portfolio in four simple, highly secure steps.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-6 group"
            >
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-emerald-400/50 transition-colors">
                  {step.num}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <button
            onClick={() => setGetStartedOpen(true)}
            className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-[0_0_25px_rgba(0,255,133,0.35)] inline-flex items-center gap-3"
          >
            <span>Start Your Process Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      <NewsletterFooter />
      <GetStartedModal isOpen={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
    </div>
  );
}
