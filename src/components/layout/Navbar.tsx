import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  const navLinks = [
    {
      title: t('nav.home'),
      path: '/',
      hasDropdown: false
    },
    {
      title: t('nav.introduction'),
      path: '/introduction',
      hasDropdown: true,
      dropdownItems: [
        { title: t('intro.about'), path: '/introduction/about' },
        { title: t('intro.mission'), path: '/introduction/missions' },
        { title: t('intro.leadership'), path: '/introduction/leadership' },
        { title: t('intro.partners'), path: '/introduction/partners' }
      ]
    },
    {
      title: t('nav.products'),
      path: '/products',
      hasDropdown: true,
      dropdownItems: [
        { title: t('products.product1'), path: '/products/industrial-salt' },
        { title: t('products.product2'), path: '/products/table-salt' },
        { title: t('products.product3'), path: '/products/specialty-salt' }
      ]
    },
    {
      title: t('nav.career'),
      path: '/career',
      hasDropdown: false
    },
    {
      title: t('nav.news'),
      path: '/news',
      hasDropdown: true,
      dropdownItems: [
        { title: t('news.internal'), path: '/news/internal' },
        { title: t('news.market'), path: '/news/market' },
        { title: t('news.csr'), path: '/news/csr' }
      ]
    },
    {
      title: t('nav.contact'),
      path: '/contact',
      hasDropdown: false
    },
    {
      title: t('nav.distribution'),
      path: '/distribution',
      hasDropdown: false
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-brand-black text-white z-50">
      <div className="section-container">
        <nav className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold flex items-center">
            KHANH HOA SALT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.title)}
                    className="flex items-center space-x-1 py-2"
                  >
                    <span>{link.title}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link to={link.path} className="py-2">
                    {link.title}
                  </Link>
                )}

                {link.hasDropdown && (
                  <div className={`absolute left-0 top-full min-w-[200px] bg-brand-black shadow-lg transform ${openDropdown === link.title ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'} transition-all duration-300`}>
                    {link.dropdownItems?.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className="block px-4 py-3 hover:bg-brand-red hover:text-white transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Toggle with Flags */}
            <Button
              onClick={handleLanguageToggle}
              variant="outline"
              className="ml-4 border-white text-white hover:bg-brand-red"
              size="sm"
            >
              {language === 'en' ? (
                <span role="img" aria-label="Vietnamese flag" className="text-xl">🇻🇳</span>
              ) : (
                <span role="img" aria-label="English flag" className="text-xl">🇬🇧</span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-brand-black absolute top-16 left-0 w-full py-2 shadow-lg z-50 animate-fade-in">
            {navLinks.map((link, index) => (
              <div key={index} className="px-4">
                {link.hasDropdown ? (
                  <> 
                    <button
                      onClick={() => toggleDropdown(link.title)}
                      className="flex items-center justify-between w-full py-3 border-b border-gray-700"
                    >
                      <span>{link.title}</span>
                      <ChevronDown size={16} className={`transform transition-transform ${openDropdown === link.title ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.title && (
                      <div className="pl-4 bg-gray-900 animate-slide-in">
                        {link.dropdownItems?.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            className="block py-3 border-b border-gray-800"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block py-3 border-b border-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 py-4">
              <Button
                onClick={() => {
                  handleLanguageToggle();
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="w-full border-white text-white hover:bg-brand-red"
              >
                {language === 'en' ? (
                  <span role="img" aria-label="Vietnamese flag" className="text-xl">🇻🇳</span>
                ) : (
                  <span role="img" aria-label="English flag" className="text-xl">🇬🇧</span>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
