
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="heading-lg mb-6">
              <span className="text-brand-red">{t('home.about.title')}</span>
            </h2>
            <p className="text-body mb-6">
              {t('home.about.desc')}
            </p>
            <p className="text-body mb-8">
              Our state-of-the-art facilities in Khanh Hoa province allow us to produce premium salt products that meet the highest international standards. We combine traditional salt harvesting wisdom with modern technology to ensure superior quality and purity in every grain.
            </p>
            <Button className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/introduction/about" className="flex items-center">
                {t('home.products.more')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-brand-red"></div>
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80" 
                alt="Salt production" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
