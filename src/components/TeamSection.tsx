'use client';

import React, { useState } from 'react';
import { Sparkles, X, Globe, Share2, MessageSquare } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '@/data/cryptoData';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h5 className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
            OUR MEMBERS
          </h5>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Get to know <span className="gradient-text-green">amazing people</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our mission is to be the global standard for modern crypto issuing, empowering builders to bring the most innovative products to the world.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group relative cursor-pointer p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,255,133,0.15)]"
            >
              {/* Image container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 bg-slate-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Role badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-400 font-bold text-xs">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Name & Title */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{member.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-emerald-500 group-hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Detail Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-400"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                <p className="text-sm font-semibold text-emerald-400">{selectedMember.role}</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{selectedMember.bio}</p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-emerald-400 hover:bg-slate-750 transition-colors flex items-center gap-2 text-xs font-semibold"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" /> Portfolio
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-emerald-400 hover:bg-slate-750 transition-colors flex items-center gap-2 text-xs font-semibold"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" /> Share Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
