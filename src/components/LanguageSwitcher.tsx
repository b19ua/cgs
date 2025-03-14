
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'pl', label: 'PL' },
    { code: 'uk', label: 'UA' },
  ];

  return (
    <div className="flex space-x-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          className={cn(
            "px-2 py-1 min-w-8 text-sm font-medium",
            language === lang.code 
              ? "bg-cgs-red text-white" 
              : "text-cgs-dark-gray hover:bg-gray-100"
          )}
          onClick={() => setLanguage(lang.code as any)}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
