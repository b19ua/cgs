
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cgs-dark-gray text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CGS Motors</h3>
            <p className="mb-4">{t('cta.trust')}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact.title')}</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+48881222856" className="hover:text-cgs-red transition-colors">
                  +48 881 222 856
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@cgsmotors.com" className="hover:text-cgs-red transition-colors">
                  info@cgsmotors.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.carinvest')}</h3>
            <a 
              href="https://carinvest-europe.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-cgs-red transition-colors"
            >
              carinvest-europe.com
              <ExternalLink size={14} className="ml-1" />
            </a>
            <div className="mt-4">
              <h4 className="font-bold mb-2">TikTok:</h4>
              <div className="space-y-1">
                <a 
                  href="https://www.tiktok.com/@carinvest.krakow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-cgs-red transition-colors"
                >
                  @carinvest.krakow
                  <ExternalLink size={14} className="ml-1" />
                </a>
                <a 
                  href="https://www.tiktok.com/@car.invest.warsaw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-cgs-red transition-colors"
                >
                  @car.invest.warsaw
                  <ExternalLink size={14} className="ml-1" />
                </a>
                <a 
                  href="https://www.tiktok.com/@car.invest.group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-cgs-red transition-colors"
                >
                  @car.invest.group
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} CGS Motors. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
