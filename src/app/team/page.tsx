'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { TeamSection } from '@/components/TeamSection';
import { NewsletterFooter } from '@/components/NewsletterFooter';
import { GetStartedModal } from '@/components/GetStartedModal';

export default function TeamPage() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans">
      <Navbar onOpenGetStarted={() => setGetStartedOpen(true)} />

      <main className="pt-16">
        <TeamSection />
      </main>

      <NewsletterFooter />
      <GetStartedModal isOpen={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
    </div>
  );
}
