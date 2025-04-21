
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const { t } = useLanguage();

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
    <section className="py-20 blue-section">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-brand-red">
            {t('home.products.title')}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover our diverse range of salt products, crafted with precision and care to meet various consumer and industrial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
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
                <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white w-full">
                  <Link to={product.path} className="flex items-center justify-center w-full">
                    {t('home.products.more')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
