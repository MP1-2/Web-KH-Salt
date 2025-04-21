
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center bg-navy-900" style={{ background: '#1A237E' }}>
      {/* background image: make lighter overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80')] bg-cover bg-center opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] via-[#1A237E]/60 to-transparent"></div>
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black hero-text">
            <span className="text-brand-red">Premium Salt</span><br />
            <span className="text-black">From Vietnam</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-black max-w-2xl hero-text">
            Delivering high-quality salt products backed by over 30 years of experience and commitment to sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/products" className="flex items-center">
                {t('home.products.title')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black bg-white hover:bg-brand-red hover:text-white">
              <Link to="/contact">
                {t('nav.contact')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
