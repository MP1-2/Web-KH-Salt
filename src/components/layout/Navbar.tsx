import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  const navLinks = [
    { title: t('nav.home'), path: '/', hasDropdown: false },
    { title: t('nav.introduction'), path: '/introduction', hasDropdown: true, dropdownItems: [
      { title: t('intro.about'), path: '/introduction/about' },
      { title: t('intro.mission'), path: '/introduction/missions' },
      { title: t('intro.leadership'), path: '/introduction/leadership' },
      { title: t('intro.partners'), path: '/introduction/partners' }
    ] },
    { title: t('nav.products'), path: '/products', hasDropdown: true, dropdownItems: [
      { title: t('products.product1'), path: '/products/industrial-salt' },
      { title: t('products.product2'), path: '/products/table-salt' },
      { title: t('products.product3'), path: '/products/specialty-salt' }
    ] },
    { title: t('nav.career'), path: '/career', hasDropdown: false },
    { title: t('nav.news'), path: '/news', hasDropdown: true, dropdownItems: [
      { title: t('news.internal'), path: '/news/internal' },
      { title: t('news.market'), path: '/news/market' },
      { title: t('news.csr'), path: '/news/csr' }
    ] },
    { title: t('nav.contact'), path: '/contact', hasDropdown: false },
    { title: t('nav.distribution'), path: '/distribution', hasDropdown: false }
  ];

  // Helper to render flag + code
  const renderLangLabel = () => (
    <span className="flex items-center space-x-2">
      {language === 'en' ? (
        <span role="img" aria-label="English flag" className="text-xl">🇬🇧</span>
      ) : (
        <span role="img" aria-label="Vietnamese flag" className="text-xl">🇻🇳</span>
      )}
      <span className="uppercase font-medium">
        {language === 'en' ? 'EN' : 'VN'}
      </span>
    </span>
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-[#ffeded] text-white z-50">
      <div className="section-container">
        <nav className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold flex items-center">
            KHANH HOA SALT
          </Link>

          {/* Hamburger Menu Button */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                {link.hasDropdown ? (
                  <button onClick={() => toggleDropdown(link.title)} className="flex items-center space-x-1 py-2">
                    <span>{link.title}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link to={link.path} className="py-2">{link.title}</Link>
                )}

                {link.hasDropdown && (
                  <div className={`absolute left-0 top-full min-w-[200px] bg-[#ffeded] shadow-lg transform ${openDropdown === link.title ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'} transition-all duration-300`}>
                    {link.dropdownItems?.map((item, i) => (
                      <Link key={i} to={item.path} className="block px-4 py-3 hover:bg-brand-red hover:text-white" onClick={() => setOpenDropdown(null)}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Desktop Language Toggle */}
            <Button
              onClick={handleLanguageToggle}
              variant="outline"
              className={`ml-4 border-white ${
                language === 'en' 
                  ? 'text-black bg-white hover:bg-brand-red hover:text-white' 
                  : 'bg-brand-red text-white hover:bg-white hover:text-black'
              }`}
              size="sm"
            >
              {renderLangLabel()}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#ffeded] absolute top-16 left-0 w-full py-2 shadow-lg z-50 animate-fade-in">
            {navLinks.map((link, idx) => (
              <div key={idx} className="px-4">
                {link.hasDropdown ? (
                  <>
                    <button onClick={() => toggleDropdown(link.title)} className="flex items-center justify-between w-full py-3 border-b border-gray-700">
                      <span>{link.title}</span>
                      <ChevronDown size={16} className={`${openDropdown === link.title ? 'rotate-180' : ''} transform`} />
                    </button>
                    {openDropdown === link.title && (
                      <div className="pl-4 bg-gray-900 animate-slide-in">
                        {link.dropdownItems?.map((item, i) => (
                          <Link key={i} to={item.path} className="block py-3 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.path} className="block py-3 border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                    {link.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Language Toggle */}
            <div className="px-4 py-4">
              <Button
                onClick={() => { handleLanguageToggle(); setIsMenuOpen(false); }}
                variant="outline"
                className={`w-full border-white ${
                  language === 'en' 
                    ? 'text-black bg-white hover:bg-brand-red hover:text-white' 
                    : 'bg-brand-red text-white hover:bg-white hover:text-black'
                }`}
                size="sm"
              >
                {renderLangLabel()}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
