'use client';

import React, { useState } from 'react';
import { Cpu, RefreshCw, Zap, Layers, ShieldCheck, CheckCircle } from 'lucide-react';

export const FeatureMore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'productivity' | 'synchronize'>('productivity');
  const [syncing, setSyncing] = useState(false);
  const [syncedCount, setSyncedCount] = useState(128);

  const handleTriggerSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSyncedCount((prev) => prev + 1);
    }, 1000);
  };

  return (
    <section className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Interactive Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl space-y-6">
              {/* Top Toggle Switch */}
              <div className="flex p-1 bg-slate-950 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('productivity')}
                  className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'productivity'
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  Productivity Hub
                </button>
                <button
                  onClick={() => setActiveTab('synchronize')}
                  className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'synchronize'
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <RefreshCw className="w-4 h-4" />
                  Synchronize State
                </button>
              </div>

              {/* Card Content based on activeTab */}
              {activeTab === 'productivity' ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-3">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
                      <span>High-Payoff Applications</span>
                      <span className="text-emerald-400 font-mono">Status: OPTIMIZED</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: 'Automated Liquidity Rebalancing', speed: '0.4ms', status: 'Active' },
                        { name: 'Cross-Margin Risk Engine', speed: '0.2ms', status: 'Active' },
                        { name: 'Zero-Knowledge Proof Generator', speed: '1.1ms', status: 'Active' }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs"
                        >
                          <span className="font-semibold text-white">{item.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-slate-400">{item.speed}</span>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dramatically reintermediate effective applications after high-payoff core competencies.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800/80 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <RefreshCw className={`w-6 h-6 ${syncing ? 'animate-spin' : ''}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-white font-mono">
                        {syncedCount} Nodes Synced
                      </div>
                      <div className="text-xs text-slate-400">Real-time state consensus across 15 chains</div>
                    </div>
                    <button
                      onClick={handleTriggerSync}
                      disabled={syncing}
                      className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,255,133,0.3)]"
                    >
                      {syncing ? 'Syncing Network...' : 'Trigger State Sync'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              More than <span className="gradient-text-green">you think</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Add funds to your cryptocurrency account to start trading cryptocurrencies. You can add funds using different payment methods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Productivity</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dramatically reintermediate effective applications after high-payoff core competencies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Synchronize</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dramatically reintermediate effective applications after high-payoff core competencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
