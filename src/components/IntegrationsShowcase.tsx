'use client';

import React from 'react';
import { ArrowRight, Shield, Globe, Cpu, Layers, Radio } from 'lucide-react';

interface IntegrationsShowcaseProps {
  onOpenGetStarted: () => void;
}

export const IntegrationsShowcase: React.FC<IntegrationsShowcaseProps> = ({ onOpenGetStarted }) => {
  const integrations = [
    { name: 'Ethereum EVM', icon: 'Ξ', desc: 'Native L1 & L2 smart contract execution' },
    { name: 'Solana SVM', icon: '◎', desc: 'Sub-second high throughput order matching' },
    { name: 'Chainlink Oracles', icon: '⬡', desc: 'Tamper-proof real time price feeds' },
    { name: 'LayerZero Bridge', icon: '⚡', desc: 'Omnichain messaging & liquidity transfers' },
    { name: 'MetaMask Web3', icon: '🦊', desc: 'One-click wallet authentication' },
    { name: 'WalletConnect', icon: '🔗', desc: 'Universal QR connection for 300+ wallets' }
  ];

  return (
    <section className="py-24 bg-slate-950/90 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Completely leverage <br />
              <span className="gradient-text-green">other products</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Dramatically reintermediate effective applications after high-payoff core competence. Authoritatively optimize collaborative benefits across decentralized Web3 infrastructure.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenGetStarted}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(0,255,133,0.35)] flex items-center gap-3"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Protocol Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl text-emerald-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
