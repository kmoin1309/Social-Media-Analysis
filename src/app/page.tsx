'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AnalyticsFeaturesSection from '@/components/AnalyticsFeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import MetricsDashboard from '@/components/MetricsDashboard';
import TestimonialSlider from '@/components/TestimonialSlider';
import PricingSection from '@/components/PricingSection';
import FAQAndFooter from '@/components/FAQAndFooter';
import Header from '@/components/Header';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <AnalyticsFeaturesSection/>
        <HowItWorks/>
        <MetricsDashboard/>
        <TestimonialSlider/>
        <PricingSection/>
        <FAQAndFooter/>
      </main>
    </div>
  );
};

export default LandingPage;
