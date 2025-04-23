import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-black text-white relative h-[80vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[url('https://www.shutterstock.com/image-photo/salt-farming-vietnam-260nw-2166721493.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-brand-red">Premium Salt</span><br />
            <span className="text-white">From Vietnam</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Delivering high-quality salt products backed by over 30 years of experience and commitment to sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </section>
  );
};

export default Hero;
