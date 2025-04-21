import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-accent text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">KHANH HOA SALT</h3>
            <p className="mb-4 text-white/90">
              Premium salt products from Vietnam, dedicated to quality and sustainability.
            </p>
            <div className="flex items-center space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.introduction')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/introduction/about" className="text-white hover:text-brand-red transition-colors">
                  {t('intro.about')}
                </Link>
              </li>
              <li>
                <Link to="/introduction/missions" className="text-white hover:text-brand-red transition-colors">
                  {t('intro.mission')}
                </Link>
              </li>
              <li>
                <Link to="/introduction/leadership" className="text-white hover:text-brand-red transition-colors">
                  {t('intro.leadership')}
                </Link>
              </li>
              <li>
                <Link to="/introduction/partners" className="text-white hover:text-brand-red transition-colors">
                  {t('intro.partners')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/industrial-salt" className="text-white hover:text-brand-red transition-colors">
                  {t('products.product1')}
                </Link>
              </li>
              <li>
                <Link to="/products/table-salt" className="text-white hover:text-brand-red transition-colors">
                  {t('products.product2')}
                </Link>
              </li>
              <li>
                <Link to="/products/specialty-salt" className="text-white hover:text-brand-red transition-colors">
                  {t('products.product3')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                <span className="text-white/90">Khanh Hoa, Vietnam</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-brand-red shrink-0" />
                <a href="mailto:info@khanhhoasalt.com" className="text-white hover:text-brand-red transition-colors">
                  info@khanhhoasalt.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand-red shrink-0" />
                <a href="tel:+84XXXXXXXXX" className="text-white hover:text-brand-red transition-colors">
                  +84 XX XXXX XXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-sky text-sm text-white/80 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Khanh Hoa Salt. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-brand-red mr-4 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-brand-red transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
