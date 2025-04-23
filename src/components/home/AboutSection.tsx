import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after the first trigger
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className={`heading-lg mb-6 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
              <span className="text-brand-red">{t('home.about.title')}</span>
            </h2>
            <p className={`text-body mb-6 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
              {t('home.about.desc')}
            </p>
            <p className={`text-body mb-8 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
              Our state-of-the-art facilities in Khanh Hoa province allow us to produce premium salt products that meet the highest international standards. We combine traditional salt harvesting wisdom with modern technology to ensure superior quality and purity in every grain.
            </p>
            <Button 
              className={`bg-brand-red hover:bg-red-700 text-white transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-400' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}
            >
              <Link to="/introduction/about" className="flex items-center">
                {t('home.products.more')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-400' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
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
