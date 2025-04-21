
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();

  // This would be replaced with actual partner logos
  const partners = [
    { id: 1, name: "Partner 1", logo: "/placeholder.svg" },
    { id: 2, name: "Partner 2", logo: "/placeholder.svg" },
    { id: 3, name: "Partner 3", logo: "/placeholder.svg" },
    { id: 4, name: "Partner 4", logo: "/placeholder.svg" },
    { id: 5, name: "Partner 5", logo: "/placeholder.svg" },
    { id: 6, name: "Partner 6", logo: "/placeholder.svg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            <span className="text-brand-red">{t('home.partners.title')}</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We collaborate with industry leaders to ensure the highest quality standards and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <a href="#" className="grayscale hover:grayscale-0 transition-all">
                <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 w-auto" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
