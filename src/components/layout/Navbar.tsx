import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

// Use SVG country flags for language selector
const FlagIcon = ({ country }: { country: 'en' | 'vi' }) => {
  if (country === 'en') {
    // UK flag (SVG, optimized)
    return (
      <svg width="24" height="18" viewBox="0 0 24 18">
        <rect width="24" height="18" rx="2" fill="#fff" />
        <rect width="24" height="2.8" y="7.6" fill="#00247d" />
        <rect width="2.8" height="18" x="10.6" fill="#00247d" />
        <polygon points="0,0 24,18 24,15 3,0" fill="#00247d"/>
        <polygon points="24,0 0,18 0,15 21,0" fill="#00247d"/>
        <polygon points="0,15 7,9.7 8.7,11.8 1.7,16.6" fill="#cf142b"/>
        <polygon points="24,15 17,9.7 15.3,11.8 22.3,16.6" fill="#cf142b"/>
        <polygon points="0,3 7,8.3 8.7,6.2 1.7,1.4" fill="#cf142b"/>
        <polygon points="24,3 17,8.3 15.3,6.2 22.3,1.4" fill="#cf142b"/>
      </svg>
    );
  }
  // Vietnam flag (SVG, optimized)
  return (
    <svg width="24" height="18" viewBox="0 0 24 18">
      <rect width="24" height="18" rx="2" fill="#DA251D" />
      <polygon
        points="12,4 13.09,7.74 17,7.74 13.96,9.63 15.05,13.37 12,11.48 8.95,13.37 10.04,9.63 7,7.74 10.91,7.74"
        fill="#FFE156"
      />
    </svg>
  );
};

// Language flags row for the toggle
const LanguageFlags = ({ language }: { language: 'en' | 'vi' }) => (
  <span className="inline-flex items-center gap-2">
    <span className={language === "en" ? "" : "opacity-40"}>
      <FlagIcon country="en" />
    </span>
    <span className="font-bold text-lg mx-1 select-none">/</span>
    <span className={language === "vi" ? "" : "opacity-40"}>
      <FlagIcon country="vi" />
    </span>
  </span>
);

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
    { title: t('nav.home'), path: '/', hasDropdown: false },
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
    { title: t('nav.career'), path: '/career', hasDropdown: false },
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
    { title: t('nav.contact'), path: '/contact', hasDropdown: false },
    { title: t('nav.distribution'), path: '/distribution', hasDropdown: false }
  ];

  return (
    <header className="fixed top-0 left-0 w-full navbar-bg border-b border-brand-accent z-50 transition-all">
      <div className="section-container">
        <nav className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-extrabold flex items-center text-brand-red tracking-wide uppercase">
            KHANH HOA SALT
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.title)}
                    className="flex items-center space-x-1 py-2 text-black focus:outline-none focus:text-brand-red font-medium"
                  >
                    <span>{link.title}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link to={link.path} className="py-2 text-black font-medium hover:text-brand-red">
                    {link.title}
                  </Link>
                )}
                {link.hasDropdown && (
                  <div className={`absolute left-0 top-full min-w-[200px] bg-white border border-gray-100 shadow-lg transform ${openDropdown === link.title ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'} transition-all duration-300`}>
                    {link.dropdownItems?.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className="block px-4 py-3 hover:bg-brand-red hover:text-white transition-colors text-black"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              onClick={handleLanguageToggle}
              variant="outline"
              className="ml-6 border-brand-red bg-white py-2 px-4 hover:bg-brand-red/90 hover:text-white transition-colors font-bold shadow-lg"
              size="sm"
              aria-label="Toggle language"
            >
              <LanguageFlags language={language} />
            </Button>
          </div>
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-brand-accent" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white absolute top-16 left-0 w-full py-2 shadow-lg z-50 animate-fade-in">
            {navLinks.map((link, index) => (
              <div key={index} className="px-4">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.title)}
                      className="flex items-center justify-between w-full py-3 border-b border-gray-200 text-black"
                    >
                      <span>{link.title}</span>
                      <ChevronDown size={16} className={`transform transition-transform ${openDropdown === link.title ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.title && (
                      <div className="pl-4 bg-slate-100 animate-slide-in">
                        {link.dropdownItems?.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            className="block py-3 border-b border-gray-200 text-black"
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
                    className="block py-3 border-b border-gray-200 text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 py-4 flex justify-center">
              <Button
                onClick={() => {
                  handleLanguageToggle();
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="w-max border-brand-red bg-white py-2 px-5 font-bold shadow-lg"
                aria-label="Toggle language"
              >
                <LanguageFlags language={language} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
