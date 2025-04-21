import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface ProductData {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  features: {
    en: string[];
    vi: string[];
  };
  image: string;
}

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t, language } = useLanguage();

  // This would be replaced by real API data
  const productData: Record<string, ProductData> = {
    'industrial-salt': {
      id: 'industrial-salt',
      name: {
        en: 'Industrial Salt',
        vi: 'Muối Công Nghiệp'
      },
      description: {
        en: 'Our industrial salt is produced to meet the highest industry standards, ensuring purity and consistency for various industrial applications. From chemical manufacturing to water treatment, our industrial salt delivers reliable performance and quality in every batch.',
        vi: 'Muối công nghiệp của chúng tôi được sản xuất để đáp ứng các tiêu chuẩn công nghiệp cao nhất, đảm bảo độ tinh khiết và tính nhất quán cho các ứng dụng công nghiệp khác nhau. Từ sản xuất hóa chất đến xử lý nước, muối công nghiệp của chúng tôi mang lại hiệu suất và chất lượng đáng tin cậy trong mọi lô hàng.'
      },
      features: {
        en: [
          'High purity levels (99.5% NaCl)',
          'Consistent granule size for industrial processes',
          'Free from harmful contaminants',
          'Available in bulk quantities',
          'Complies with international quality standards',
        ],
        vi: [
          'Mức độ tinh khiết cao (99,5% NaCl)',
          'Kích thước hạt nhất quán cho các quy trình công nghiệp',
          'Không có chất gây ô nhiễm độc hại',
          'Có sẵn với số lượng lớn',
          'Tuân thủ các tiêu chuẩn chất lượng quốc tế',
        ]
      },
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80'
    },
    'table-salt': {
      id: 'table-salt',
      name: {
        en: 'Table Salt',
        vi: 'Muối Ăn'
      },
      description: {
        en: 'Our premium table salt is carefully harvested and processed to ensure superior flavor and purity for culinary applications. With optimal mineral content and fine grain structure, our table salt enhances the taste of your dishes while providing essential nutrients.',
        vi: 'Muối ăn cao cấp của chúng tôi được thu hoạch và chế biến cẩn thận để đảm bảo hương vị và độ tinh khiết vượt trội cho các ứng dụng ẩm thực. Với hàm lượng khoáng chất tối ưu và cấu trúc hạt mịn, muối ăn của chúng tôi làm tăng hương vị món ăn đồng thời cung cấp các chất dinh dưỡng thiết yếu.'
      },
      features: {
        en: [
          'Fine grain texture for even distribution',
          'Enhanced with essential minerals',
          'Free from artificial additives',
          'Eco-friendly packaging options',
          'Superior taste profile',
        ],
        vi: [
          'Kết cấu hạt mịn để phân phối đều',
          'Tăng cường với các khoáng chất thiết yếu',
          'Không có phụ gia nhân tạo',
          'Các tùy chọn bao bì thân thiện với môi trường',
          'Hồ sơ hương vị vượt trội',
        ]
      },
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80'
    },
    'specialty-salt': {
      id: 'specialty-salt',
      name: {
        en: 'Specialty Salt',
        vi: 'Muối Chuyên Dụng'
      },
      description: {
        en: 'Our specialty salt products are formulated to meet specific industry requirements and specialized applications. From pharmaceutical-grade salt to agriculture and food processing formulations, our specialty salts deliver targeted solutions with consistent quality and performance.',
        vi: 'Các sản phẩm muối đặc biệt của chúng tôi được công thức để đáp ứng các yêu cầu cụ thể của ngành và các ứng dụng chuyên biệt. Từ muối dược phẩm đến nông nghiệp và công thức chế biến thực phẩm, muối đặc biệt của chúng tôi mang đến giải pháp mục tiêu với chất lượng và hiệu suất nhất quán.'
      },
      features: {
        en: [
          'Custom formulations for specific applications',
          'Pharmaceutical-grade options available',
          'Specialized processing for targeted properties',
          'Precise quality control standards',
          'Technical support and consultation',
        ],
        vi: [
          'Công thức tùy chỉnh cho các ứng dụng cụ thể',
          'Có các tùy chọn cấp dược phẩm',
          'Xử lý chuyên biệt cho các thuộc tính mục tiêu',
          'Tiêu chuẩn kiểm soát chất lượng chính xác',
          'Hỗ trợ kỹ thuật và tư vấn',
        ]
      },
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80'
    }
  };

  const product = productData[productId || ''] || {
    id: '',
    name: { en: 'Product Not Found', vi: 'Không Tìm Thấy Sản Phẩm' },
    description: { en: 'The requested product could not be found.', vi: 'Không thể tìm thấy sản phẩm được yêu cầu.' },
    features: { en: [], vi: [] },
    image: 'https://via.placeholder.com/800x400'
  };

  return (
    <Layout>
      <div className="pt-10 pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={product.image} alt={product.name[language]} className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-xl" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="heading-lg mb-6">
                <span className="text-brand-red">{product.name[language]}</span>
              </h1>
              <p className="text-body mb-8">{product.description[language]}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{t('product.features')}</h3>
                <ul className="space-y-2">
                  {product.features[language].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 bg-brand-red rounded-full p-1 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="bg-white text-black border-white hover:bg-gray-200 hover:text-black">
                <Link to="/contact">
                  {t('product.contactUs')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
