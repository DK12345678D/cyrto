'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { NewsletterFooter } from '@/components/NewsletterFooter';
import { GetStartedModal } from '@/components/GetStartedModal';
import { ShieldCheck, Globe, Zap, Users, ArrowRight, Award } from 'lucide-react';

export default function AboutPage() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans">
      <Navbar onOpenGetStarted={() => setGetStartedOpen(true)} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h5 className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
            ABOUT CRYPTO 128
          </h5>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            Pioneering the Future of <br />
            <span className="gradient-text-green">Decentralized Finance</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded in 2022, Crypto 128 has quickly established itself as the trusted partner for institutional investors, Web3 startups, and retail traders around the world.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          {[
            { label: 'Total Trading Volume', val: '$3.4B+' },
            { label: 'Active Web3 Traders', val: '1.8M+' },
            { label: 'Supported Blockchains', val: '15+' },
            { label: 'Cold Reserve Security Ratio', val: '100%' }
          ].map((s, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                {s.val}
              </div>
              <div className="text-xs text-slate-400 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Our Core Principles</h2>
            <p className="text-slate-400 text-sm">Building transparent, non-custodial financial infrastructure for the next billion users.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Uncompromising Security',
                desc: 'Institutional-grade MPC multi-signature vaulting with zero single point of failure.'
              },
              {
                icon: Zap,
                title: 'Ultra-Low Latency',
                desc: 'Sub-millisecond match routing connecting directly to deep liquidity pools.'
              },
              {
                icon: Globe,
                title: 'Global Compliance',
                desc: 'Fully compliant regulatory frameworks spanning Americas, Europe, and Asia-Pacific.'
              }
            ].map((v, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{v.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-8">
          <h2 className="text-3xl font-extrabold text-white text-center">Crypto 128 Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: '2022', title: 'Platform Launch', desc: 'Released core DEX liquidity router and instant swap.' },
              { year: '2023', title: '1M Users Milestone', desc: 'Expanded multi-chain support for Solana, Polygon, and Avalanche.' },
              { year: '2024', title: 'AI Forecast Launch', desc: 'Introduced predictive yield engine and MPC vaults.' },
              { year: '2025-2026', title: 'Global Expansion', desc: 'Processed over $3.4 Billion in seamless crypto investments.' }
            ].map((t, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xl font-extrabold text-emerald-400 font-mono">{t.year}</div>
                <div className="text-sm font-bold text-white">{t.title}</div>
                <div className="text-xs text-slate-400">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <NewsletterFooter />
      <GetStartedModal isOpen={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
    </div>
  );
}
