import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-black text-white relative h-[80vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
      
      <div className="section-container relative z-10 flex flex-col items-start">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-left">
            <span className="text-brand-red">Premium Salt</span><br />
            <span className="text-white">From Vietnam</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-black max-w-2xl animate-slide-in-left animation-delay-200">
            Delivering high-quality salt products backed by over 30 years of experience and commitment to sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animation-delay-400">
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/products" className="flex items-center">
                {t('home.products.title')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-white text-black border-white hover:bg-gray-200 hover:text-black"
            >
              <Link to="/contact">
                {t('nav.contact')}
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-white opacity-100"></span>
            <span className="h-3 w-3 rounded-full bg-white opacity-50"></span>
            <span className="h-3 w-3 rounded-full bg-white opacity-50"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
