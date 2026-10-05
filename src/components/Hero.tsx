'use client';

import React from 'react';
import { Play, ArrowRight, ShieldCheck, Zap, Globe, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenGetStarted: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGetStarted, onOpenVideo }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows & Floating 3D Geometric Shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Geometric Elements matching Webflow design */}
      <div className="absolute top-24 left-8 md:left-20 w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/30 to-emerald-300/10 backdrop-blur-md border border-emerald-500/30 rotate-12 animate-float hidden lg:block" />
      <div className="absolute top-44 right-12 md:right-24 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-emerald-400/20 backdrop-blur-md border border-purple-500/30 animate-float-slow hidden lg:block" />
      <div className="absolute bottom-20 left-16 w-14 h-14 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-emerald-400/20 backdrop-blur-md border border-cyan-500/30 -rotate-45 animate-float hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-[0_0_15px_rgba(0,255,133,0.2)] animate-pulse-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Generation Crypto Investment Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Trusted platform <br />
            <span className="gradient-text-green">for crypto investments</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore the crypto world, buy and sell crypto coins easily, trusted Crypto 128 to be your crypto market partner.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(0,255,133,0.4)] hover:shadow-[0_0_40px_rgba(0,255,133,0.6)] hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenVideo}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/40 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-emerald-400 translate-x-0.5" />
              </div>
              <span>How It Works</span>
            </button>
          </div>

          {/* Hero Visual Mockup Banner */}
          <div className="pt-10 relative">
            <div className="relative mx-auto max-w-4xl p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
              {/* Fake Browser Top bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-4 py-1 rounded-lg bg-slate-950 text-xs font-mono text-slate-400 border border-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  https://crypto-128.webflow.io/live-vault
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  LIVE SYSTEM
                </div>
              </div>

              {/* Quick Dashboard Highlight Grid inside Hero */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400 font-semibold">
                    <span>24h Global Volume</span>
                    <Globe className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono">$3.42B</div>
                  <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +18.4% this week
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400 font-semibold">
                    <span>Matching Latency</span>
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono">&lt; 0.001s</div>
                  <div className="text-xs text-emerald-400 font-semibold">Sub-millisecond execution</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400 font-semibold">
                    <span>Cold Reserve Ratio</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400">Fully collateralized 1:1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
