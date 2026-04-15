import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { MeetTheFounderSection } from '@/components/landing/MeetTheFounderSection';
import { ValuePropSection } from '@/components/landing/ValuePropSection';
import { CTAFooter } from '@/components/landing/CTAFooter';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-canyon-cyan/30">
      <Navbar />
      <main>
        {/* User Journey: Hero -> Services -> About/Why Us -> Stats -> CTA */}
        <HeroSection />
        <ServicesSection />
        <ValuePropSection />
        <MeetTheFounderSection />
        <StatsSection />
        <CTAFooter />
      </main>
      <Toaster position="top-center" richColors />
    </div>
  );
}