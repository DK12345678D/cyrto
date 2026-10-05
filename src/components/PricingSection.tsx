'use client';

import React, { useState } from 'react';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '@/data/cryptoData';

interface PricingSectionProps {
  onOpenGetStarted: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenGetStarted }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-24 bg-slate-950/90 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Affordable <span className="gradient-text-green">Pricing</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending and trading solutions tailored to your needs.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 rounded-full bg-slate-800 border border-slate-700 p-1 transition-colors"
            >
              <div
                className={`w-6 h-6 rounded-full bg-emerald-400 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-slate-900 border-2 border-emerald-500 shadow-[0_0_35px_rgba(0,255,133,0.25)] -translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Price Header */}
                  <div className="pb-6 border-b border-slate-800 space-y-2">
                    <div className="text-3xl font-extrabold text-white font-mono">
                      {plan.name === 'FREE' ? (
                        'FREE'
                      ) : (
                        `$${price}.00`
                      )}
                    </div>
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {plan.period}
                    </p>
                    <p className="text-xs text-slate-400 mt-2">{plan.description}</p>
                  </div>

                  {/* Plan Features */}
                  <div className="py-6 space-y-3.5">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs">
                        {feat.included ? (
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3" />
                          </div>
                        )}
                        <span className={feat.included ? 'text-slate-200' : 'text-slate-500 line-through'}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <button
                    onClick={onOpenGetStarted}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.highlighted
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_0_20px_rgba(0,255,133,0.3)]'
                        : 'bg-slate-800 hover:bg-slate-750 text-white border border-slate-700'
                    }`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
