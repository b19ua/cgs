
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Service from '@/components/Service';
import CallbackForm from '@/components/CallbackForm';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  Settings, 
  Image, 
  FileText, 
  Share2, 
  TrendingUp, 
  Award, 
  Users, 
  Shield 
} from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-cgs-dark-gray mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-cgs-dark-gray mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg" 
                  className="bg-cgs-red hover:bg-red-700 text-white"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('cta.contact')}
                </Button>
                <a href="tel:+48881222856">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-cgs-red text-cgs-red hover:bg-cgs-red hover:text-white w-full sm:w-auto"
                  >
                    +48 881 222 856
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury car" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      CGS Motors
                    </h3>
                    <p className="text-white/80">
                      {t('cta.trust')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cgs-dark-gray mb-12">
            {t('services.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Service title={t('services.preparation.title')} icon={<Car size={32} />}>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('services.preparation.cleaning')}</li>
                <li>{t('services.preparation.repairs')}</li>
              </ul>
            </Service>
            
            <Service title={t('services.content.title')} icon={<Image size={32} />}>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('services.content.photo')}</li>
                <li>{t('services.content.description')}</li>
              </ul>
            </Service>
            
            <Service title={t('services.promotion.title')} icon={<Share2 size={32} />}>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('services.promotion.listing')}</li>
                <li>{t('services.promotion.strategy')}</li>
              </ul>
            </Service>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cgs-dark-gray mb-12">
            {t('why.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-cgs-red text-white p-3 rounded-full mb-4">
                <Award size={32} />
              </div>
              <p className="text-cgs-dark-gray">{t('why.experience')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-cgs-red text-white p-3 rounded-full mb-4">
                <Users size={32} />
              </div>
              <p className="text-cgs-dark-gray">{t('why.approach')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-cgs-red text-white p-3 rounded-full mb-4">
                <Shield size={32} />
              </div>
              <p className="text-cgs-dark-gray">{t('why.transparency')}</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl text-cgs-dark-gray mb-8">
              {t('cta.trust')}
            </p>
            <Button 
              size="lg" 
              className="bg-cgs-red hover:bg-red-700 text-white"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('cta.contact')}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cgs-dark-gray mb-12">
            {t('contact.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-cgs-dark-gray mb-6">
                {t('cta.callBack')}
              </h3>
              <CallbackForm type="callback" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-cgs-dark-gray mb-6">
                {t('cta.whatsapp')}
              </h3>
              <CallbackForm type="whatsapp" />
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gray-100 rounded-lg">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center">
                <div className="bg-cgs-red text-white p-3 rounded-full mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t('contact.phone')}</p>
                  <a href="tel:+48881222856" className="text-lg font-bold text-cgs-dark-gray hover:text-cgs-red">
                    +48 881 222 856
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-cgs-red text-white p-3 rounded-full mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t('contact.email')}</p>
                  <a href="mailto:info@cgsmotors.com" className="text-lg font-bold text-cgs-dark-gray hover:text-cgs-red">
                    info@cgsmotors.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
