'use client';

import React, { useState } from 'react';
import { TrendingUp, ArrowRight, ShieldCheck, Sparkles, BarChart3, Calendar } from 'lucide-react';

interface FeatureForecastProps {
  onOpenGetStarted: () => void;
}

export const FeatureForecast: React.FC<FeatureForecastProps> = ({ onOpenGetStarted }) => {
  const [timeframe, setTimeframe] = useState<'1M' | '6M' | '1Y' | '3Y'>('1Y');
  const [investment, setInvestment] = useState<number>(1000);

  // Forecast calculations based on AI model projections
  const returnMultiplier = {
    '1M': 1.08,
    '6M': 1.35,
    '1Y': 1.84,
    '3Y': 3.40
  }[timeframe];

  const estimatedValue = Math.round(investment * returnMultiplier);
  const profit = estimatedValue - investment;

  // Chart bar projections
  const chartPoints = {
    '1M': [100, 103, 102, 105, 107, 108],
    '6M': [100, 108, 115, 122, 128, 135],
    '1Y': [100, 120, 138, 155, 170, 184],
    '3Y': [100, 160, 210, 260, 300, 340]
  }[timeframe];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow gradient background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Feature Column */}
          <div className="lg:col-span-6 space-y-6">
            <h5 className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
              OUR FEATURE
            </h5>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Viewing long-term and <br />
              <span className="gradient-text-green">short-term forecast</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Add funds to your cryptocurrency account to start trading cryptocurrencies. You can add funds using different payment methods.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-400/60 text-white font-bold text-base transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,133,0.3)] flex items-center gap-3 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Interactive Predictive Forecast Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">AI Portfolio Forecast</h3>
                </div>

                {/* Timeframe selector */}
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                  {(['1M', '6M', '1Y', '3Y'] as const).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                        timeframe === tf
                          ? 'bg-emerald-500 text-slate-950 shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-400">
                  <span>Initial Investment</span>
                  <span className="font-mono text-white text-sm font-bold">${investment.toLocaleString()} USD</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={25000}
                  step={100}
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              {/* Output stats */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">Predicted Value ({timeframe})</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    ${estimatedValue.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">Estimated Profit</span>
                  <span className="text-2xl font-extrabold text-white font-mono flex items-center gap-1">
                    +${profit.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Simulated Chart Bars */}
              <div className="space-y-2 pt-2">
                <div className="text-xs text-slate-400 font-semibold flex justify-between">
                  <span>Growth Curve</span>
                  <span className="text-emerald-400 font-bold">+{Math.round((returnMultiplier - 1) * 100)}% Expected Return</span>
                </div>
                <div className="h-32 flex items-end justify-between gap-3 pt-4 px-2 bg-slate-950/50 rounded-xl border border-slate-800/60">
                  {chartPoints.map((val, idx) => {
                    const heightPercent = (val / 340) * 100;
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full bg-gradient-to-t from-emerald-500/40 via-emerald-400 to-teal-300 rounded-t-lg transition-all duration-500 group-hover:brightness-125"
                        />
                        <span className="text-[10px] text-slate-500 font-mono">P{idx + 1}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
