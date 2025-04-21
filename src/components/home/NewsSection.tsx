
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const { t } = useLanguage();

  // Sample news data
  const news = [
    {
      id: 1,
      title: "Khanh Hoa Salt Expands Production Capacity",
      summary: "We're excited to announce a significant expansion of our production facilities, increasing our capacity by 30% to meet growing demand.",
      date: "2023-11-15",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80",
      category: "internal",
      path: "/news/internal/1"
    },
    {
      id: 2,
      title: "Global Salt Market Trends: 2023 Report",
      summary: "The latest industry report shows promising growth in the global salt market, with increasing demand in chemical and food processing sectors.",
      date: "2023-10-28",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80",
      category: "market",
      path: "/news/market/1"
    },
    {
      id: 3,
      title: "Community Support Program Launches in Khanh Hoa",
      summary: "Our new CSR initiative aims to support local communities through education programs and environmental conservation efforts.",
      date: "2023-10-05",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80",
      category: "csr",
      path: "/news/csr/1"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="heading-lg mb-2">
              <span className="text-brand-red">{t('home.news.title')}</span>
            </h2>
            <p className="text-body max-w-2xl">
              Stay updated with the latest news and developments from Khanh Hoa Salt.
            </p>
          </div>
          <Button variant="link" className="text-brand-red mt-4 md:mt-0 p-0">
            <Link to="/news" className="flex items-center">
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(item.date)}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-body-sm">{item.summary}</p>
              </CardContent>
              <CardFooter>
                <Link to={item.path} className="text-brand-red hover:text-red-700 font-medium flex items-center">
                  {t('home.news.readMore')}
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

export default NewsSection;
