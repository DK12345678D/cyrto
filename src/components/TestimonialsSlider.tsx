'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/cryptoData';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentItem = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-2xl backdrop-blur-xl relative">
          {/* Header Tag */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h5 className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-1">
                TESTIMONIALS
              </h5>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                What our customers are saying
              </h2>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-4">
            {/* Customer Avatar */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-[0_0_30px_rgba(0,255,133,0.2)]">
                <img
                  src={currentItem.avatar}
                  alt={currentItem.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quote content */}
            <div className="md:col-span-8 space-y-4">
              <Quote className="w-10 h-10 text-emerald-500/40" />
              <p className="text-base sm:text-xl text-slate-200 italic leading-relaxed">
                “{currentItem.quote}”
              </p>
              <div>
                <h4 className="text-lg font-bold text-white">{currentItem.author}</h4>
                <p className="text-xs font-semibold text-emerald-400">
                  {currentItem.role} • {currentItem.company}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Arrows & Pagination Dots */}
          <div className="flex items-center justify-between pt-8 border-t border-slate-800">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
