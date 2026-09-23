import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { ProductSection } from './components/ProductSection';
import { VoucherSection } from './components/VoucherSection';
import { IngredientsSection } from './components/IngredientsSection';
import { BenefitsUsageSection } from './components/BenefitsUsageSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BeautyJournalSection } from './components/BeautyJournalSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { OrderDrawerModal } from './components/OrderDrawerModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { UploadJournalModal } from './components/UploadJournalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { INITIAL_TESTIMONIALS, INITIAL_JOURNALS, Testimonial, JournalArticle } from './data/productData';

export function App() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);

  const [activeVoucherCode, setActiveVoucherCode] = useState('');
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [journals, setJournals] = useState<JournalArticle[]>(INITIAL_JOURNALS);

  const handleOpenOrderModal = (voucherCode?: string) => {
    if (voucherCode) {
      setActiveVoucherCode(voucherCode);
    }
    setIsOrderModalOpen(true);
  };

  const handleAddReview = (newReview: Testimonial) => {
    setTestimonials([newReview, ...testimonials]);
  };

  const handleAddJournal = (newJournal: JournalArticle) => {
    setJournals([newJournal, ...journals]);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1C1A] flex flex-col font-sans selection:bg-[#B9B9B7] selection:text-black">
      
      {/* Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-grow">
        {/* 1. Hero / Beranda */}
        <Hero
          onOpenOrderModal={() => handleOpenOrderModal()}
          onOpenDetailModal={() => setIsDetailModalOpen(true)}
        />

        {/* 2. Brand Story / Profile */}
        <BrandStory />

        {/* 3. Product Catalog Card */}
        <ProductSection
          onOpenOrderModal={() => handleOpenOrderModal()}
          onOpenDetailModal={() => setIsDetailModalOpen(true)}
        />

        {/* 4. Voucher & Promo Codes */}
        <VoucherSection onOpenOrderModal={(code) => handleOpenOrderModal(code)} />

        {/* 5. Key Ingredients Spotlight */}
        <IngredientsSection />

        {/* 6. Khasiat & Cara Pakai */}
        <BenefitsUsageSection onOpenDetailModal={() => setIsDetailModalOpen(true)} />

        {/* 7. Customer Testimonials */}
        <TestimonialsSection
          testimonials={testimonials}
          onOpenWriteReviewModal={() => setIsReviewModalOpen(true)}
        />

        {/* 8. Beauty Journal & Scientific Backing */}
        <BeautyJournalSection
          journals={journals}
          onOpenUploadJournalModal={() => setIsJournalModalOpen(true)}
        />

        {/* 9. FAQ Accordion */}
        <FAQSection />

        {/* 10. Contact Us & How to Buy */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Modals */}
      <ProductDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      <OrderDrawerModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialVoucherCode={activeVoucherCode}
      />

      <WriteReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />

      <UploadJournalModal
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
        onAddJournal={handleAddJournal}
      />

    </div>
  );
}

export default App;
