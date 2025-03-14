
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-cgs-dark-gray">
            CGS Motors
          </Link>
        </div>

        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-wrap justify-center space-x-6">
            <Link to="/" className="text-cgs-dark-gray hover:text-cgs-red transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/#services" className="text-cgs-dark-gray hover:text-cgs-red transition-colors">
              {t('nav.services')}
            </Link>
            <Link to="/#about" className="text-cgs-dark-gray hover:text-cgs-red transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/#contact" className="text-cgs-dark-gray hover:text-cgs-red transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="tel:+48881222856" className="flex items-center text-cgs-dark-gray hover:text-cgs-red">
              <Phone size={18} className="mr-2" />
              <span>+48 881 222 856</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
