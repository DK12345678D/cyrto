'use client';

import React, { useState } from 'react';
import { RefreshCw, ArrowDownUp, CheckCircle2, Info, Zap } from 'lucide-react';
import { INITIAL_TOKENS } from '@/data/cryptoData';

export const InteractiveSwap: React.FC = () => {
  const [payToken, setPayToken] = useState(INITIAL_TOKENS[0]); // BTC
  const [receiveToken, setReceiveToken] = useState(INITIAL_TOKENS[1]); // ETH
  const [payAmount, setPayAmount] = useState<string>('1');
  const [slippage, setSlippage] = useState<string>('0.5%');
  const [swapping, setSwapping] = useState(false);
  const [swapSuccess, setSwapSuccess] = useState(false);

  // Calculate swap rate
  const rawPay = parseFloat(payAmount) || 0;
  const receiveAmount = payToken.price && receiveToken.price
    ? ((rawPay * payToken.price) / receiveToken.price).toFixed(4)
    : '0';

  const handleSwapTokens = () => {
    const temp = payToken;
    setPayToken(receiveToken);
    setReceiveToken(temp);
  };

  const handleExecuteSwap = () => {
    if (rawPay <= 0) return;
    setSwapping(true);
    setTimeout(() => {
      setSwapping(false);
      setSwapSuccess(true);
      setTimeout(() => setSwapSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section className="py-16 bg-slate-950/60 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Intro Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" />
              INSTANT CRYPTO SWAP WIDGET
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Trade & swap crypto instantly <br />
              <span className="gradient-text-green">with zero hidden fees</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Crypto 128 connects directly with top automated market maker (AMM) liquidity pools to provide best execution prices across multi-chain ecosystems.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Instant settlement in under 1 second',
                'Deep liquidity depth with minimal slippage',
                'Automated smart contract security verification'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Swap Interface Box */}
          <div className="lg:col-span-7">
            <div className="max-w-md mx-auto p-6 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl relative">
              {/* Box Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-white">Swap Tokens</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                    0% Protocol Fee
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {['0.1%', '0.5%', '1.0%'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlippage(s)}
                      className={`px-2 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        slippage === s
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pay Input Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <div className="flex justify-between text-xs text-slate-400 font-semibold">
                  <span>You Pay</span>
                  <span>Balance: 4.250 {payToken.symbol}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <input
                    type="number"
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                    className="w-full bg-transparent text-2xl font-bold font-mono text-white focus:outline-none"
                    placeholder="0.0"
                  />
                  <select
                    value={payToken.id}
                    onChange={(e) => {
                      const sel = INITIAL_TOKENS.find((t) => t.id === e.target.value);
                      if (sel) setPayToken(sel);
                    }}
                    className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold text-white focus:outline-none"
                  >
                    {INITIAL_TOKENS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.icon} {t.symbol}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  ≈ ${(rawPay * payToken.price).toLocaleString('en-US', { maximumFractionDigits: 2 })} USD
                </div>
              </div>

              {/* Flip Button */}
              <div className="flex justify-center my-3">
                <button
                  onClick={handleSwapTokens}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 border border-slate-700 text-emerald-400 transition-all duration-300 shadow-md group"
                  aria-label="Swap token pair"
                >
                  <ArrowDownUp className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </div>

              {/* Receive Input Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <div className="flex justify-between text-xs text-slate-400 font-semibold">
                  <span>You Receive</span>
                  <span>Estimated</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-2xl font-bold font-mono text-emerald-400">
                    {receiveAmount}
                  </div>
                  <select
                    value={receiveToken.id}
                    onChange={(e) => {
                      const sel = INITIAL_TOKENS.find((t) => t.id === e.target.value);
                      if (sel) setReceiveToken(sel);
                    }}
                    className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold text-white focus:outline-none"
                  >
                    {INITIAL_TOKENS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.icon} {t.symbol}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  1 {payToken.symbol} = {(payToken.price / receiveToken.price).toFixed(4)} {receiveToken.symbol}
                </div>
              </div>

              {/* Swap Button */}
              <button
                onClick={handleExecuteSwap}
                disabled={swapping || rawPay <= 0}
                className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(0,255,133,0.35)] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {swapping ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Executing Swap...
                  </>
                ) : swapSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-slate-950" />
                    Swap Executed Successfully!
                  </>
                ) : (
                  `Swap ${payToken.symbol} for ${receiveToken.symbol}`
                )}
              </button>

              {/* Fee notice */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-slate-500" /> Guaranteed Rate
                </span>
                <span>Slippage Tolerance: {slippage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
