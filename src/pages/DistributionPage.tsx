
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';

const DistributionPage = () => {
  const { t, language } = useLanguage();

  // Sample data for distribution statistics
  const stats = [
    {
      id: 1,
      value: '50+',
      label: {
        en: 'Distributors',
        vi: 'Nhà Phân Phối'
      }
    },
    {
      id: 2,
      value: '20+',
      label: {
        en: 'Provinces',
        vi: 'Tỉnh Thành'
      }
    },
    {
      id: 3,
      value: '1000+',
      label: {
        en: 'Retail Points',
        vi: 'Điểm Bán Lẻ'
      }
    }
  ];

  // Sample data for distribution locations
  const locations = [
    {
      id: 1,
      name: 'Ha Noi',
      description: {
        en: 'Our central distribution hub serving northern Vietnam with comprehensive services and full product range.',
        vi: 'Trung tâm phân phối chính của chúng tôi phục vụ miền Bắc Việt Nam với dịch vụ toàn diện và đầy đủ sản phẩm.'
      },
      contact: 'hanoi@khanhhoasalt.com'
    },
    {
      id: 2,
      name: 'Da Nang',
      description: {
        en: 'Strategic central Vietnam location providing rapid service to surrounding provinces.',
        vi: 'Vị trí chiến lược tại miền Trung Việt Nam cung cấp dịch vụ nhanh chóng cho các tỉnh lân cận.'
      },
      contact: 'danang@khanhhoasalt.com'
    },
    {
      id: 3,
      name: 'Ho Chi Minh City',
      description: {
        en: 'Major distribution center for southern Vietnam with warehousing and logistics facilities.',
        vi: 'Trung tâm phân phối lớn cho miền Nam Việt Nam với kho bãi và cơ sở hậu cần.'
      },
      contact: 'hcmc@khanhhoasalt.com'
    },
    {
      id: 4,
      name: 'Can Tho',
      description: {
        en: 'Specialized distribution point serving the Mekong Delta region.',
        vi: 'Điểm phân phối chuyên biệt phục vụ khu vực Đồng bằng sông Cửu Long.'
      },
      contact: 'cantho@khanhhoasalt.com'
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-4">
              <span className="text-brand-red">{t('distribution.title')}</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Our extensive distribution network ensures timely delivery of quality salt products across Vietnam.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat) => (
              <Card key={stat.id} className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-4xl md:text-5xl font-bold text-brand-red mb-2">{stat.value}</p>
                <p className="text-lg font-medium">{stat.label[language]}</p>
              </Card>
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Vietnam Distribution Map</h2>
            {/* This would be replaced with an actual interactive map component */}
            <div className="bg-gray-200 h-[500px] flex items-center justify-center rounded-lg">
              {/* Placeholder for the map */}
              <p className="text-lg text-gray-600">Interactive map of our distribution network across Vietnam</p>
            </div>
          </div>

          {/* Location Cards */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Key Distribution Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location) => (
                <Card key={location.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{location.name}</h3>
                    <p className="text-body-sm mb-4">{location.description[language]}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-medium">Contact:</p>
                      <a href={`mailto:${location.contact}`} className="text-brand-red hover:underline">
                        {location.contact}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DistributionPage;
