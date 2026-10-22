/**
 * Velora Digital — Company Profile Application
 * Thoughtfully Engineered. Digitally Exceptional.
 */

import React, { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { IntroOverviewSection } from './components/sections/IntroOverviewSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { SelectedWorkSection } from './components/sections/SelectedWorkSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { QualitySecuritySection } from './components/sections/QualitySecuritySection';
import { AboutSection } from './components/sections/AboutSection';
import { EngagementModelsSection } from './components/sections/EngagementModelsSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ServiceDetailModal } from './components/ui/ServiceDetailModal';
import { ArticleReaderModal } from './components/ui/ArticleReaderModal';
import { LegalModal } from './components/ui/LegalModal';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { NotFoundPage } from './components/ui/NotFoundPage';
import { ServiceItem, InsightArticle } from './data/config';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activeArticleModal, setActiveArticleModal] = useState<InsightArticle | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [is404, setIs404] = useState<boolean>(false);

  const scrollToContact = (prefill?: string) => {
    if (prefill) {
      setPrefilledService(prefill);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (is404) {
    return <NotFoundPage onReturnHome={() => setIs404(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#272722] selection:bg-[#D8C4A8] selection:text-[#272722]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Sections */}
      <main>
        {/* Section B: Homepage Hero */}
        <HeroSection
          onDiscussProject={() => scrollToContact()}
          onExploreExpertise={scrollToServices}
        />

        {/* Section C: Introduction & Principles */}
        <IntroOverviewSection />

        {/* Section D: Services */}
        <ServicesSection
          onSelectServiceModal={(svc) => setActiveServiceModal(svc)}
        />

        {/* Section E: Solutions & Business Capabilities */}
        <SolutionsSection
          onDiscussSolution={(solName) => scrollToContact(solName)}
        />

        {/* Section F: Selected Work / Concept Projects */}
        <SelectedWorkSection
          onDiscussConcept={(conceptName) => scrollToContact(conceptName)}
        />

        {/* Section G: Development Process */}
        <ProcessSection />

        {/* Section H: Technology Expertise */}
        <TechStackSection />

        {/* Section I: Quality, Security, and Reliability */}
        <QualitySecuritySection />

        {/* Section J: About the Company & Values */}
        <AboutSection />

        {/* Section K: Engagement Models */}
        <EngagementModelsSection
          onFindApproach={(modelName) => scrollToContact(modelName)}
        />

        {/* Section L: Insights & Knowledge */}
        <InsightsSection
          onReadArticle={(art) => setActiveArticleModal(art)}
        />

        {/* Section M: FAQ */}
        <FaqSection />

        {/* Section N: Contact & Inquiry */}
        <ContactSection
          prefilledService={prefilledService}
          onOpenPrivacy={() => setLegalModalType('privacy')}
        />
      </main>

      {/* Section O: Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenContact={() => scrollToContact()}
      />

      {/* Modals & Overlays */}
      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onSelectService={(svcName) => {
          setActiveServiceModal(null);
          scrollToContact(svcName);
        }}
      />

      <ArticleReaderModal
        article={activeArticleModal}
        onClose={() => setActiveArticleModal(null)}
        onDiscussTopic={(topic) => {
          setActiveArticleModal(null);
          scrollToContact(topic);
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Scroll To Top button */}
      <ScrollToTop />
    </div>
  );
}
