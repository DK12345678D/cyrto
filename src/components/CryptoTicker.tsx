'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { INITIAL_TOKENS } from '@/data/cryptoData';

export const CryptoTicker: React.FC = () => {
  // Multiply list for continuous smooth looping marquee
  const tickerItems = [...INITIAL_TOKENS, ...INITIAL_TOKENS, ...INITIAL_TOKENS];

  return (
    <div className="w-full bg-slate-950/90 border-y border-slate-800/80 py-3 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {tickerItems.map((token, index) => (
          <div
            key={`${token.id}-${index}`}
            className="flex items-center gap-3 mx-6 px-4 py-1.5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-emerald-500/40 transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-200">
              {token.icon}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">{token.symbol}</span>
              <span className="text-xs font-mono font-semibold text-slate-300">
                ${token.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div
              className={`flex items-center gap-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded-md ${
                token.change24h >= 0
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
              }`}
            >
              {token.change24h >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span>{token.change24h > 0 ? `+${token.change24h}%` : `${token.change24h}%`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
