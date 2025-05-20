'use client';

import ConsultingInfo from '@/components/organisms/Consulting';
import FAQs from '@/components/organisms/Faqs';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import InfoSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import ServicesSection from '@/components/organisms/Services';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ConsultingInfo />
      <Products />
      <InfoSection />
      <FAQs />
      <Footer />
    </main>
  );
}
