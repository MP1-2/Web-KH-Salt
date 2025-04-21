
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(115deg,#fff 70%,#FF0023 100%)' }}
    >
      {/* Vivid cover visual */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/e363ce13-fa08-4779-a5b0-b38b0b3bfab9.png"
          alt="Khanh Hoa Salt Company Profile"
          className="object-cover w-full h-full opacity-80"
        />
        {/* White overlay for vibrancy */}
        <div className="absolute inset-0 bg-white/90 mix-blend-lighten"></div>
      </div>
      {/* Hero Content */}
      <div className="section-container relative z-10 w-full flex flex-col items-center">
        <h1 className="font-bold mb-2 text-5xl md:text-6xl text-center tracking-tighter" style={{ color: "#FF0023" }}>
          {`COMPANY PROFILE`}
        </h1>
        <h2 className="text-lg md:text-xl mb-6 text-center font-semibold tracking-wide uppercase" style={{ color: '#111' }}>
          {`Vị mặn tinh khiết cho sức khỏe Việt`}
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-black max-w-2xl text-center">
          {`Delivering premium, pure Vietnamese salt to families and industries worldwide.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white shadow-lg font-bold uppercase tracking-wider">
            <Link to="/products" className="flex items-center font-bold">
              {t('home.products.title')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-brand-red text-brand-red bg-white hover:bg-brand-red hover:text-white font-bold uppercase tracking-wider"
          >
            <Link to="/contact">{t('nav.contact')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
