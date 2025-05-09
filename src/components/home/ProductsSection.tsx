import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
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

  const products = [
    {
      id: 1,
      name: t('products.product1'),
      description: 'High-grade industrial salt designed for various industrial applications including chemical processing, water treatment, and manufacturing.',
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80",
      path: '/products/industrial-salt',
    },
    {
      id: 2,
      name: t('products.product2'),
      description: 'Premium table salt refined for culinary use, offering a perfect balance of flavor enhancement for all your cooking needs.',
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80",
      path: '/products/table-salt',
    },
    {
      id: 3,
      name: t('products.product3'),
      description: 'Specialized salt formulations for specific industries and applications, including pharmaceutical, agriculture, and food processing.',
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80",
      path: '/products/specialty-salt',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className={`heading-lg mb-4 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
            <span className="text-brand-red">{t('home.products.title')}</span>
          </h2>
          <p className={`text-body max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
            Discover our diverse range of salt products, crafted with precision and care to meet various consumer and industrial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow transition-all duration-1000 ${isVisible ? `animate-fly-in-left animation-delay-${(index + 1) * 200}` : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm">{product.description}</p>
              </CardContent>
              <CardFooter>
              <Link
                to={product.path}
                className="text-brand-red hover:text-brand-black text-sm font-medium flex items-center transition-colors duration-300"
              >
                {t('home.products.more')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
