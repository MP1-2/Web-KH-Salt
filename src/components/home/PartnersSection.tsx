import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PartnersSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const partners = [
    { id: 1, name: "Partner 1", logo: "/placeholder.svg" },
    { id: 2, name: "Partner 2", logo: "/placeholder.svg" },
    { id: 3, name: "Partner 3", logo: "/placeholder.svg" },
    { id: 4, name: "Partner 4", logo: "/placeholder.svg" },
    { id: 5, name: "Partner 5", logo: "/placeholder.svg" },
    { id: 6, name: "Partner 6", logo: "/placeholder.svg" },
  ];

  // Duplicate partners for seamless infinite scrolling
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      // Reset to 0 when reaching the end of the original partners list
      if (newIndex >= partners.length) {
        return 0;
      }
      return newIndex;
    });
  };

  // Calculate the translateX offset for manual navigation
  const translateXOffset = -(currentIndex * (100 / partners.length));

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className={`heading-lg mb-4 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
            <span className="text-brand-red">{t('home.partners.title')}</span>
          </h2>
          <p className={`text-body max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
            We collaborate with industry leaders to ensure the highest quality standards and innovative solutions.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex"
              style={{
                transform: `translateX(${translateXOffset}%)`,
                transition: currentIndex !== 0 ? 'transform 0.5s ease-in-out' : 'none',
              }}
            >
              <div className="flex animate-scroll-left">
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={`${partner.id}-${index}`}
                    className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                    style={{ minWidth: '200px' }}
                  >
                    <a href="#" className="grayscale hover:grayscale-0 transition-all flex items-center justify-center h-full">
                      <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 w-auto" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              onClick={handleNext}
              className="bg-brand-red hover:bg-red-700 text-white"
            >
              Next
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
