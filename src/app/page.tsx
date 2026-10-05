'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CryptoTicker } from '@/components/CryptoTicker';
import { InteractiveSwap } from '@/components/InteractiveSwap';
import { FeatureForecast } from '@/components/FeatureForecast';
import { FeatureMore } from '@/components/FeatureMore';
import { TeamSection } from '@/components/TeamSection';
import { IntegrationsShowcase } from '@/components/IntegrationsShowcase';
import { TestimonialsSlider } from '@/components/TestimonialsSlider';
import { PricingSection } from '@/components/PricingSection';
import { NewsletterFooter } from '@/components/NewsletterFooter';
import { VideoModal } from '@/components/VideoModal';
import { GetStartedModal } from '@/components/GetStartedModal';

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans">
      {/* Header */}
      <Navbar onOpenGetStarted={() => setGetStartedOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenGetStarted={() => setGetStartedOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
        />

        <CryptoTicker />

        <InteractiveSwap />

        <FeatureForecast onOpenGetStarted={() => setGetStartedOpen(true)} />

        <FeatureMore />

        <TeamSection />

        <IntegrationsShowcase onOpenGetStarted={() => setGetStartedOpen(true)} />

        <TestimonialsSlider />

        <PricingSection onOpenGetStarted={() => setGetStartedOpen(true)} />
      </main>

      {/* Footer */}
      <NewsletterFooter />

      {/* Modals */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      <GetStartedModal isOpen={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
    </div>
  );
}
