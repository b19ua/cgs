
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const texts = {
    ru: {
      title: "404",
      message: "Упс! Страница не найдена",
      button: "Вернуться на главную"
    },
    en: {
      title: "404",
      message: "Oops! Page not found",
      button: "Return to Home"
    },
    pl: {
      title: "404",
      message: "Ups! Strona nie znaleziona",
      button: "Powrót do strony głównej"
    },
    uk: {
      title: "404",
      message: "Упс! Сторінка не знайдена",
      button: "Повернутися на головну"
    }
  };

  const currentLang = texts[language as keyof typeof texts] || texts.ru;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-cgs-red">{currentLang.title}</h1>
        <p className="text-xl text-cgs-dark-gray mb-8">{currentLang.message}</p>
        <a href="/">
          <Button className="bg-cgs-red hover:bg-red-700 text-white inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            {currentLang.button}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
