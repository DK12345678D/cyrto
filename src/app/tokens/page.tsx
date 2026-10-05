'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { NewsletterFooter } from '@/components/NewsletterFooter';
import { GetStartedModal } from '@/components/GetStartedModal';
import { INITIAL_TOKENS, Token } from '@/data/cryptoData';
import { Search, TrendingUp, TrendingDown, Filter, ShoppingCart, Sparkles } from 'lucide-react';

export default function TokensPage() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTokenToBuy, setSelectedTokenToBuy] = useState<Token | null>(null);

  const categories = ['All', 'Layer 1', 'DeFi', 'AI', 'Meme', 'NFT'];

  const filteredTokens = INITIAL_TOKENS.filter((t) => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans">
      <Navbar onOpenGetStarted={() => setGetStartedOpen(true)} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            LIVE MARKET DIRECTORY
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            Explore Crypto <span className="gradient-text-green">Tokens</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Track real-time prices, 24h trading volume, and institutional liquidity across major digital assets.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(0,255,133,0.3)]'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search token or symbol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Tokens Table */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/80 text-xs font-bold text-slate-400 border-b border-slate-800 uppercase tracking-wider">
                  <th className="py-4 px-6">Token</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">24h Change</th>
                  <th className="py-4 px-6">24h Volume</th>
                  <th className="py-4 px-6">Market Cap</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {filteredTokens.map((token) => (
                  <tr
                    key={token.id}
                    className="hover:bg-slate-800/50 transition-colors group"
                  >
                    <td className="py-4 px-6 flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-lg text-emerald-400">
                        {token.icon}
                      </span>
                      <div>
                        <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {token.name}
                        </div>
                        <div className="text-xs text-slate-400 font-mono">{token.symbol}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-white">
                      ${token.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1 font-mono font-bold px-2.5 py-1 rounded-lg text-xs ${
                          token.change24h >= 0
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {token.change24h >= 0 ? (
                          <TrendingUp className="w-3.5 h-3.5" />
                        ) : (
                          <TrendingDown className="w-3.5 h-3.5" />
                        )}
                        {token.change24h > 0 ? `+${token.change24h}%` : `${token.change24h}%`}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-300">{token.volume24h}</td>
                    <td className="py-4 px-6 font-mono text-slate-300">{token.marketCap}</td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold">
                        {token.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => setSelectedTokenToBuy(token)}
                        className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 font-bold text-xs transition-all flex items-center gap-1.5 ml-auto"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Buy
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <NewsletterFooter />

      {/* Buy Token Simulation Modal */}
      {selectedTokenToBuy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-3xl p-6 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Buy {selectedTokenToBuy.name}</span>
                <span className="text-xs text-emerald-400">({selectedTokenToBuy.symbol})</span>
              </h3>
              <button
                onClick={() => setSelectedTokenToBuy(null)}
                className="text-slate-400 hover:text-white font-bold"
              >
                ✕
              </button>
            </div>
            <div className="p-4 bg-slate-950 rounded-2xl space-y-2 font-mono">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Unit Price</span>
                <span className="text-white">${selectedTokenToBuy.price.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>24h Change</span>
                <span className="text-emerald-400">+{selectedTokenToBuy.change24h}%</span>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedTokenToBuy(null);
                setGetStartedOpen(true);
              }}
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,133,0.3)]"
            >
              Proceed to Instant Purchase
            </button>
          </div>
        </div>
      )}

      <GetStartedModal isOpen={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
    </div>
  );
}
