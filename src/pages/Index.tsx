
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ProductsSection from '@/components/home/ProductsSection';
import PartnersSection from '@/components/home/PartnersSection';
import NewsSection from '@/components/home/NewsSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <PartnersSection />
      <NewsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
