'use client';

import React, { useState } from 'react';
import { X, Wallet, ShieldCheck, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'wallet' | 'email'>('wallet');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [connectingWallet, setConnectingWallet] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleWalletConnect = (walletName: string) => {
    setConnectingWallet(walletName);
    setTimeout(() => {
      setConnectingWallet(null);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-lg shadow-[0_0_15px_rgba(0,255,133,0.3)]">
              128
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Get Started with Crypto 128</h3>
              <p className="text-xs text-slate-400">Join over 1.8M traders worldwide</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h4 className="text-xl font-bold text-white">Welcome to Crypto 128!</h4>
              <p className="text-sm text-slate-300 max-w-xs mx-auto">
                Your account setup is complete. You can now access full liquidity trading & portfolio forecasting.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,133,0.4)]"
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <>
              {/* Tab Selector */}
              <div className="flex p-1 bg-slate-950/80 rounded-xl mb-6 border border-slate-800">
                <button
                  onClick={() => setActiveTab('wallet')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'wallet'
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </button>
                <button
                  onClick={() => setActiveTab('email')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'email'
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  Email / Passkey
                </button>
              </div>

              {activeTab === 'wallet' ? (
                <div className="space-y-3">
                  {[
                    { name: 'MetaMask', icon: '🦊', desc: 'Popular Ethereum & EVM Web3 wallet' },
                    { name: 'Phantom', icon: '👻', desc: 'Solana & Multi-chain wallet' },
                    { name: 'WalletConnect', icon: '🔗', desc: 'Scan QR code with any mobile wallet' },
                    { name: 'Coinbase Wallet', icon: '🔵', desc: 'Secure self-custody wallet' }
                  ].map((w) => (
                    <button
                      key={w.name}
                      onClick={() => handleWalletConnect(w.name)}
                      disabled={connectingWallet !== null}
                      className="w-full flex items-center justify-between p-3.5 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-emerald-500/50 rounded-xl text-left transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{w.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                            {w.name}
                          </div>
                          <div className="text-xs text-slate-400">{w.desc}</div>
                        </div>
                      </div>
                      {connectingWallet === w.name ? (
                        <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Work / Personal Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950/90 border border-slate-700 focus:border-emerald-500 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,133,0.3)] flex items-center justify-center gap-2"
                  >
                    Continue with Email
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Security Banner */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protected by 256-bit MPC cold storage & SOC2 Type II audit.</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
