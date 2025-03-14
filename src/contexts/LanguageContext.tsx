import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'ru' | 'en' | 'pl' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
}

const translations = {
  'nav.home': {
    ru: 'Главная',
    en: 'Home',
    pl: 'Strona główna',
    uk: 'Головна',
  },
  'nav.services': {
    ru: 'Услуги',
    en: 'Services',
    pl: 'Usługi',
    uk: 'Послуги',
  },
  'nav.about': {
    ru: 'О нас',
    en: 'About',
    pl: 'O nas',
    uk: 'Про нас',
  },
  'nav.contact': {
    ru: 'Контакты',
    en: 'Contact',
    pl: 'Kontakt',
    uk: 'Контакти',
  },
  'hero.title': {
    ru: 'Продажа вашего автомобиля с CGS Motors',
    en: 'Sell Your Car with CGS Motors',
    pl: 'Sprzedaj swój samochód z CGS Motors',
    uk: 'Продаж вашого автомобіля з CGS Motors',
  },
  'hero.subtitle': {
    ru: 'Продажа автомобиля может быть сложным и трудоемким процессом. В CGS Motors мы предлагаем комплексную поддержку, чтобы сделать этот процесс максимально простым и выгодным для вас.',
    en: 'Selling a car can be a complex and time-consuming process. At CGS Motors, we offer comprehensive support to make this process as simple and profitable as possible for you.',
    pl: 'Sprzedaż samochodu może być złożonym i czasochłonnym procesem. W CGS Motors oferujemy kompleksowe wsparcie, aby ten proces był jak najprostszy i jak najbardziej opłacalny dla Ciebie.',
    uk: 'Продаж автомобіля може бути складним і трудомістким процесом. У CGS Motors ми пропонуємо комплексну підтримку, щоб зробити цей процес максимально простим і вигідним для вас.',
  },
  'services.title': {
    ru: 'Наши услуги включают:',
    en: 'Our services include:',
    pl: 'Nasze usługi obejmują:',
    uk: 'Наші послуги включають:',
  },
  'services.preparation.title': {
    ru: 'Профессиональная подготовка автомобиля:',
    en: 'Professional car preparation:',
    pl: 'Profesjonalne przygotowanie samochodu:',
    uk: 'Професійна підготовка автомобіля:',
  },
  'services.preparation.cleaning': {
    ru: 'Глубокая химчистка салона и полировка кузова для придания автомобилю привлекательного внешнего вида.',
    en: 'Deep interior cleaning and body polishing to give the car an attractive appearance.',
    pl: 'Głębokie czyszczenie wnętrza i polerowanie nadwozia, aby nadać samochodowi atrakcyjny wygląd.',
    uk: 'Глибока хімчистка салону та полірування кузова для надання автомобілю привабливого зовнішнього вигляду.',
  },
  'services.preparation.repairs': {
    ru: 'Устранение технических неисправностей для обеспечения надежности и безопасности.',
    en: 'Fixing technical issues to ensure reliability and safety.',
    pl: 'Usuwanie usterek technicznych w celu zapewnienia niezawodności i bezpieczeństwa.',
    uk: 'Усунення технічних несправностей для забезпечення надійності та безпеки.',
  },
  'services.content.title': {
    ru: 'Создание качественного контента:',
    en: 'Creating quality content:',
    pl: 'Tworzenie jakościowej treści:',
    uk: 'Створення якісного контенту:',
  },
  'services.content.photo': {
    ru: 'Профессиональная фотосъемка и видеосъемка автомобиля, демонстрирующие его преимущества.',
    en: 'Professional photography and video recording of the car, showcasing its advantages.',
    pl: 'Profesjonalna fotografia i nagrania wideo samochodu, prezentujące jego zalety.',
    uk: 'Професійна фотозйомка та відеозйомка автомобіля, що демонструють його переваги.',
  },
  'services.content.description': {
    ru: 'Составление подробного и привлекательного описания, подчеркивающего сильные стороны вашего автомобиля.',
    en: 'Creating a detailed and attractive description, highlighting the strengths of your car.',
    pl: 'Tworzenie szczegółowego i atrakcyjnego opisu, podkreślającego mocne strony Twojego samochodu.',
    uk: 'Складання детального та привабливого опису, що підкреслює сильні сторони вашого автомобіля.',
  },
  'services.promotion.title': {
    ru: 'Эффективное продвижение:',
    en: 'Effective promotion:',
    pl: 'Skuteczna promocja:',
    uk: 'Ефективне просування:',
  },
  'services.promotion.listing': {
    ru: 'Размещение объявлений на нашем сайте Car Invest Europe и в социальных сетях, включая TikTok, где наши площадки привлекают более 50 000 просмотров в месяц.',
    en: 'Placing ads on our Car Invest Europe website and social networks, including TikTok, where our platforms attract more than 50,000 views per month.',
    pl: 'Umieszczanie ogłoszeń na naszej stronie Car Invest Europe i w sieciach społecznościowych, w tym TikTok, gdzie nasze platformy przyciągają ponad 50 000 wyświetleń miesięcznie.',
    uk: 'Розміщення оголошень на нашому сайті Car Invest Europe та в соціальних мережах, включаючи TikTok, де наші майданчики залучають понад 50 000 переглядів на місяць.',
  },
  'services.promotion.strategy': {
    ru: 'Использование проверенных стратегий маркетинга для быстрого поиска потенциальных покупателей.',
    en: 'Using proven marketing strategies to quickly find potential buyers.',
    pl: 'Stosowanie sprawdzonych strategii marketingowych w celu szybkiego znalezienia potencjalnych nabywców.',
    uk: 'Використання перевірених стратегій маркетингу для швидкого пошуку потенційних покупців.',
  },
  'why.title': {
    ru: 'Почему выбирают нас:',
    en: 'Why choose us:',
    pl: 'Dlaczego nas wybierają:',
    uk: 'Чому обирають нас:',
  },
  'why.experience': {
    ru: 'Опыт и профессионализм: Наша команда обладает многолетним опытом в сфере автомобильных продаж и маркетинга.',
    en: 'Experience and professionalism: Our team has many years of experience in car sales and marketing.',
    pl: 'Doświadczenie i profesjonalizm: Nasz zespół posiada wieloletnie doświadczenie w sprzedaży samochodów i marketingu.',
    uk: 'Досвід і професіоналізм: Наша команда має багаторічний досвід у сфері автомобільних продажів і маркетингу.',
  },
  'why.approach': {
    ru: 'Индивидуальный подход: Мы учитываем особенности каждого автомобиля и потребности клиента для достижения наилучшего результата.',
    en: 'Individual approach: We take into account the features of each car and the needs of the client to achieve the best result.',
    pl: 'Indywidualne podejście: Uwzględniamy cechy każdego samochodu i potrzeby klienta, aby osiągnąć najlepszy rezultat.',
    uk: 'Індивідуальний підхід: Ми враховуємо особливості кожного автомобіля та потреби клієнта для досягнення найкращого результату.',
  },
  'why.transparency': {
    ru: 'Прозрачность и надежность: Мы обеспечиваем честность и открытость на всех этапах сотрудничества.',
    en: 'Transparency and reliability: We ensure honesty and openness at all stages of cooperation.',
    pl: 'Przejrzystość i niezawodność: Zapewniamy uczciwość i otwartość na wszystkich etapach współpracy.',
    uk: 'Прозорість і надійність: Ми забезпечуємо чесність і відкритість на всіх етапах співпраці.',
  },
  'cta.trust': {
    ru: 'Доверьте продажу вашего автомобиля профессионалам CGS Motors и получите максимальную выгоду без лишних хлопот.',
    en: 'Trust the sale of your car to CGS Motors professionals and get the maximum benefit without unnecessary hassle.',
    pl: 'Zaufaj sprzedaż swojego samochodu profesjonalistom CGS Motors i uzyskaj maksymalną korzyść bez zbędnych kłopotów.',
    uk: 'Довірте продаж вашого автомобіля професіоналам CGS Motors і отримайте максимальну вигоду без зайвих клопотів.',
  },
  'cta.contact': {
    ru: 'Связаться со специалистом',
    en: 'Contact a specialist',
    pl: 'Skontaktuj się ze specjalistą',
    uk: 'Зв\'язатися зі спеціалістом',
  },
  'cta.callBack': {
    ru: 'Заказать обратный звонок',
    en: 'Request a call back',
    pl: 'Zamów oddzwonienie',
    uk: 'Замовити зворотний дзвінок',
  },
  'cta.whatsapp': {
    ru: 'Написать в WhatsApp',
    en: 'Message on WhatsApp',
    pl: 'Napisz na WhatsApp',
    uk: 'Написати у WhatsApp',
  },
  'cta.whatsappMessage': {
    ru: 'Связаться в WhatsApp',
    en: 'Contact us on WhatsApp',
    pl: 'Skontaktuj się przez WhatsApp',
    uk: 'Зв\'язатися у WhatsApp',
  },
  'contact.title': {
    ru: 'Связаться с нами',
    en: 'Contact us',
    pl: 'Skontaktuj się z nami',
    uk: 'Зв\'язатися з нами',
  },
  'contact.phone': {
    ru: 'Телефон',
    en: 'Phone',
    pl: 'Telefon',
    uk: 'Телефон',
  },
  'contact.email': {
    ru: 'Электронная почта',
    en: 'Email',
    pl: 'Email',
    uk: 'Електронна пошта',
  },
  'form.name': {
    ru: 'Ваше имя',
    en: 'Your name',
    pl: 'Twoje imię',
    uk: 'Ваше ім\'я',
  },
  'form.phone': {
    ru: 'Ваш телефон',
    en: 'Your phone',
    pl: 'Twój telefon',
    uk: 'Ваш телефон',
  },
  'form.submit': {
    ru: 'Отправить',
    en: 'Submit',
    pl: 'Wyślij',
    uk: 'Надіслати',
  },
  'form.success': {
    ru: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    en: 'Thank you! We will contact you shortly.',
    pl: 'Dziękujemy! Skontaktujemy się z Tobą wkrótce.',
    uk: 'Дякуємо! Ми зв\'яжемося з вами найближчим часом.',
  },
  'footer.rights': {
    ru: 'Все права защищены',
    en: 'All rights reserved',
    pl: 'Wszelkie prawa zastrzeżone',
    uk: 'Всі права захищені',
  },
  'footer.carinvest': {
    ru: 'Сайт компании Car Invest',
    en: 'Car Invest company website',
    pl: 'Strona firmy Car Invest',
    uk: 'Сайт компанії Car Invest',
  },
  'promotion.title': {
    ru: 'Как мы будем продвигать Ваш автомобиль',
    en: 'How we will promote your car',
    pl: 'Jak będziemy promować Twój samochód',
    uk: 'Як ми просуватимемо Ваш автомобіль',
  },
  'promotion.social': {
    ru: 'Социальные сети компании',
    en: 'Company social media',
    pl: 'Media społecznościowe firmy',
    uk: 'Соціальні мережі компанії',
  },
  'promotion.website': {
    ru: 'Сайт компании Car Invest',
    en: 'Car Invest company website',
    pl: 'Strona firmy Car Invest',
    uk: 'Сайт компанії Car Invest',
  },
  'promotion.tiktok.krakow': {
    ru: 'TikTok Краков',
    en: 'TikTok Krakow',
    pl: 'TikTok Kraków',
    uk: 'TikTok Краків',
  },
  'promotion.tiktok.warsaw': {
    ru: 'TikTok Варшава',
    en: 'TikTok Warsaw',
    pl: 'TikTok Warszawa',
    uk: 'TikTok Варшава',
  },
  'promotion.tiktok.group': {
    ru: 'TikTok Группа',
    en: 'TikTok Group',
    pl: 'TikTok Grupa',
    uk: 'TikTok Група',
  },
  'pricing.title': {
    ru: 'Стоимость услуги',
    en: 'Service price',
    pl: 'Cena usługi',
    uk: 'Вартість послуги',
  },
  'pricing.promotion': {
    ru: 'Специальное предложение!',
    en: 'Special offer!',
    pl: 'Oferta specjalna!',
    uk: 'Спеціальна пропозиція!',
  },
  'pricing.discount': {
    ru: 'Скидка 30% на всю услугу!',
    en: '30% discount on the entire service!',
    pl: '30% zniżki na całą usługę!',
    uk: 'Знижка 30% на всю послугу!',
  },
  'pricing.includes': {
    ru: 'Стоимость включает:',
    en: 'Price includes:',
    pl: 'Cena zawiera:',
    uk: 'Вартість включає:',
  },
  'pricing.preparation': {
    ru: 'Предпродажную подготовку автомобиля',
    en: 'Pre-sale car preparation',
    pl: 'Przygotowanie samochodu do sprzedaży',
    uk: 'Передпродажну підготовку автомобіля',
  },
  'pricing.photos': {
    ru: 'Профессиональную фотосъемку',
    en: 'Professional photography',
    pl: 'Profesjonalne zdjęcia',
    uk: 'Професійну фотозйомку',
  },
  'pricing.placement': {
    ru: 'Размещение на нашем сайте и в социальных сетях',
    en: 'Placement on our website and social media',
    pl: 'Umieszczenie na naszej stronie i w mediach społecznościowych',
    uk: 'Розміщення на нашому сайті та в соціальних мережах',
  },
  'pricing.payment': {
    ru: 'Платеж единоразовый',
    en: 'One-time payment',
    pl: 'Płatność jednorazowa',
    uk: 'Платіж одноразовий',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  setLanguage: () => {},
  translations,
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    return translations[key][language] || translations[key]['ru'];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
