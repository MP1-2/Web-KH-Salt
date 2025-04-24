import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.introduction': 'Introduction',
    'nav.products': 'Products',
    'nav.career': 'Career',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.distribution': 'Distribution Channels',
    'nav.backHome': 'Back to Home',

    // Introduction Dropdown
    'intro.about': 'About Us',
    'intro.mission': 'Missions and Goals',
    'intro.leadership': 'Leadership Board',
    'intro.partners': 'Partners',

    // Products Dropdown
    'products.product1': 'Industrial Salt',
    'products.product2': 'Table Salt',
    'products.product3': 'Specialty Salt',

    // News Dropdown
    'news.internal': 'Internal News',
    'news.market': 'Market Updates',
    'news.csr': 'CSR',

    // Home Page
    'home.about.title': 'About Us',
    'home.about.desc': 'Khanh Hoa Salt is a premier salt producer in Vietnam with over 30 years of experience. We are dedicated to delivering high-quality salt products for both industrial and consumer use while maintaining sustainable practices that respect our environment and community.',

    'home.products.title': 'Our Products',
    'home.products.more': 'Learn More',

    'home.partners.title': 'Our Partners',

    'home.news.title': 'Latest News',
    'home.news.readMore': 'Read More',

    'home.contact.title': 'Contact Us',
    'home.contact.name': 'Name',
    'home.contact.email': 'Email',
    'home.contact.subject': 'Subject',
    'home.contact.message': 'Message',
    'home.contact.submit': 'Submit',

    // Products
    'product.features': 'Key Features',
    'product.contactUs': 'Contact Us',

    // Career
    'career.title': 'Join Our Team',
    'career.viewDetails': 'View Details',
    'career.apply': 'Apply Now',

    // Contact Form
    'contact.generalInquiry': 'General Inquiry',
    'contact.partnership': 'Partnership',
    'contact.jobApplication': 'Job Application',
    'contact.other': 'Other',
    'contact.success': 'Your message has been sent successfully!',
    'contact.error': 'There was an error sending your message. Please try again.',

    // Distribution
    'distribution.title': 'Our Distribution Network',
    'distribution.distributors': 'Distributors',
    'distribution.provinces': 'Provinces',
    'distribution.retailPoints': 'Retail Points'
  },
  vi: {
    // Navigation
    'nav.home': 'Trang Chủ',
    'nav.introduction': 'Giới Thiệu',
    'nav.products': 'Sản Phẩm',
    'nav.career': 'Tuyển Dụng',
    'nav.news': 'Tin Tức',
    'nav.contact': 'Liên Hệ',
    'nav.distribution': 'Kênh Phân Phối',
    'nav.backHome': 'Về trang chủ',

    // Introduction Dropdown
    'intro.about': 'Về Chúng Tôi',
    'intro.mission': 'Sứ Mệnh và Mục Tiêu',
    'intro.leadership': 'Ban Lãnh Đạo',
    'intro.partners': 'Đối Tác',

    // Products Dropdown
    'products.product1': 'Muối Công Nghiệp',
    'products.product2': 'Muối Ăn',
    'products.product3': 'Muối Chuyên Dụng',

    // News Dropdown
    'news.internal': 'Tin Nội Bộ',
    'news.market': 'Cập Nhật Thị Trường',
    'news.csr': 'CSR',

    // Home Page
    'home.about.title': 'Về Chúng Tôi',
    'home.about.desc': 'Muối Khánh Hòa là nhà sản xuất muối hàng đầu tại Việt Nam với hơn 30 năm kinh nghiệm. Chúng tôi cam kết cung cấp các sản phẩm muối chất lượng cao cho cả sử dụng công nghiệp và tiêu dùng, đồng thời duy trì các hoạt động bền vững tôn trọng môi trường và cộng đồng.',

    'home.products.title': 'Sản Phẩm Của Chúng Tôi',
    'home.products.more': 'Xem Thêm',

    'home.partners.title': 'Đối Tác Của Chúng Tôi',

    'home.news.title': 'Tin Tức Mới Nhất',
    'home.news.readMore': 'Đọc Thêm',

    'home.contact.title': 'Liên Hệ Với Chúng Tôi',
    'home.contact.name': 'Họ Tên',
    'home.contact.email': 'Email',
    'home.contact.subject': 'Tiêu Đề',
    'home.contact.message': 'Lời Nhắn',
    'home.contact.submit': 'Gửi',

    // Products
    'product.features': 'Đặc Điểm Chính',
    'product.contactUs': 'Liên Hệ Chúng Tôi',

    // Career
    'career.title': 'Gia Nhập Đội Ngũ Của Chúng Tôi',
    'career.viewDetails': 'Xem Chi Tiết',
    'career.apply': 'Ứng Tuyển Ngay',

    // Contact Form
    'contact.generalInquiry': 'Yêu Cầu Chung',
    'contact.partnership': 'Hợp Tác',
    'contact.jobApplication': 'Ứng Tuyển',
    'contact.other': 'Khác',
    'contact.success': 'Tin nhắn của bạn đã được gửi thành công!',
    'contact.error': 'Có lỗi khi gửi tin nhắn của bạn. Vui lòng thử lại.',

    // Distribution
    'distribution.title': 'Mạng Lưới Phân Phối Của Chúng Tôi',
    'distribution.distributors': 'Nhà Phân Phối',
    'distribution.provinces': 'Tỉnh Thành',
    'distribution.retailPoints': 'Điểm Bán Lẻ'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
