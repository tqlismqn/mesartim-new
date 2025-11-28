// Supported languages
export const languages = {
  cs: 'Čeština',
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
  de: 'Deutsch',
  pl: 'Polski',
} as const;

export const defaultLang = 'cs' as const;

export type Lang = keyof typeof languages;

// UI translations
export const ui = {
  cs: {
    // Navigation
    'nav.home': 'Domů',
    'nav.services': 'Služby',
    'nav.accountingServer': 'Účetní Server',
    'nav.accountingBox': 'Účetní Box',
    'nav.itSupport': 'IT Pomocník',
    'nav.projects': 'Projekty na míru',
    'nav.about': 'O nás',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'IT řešení pro váš byznys',
    'hero.subtitle': 'Spolehlivé servery, bezpečné zálohy a profesionální podpora. Vše co potřebujete pro bezstarostné podnikání.',
    'hero.cta': 'Začít spolupráci',
    'hero.learnMore': 'Zjistit více',

    // Services
    'services.title': 'Naše služby',
    'services.subtitle': 'Komplexní IT řešení pro malé a střední firmy',

    // Accounting Server
    'accountingServer.title': 'Účetní Server',
    'accountingServer.subtitle': 'Váš vlastní cloudový účetní server',
    'accountingServer.description': 'Provozujte Pohodu, Money S3 a další účetní systémy online. Žádné starosti s hardwarem.',
    'accountingServer.feature1': 'Vysoký výkon',
    'accountingServer.feature1.desc': 'SSD disky a výkonné procesory pro rychlý chod.',
    'accountingServer.feature2': 'Vzdálená plocha',
    'accountingServer.feature2.desc': 'Pracujte z domova nebo na cestách stejně jako v kanceláři.',
    'accountingServer.feature3': 'Správa aktualizací',
    'accountingServer.feature3.desc': 'Staráme se o aktualizace systému.',

    // Accounting Box
    'accountingBox.title': 'Účetní Box',
    'accountingBox.subtitle': 'Bezpečné cloudové úložiště',
    'accountingBox.description': 'Ukládejte, sdílejte a zálohujte dokumenty bezpečně v cloudu. Přístup odkudkoliv, kdykoliv.',
    'accountingBox.feature1': 'Maximální bezpečnost',
    'accountingBox.feature1.desc': 'Šifrovaný přenos a ukládání dat.',
    'accountingBox.feature2': 'Automatické zálohy',
    'accountingBox.feature2.desc': 'Pravidelné zálohy, nikdy nic neztratíte.',
    'accountingBox.feature3': 'Přístup 24/7',
    'accountingBox.feature3.desc': 'Vaše data jsou dostupná kdykoliv je potřebujete.',

    // IT Support
    'itSupport.title': 'IT Pomocník',
    'itSupport.subtitle': 'Vaše externí IT oddělení',
    'itSupport.description': 'Nechte IT starosti na nás. Nabízíme komplexní správu počítačů, sítí a serverů.',
    'itSupport.feature1': 'Helpdesk',
    'itSupport.feature1.desc': 'Rychlá pomoc po telefonu nebo vzdálenou správou.',
    'itSupport.feature2': 'Monitoring',
    'itSupport.feature2.desc': 'Neustálý dohled nad vaší infrastrukturou.',
    'itSupport.feature3': 'Konzultace',
    'itSupport.feature3.desc': 'Poradíme s výběrem hardwaru a softwaru.',

    // Projects
    'projects.title': 'Projekty na míru',
    'projects.subtitle': 'Weby, e-shopy a sítě',
    'projects.description': 'Vytvoříme vám moderní web, e-shop nebo navrhneme a zrealizujeme firemní síť.',

    // Pricing
    'pricing.from': 'od',
    'pricing.month': 'měsíc',
    'pricing.popular': 'Nejoblíbenější',
    'pricing.cta': 'Objednat',

    // Contact
    'contact.title': 'Kontaktujte nás',
    'contact.subtitle': 'Jsme tu pro vás',
    'contact.description': 'Máte dotaz nebo potřebujete poradit? Neváhejte nás kontaktovat.',
    'contact.form.name': 'Jméno',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Zpráva',
    'contact.form.submit': 'Odeslat',
    'contact.form.success': 'Zpráva byla odeslána!',
    'contact.form.error': 'Něco se pokazilo. Zkuste to znovu.',

    // Footer
    'footer.rights': 'Všechna práva vyhrazena.',
    'footer.privacy': 'Ochrana osobních údajů',

    // CTA
    'cta.title': 'Připraveni posunout vaše IT na další úroveň?',
    'cta.button': 'Kontaktujte nás',

    // Benefits
    'benefits.title': 'Proč si vybrat nás?',
    'benefits.experience': 'Zkušenosti',
    'benefits.experience.desc': 'Více než 10 let v oboru IT.',
    'benefits.support': 'Podpora',
    'benefits.support.desc': 'Rychlá reakce na vaše požadavky.',
    'benefits.security': 'Bezpečnost',
    'benefits.security.desc': 'Vaše data jsou v bezpečí.',
    'benefits.price': 'Férové ceny',
    'benefits.price.desc': 'Transparentní ceník bez skrytých poplatků.',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.accountingServer': 'Accounting Server',
    'nav.accountingBox': 'Accounting Box',
    'nav.itSupport': 'IT Support',
    'nav.projects': 'Custom Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'IT Solutions for Your Business',
    'hero.subtitle': 'Reliable servers, secure backups, and professional support. Everything you need for worry-free business operations.',
    'hero.cta': 'Get Started',
    'hero.learnMore': 'Learn More',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive IT solutions for small and medium businesses',

    // Accounting Server
    'accountingServer.title': 'Accounting Server',
    'accountingServer.subtitle': 'Your Own Cloud Accounting Server',
    'accountingServer.description': 'Run Pohoda, Money S3, and other accounting systems online. No hardware worries.',
    'accountingServer.feature1': 'High Performance',
    'accountingServer.feature1.desc': 'SSD drives and powerful processors for fast operation.',
    'accountingServer.feature2': 'Remote Desktop',
    'accountingServer.feature2.desc': 'Work from home or on the go just like in the office.',
    'accountingServer.feature3': 'Update Management',
    'accountingServer.feature3.desc': 'We take care of system updates.',

    // Accounting Box
    'accountingBox.title': 'Accounting Box',
    'accountingBox.subtitle': 'Secure Cloud Storage',
    'accountingBox.description': 'Store, share, and backup your documents securely in the cloud. Access from anywhere, anytime.',
    'accountingBox.feature1': 'Maximum Security',
    'accountingBox.feature1.desc': 'Encrypted data transfer and storage.',
    'accountingBox.feature2': 'Automatic Backups',
    'accountingBox.feature2.desc': 'Regular backups so you never lose anything.',
    'accountingBox.feature3': '24/7 Access',
    'accountingBox.feature3.desc': 'Your data is available whenever you need it.',

    // IT Support
    'itSupport.title': 'IT Support',
    'itSupport.subtitle': 'Your External IT Department',
    'itSupport.description': 'Leave IT worries to us. We offer comprehensive management of computers, networks, and servers.',
    'itSupport.feature1': 'Helpdesk',
    'itSupport.feature1.desc': 'Quick help via phone or remote management.',
    'itSupport.feature2': 'Monitoring',
    'itSupport.feature2.desc': 'Constant monitoring of your infrastructure.',
    'itSupport.feature3': 'Consulting',
    'itSupport.feature3.desc': 'We advise on hardware and software selection.',

    // Projects
    'projects.title': 'Custom Projects',
    'projects.subtitle': 'Websites, E-shops, and Networks',
    'projects.description': 'We will create a modern website, e-shop, or design and implement a corporate network for you.',

    // Pricing
    'pricing.from': 'from',
    'pricing.month': 'month',
    'pricing.popular': 'Most Popular',
    'pricing.cta': 'Order Now',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We Are Here For You',
    'contact.description': 'Have a question or need advice? Do not hesitate to contact us.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Something went wrong. Please try again.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',

    // CTA
    'cta.title': 'Ready to take your IT to the next level?',
    'cta.button': 'Contact Us',

    // Benefits
    'benefits.title': 'Why Choose Us?',
    'benefits.experience': 'Experience',
    'benefits.experience.desc': 'More than 10 years in the IT industry.',
    'benefits.support': 'Support',
    'benefits.support.desc': 'Quick response to your requests.',
    'benefits.security': 'Security',
    'benefits.security.desc': 'Your data is safe with us.',
    'benefits.price': 'Fair Prices',
    'benefits.price.desc': 'Transparent pricing with no hidden fees.',
  },

  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.accountingServer': 'Сервер для бухгалтерии',
    'nav.accountingBox': 'Облачное хранилище',
    'nav.itSupport': 'IT Поддержка',
    'nav.projects': 'Проекты на заказ',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',

    // Hero
    'hero.title': 'IT решения для вашего бизнеса',
    'hero.subtitle': 'Надёжные серверы, безопасные резервные копии и профессиональная поддержка. Всё что нужно для беззаботного ведения бизнеса.',
    'hero.cta': 'Начать сотрудничество',
    'hero.learnMore': 'Узнать больше',

    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Комплексные IT решения для малого и среднего бизнеса',

    // Accounting Server
    'accountingServer.title': 'Сервер для бухгалтерии',
    'accountingServer.subtitle': 'Ваш собственный облачный сервер',
    'accountingServer.description': 'Работайте с Pohoda, Money S3 и другими системами онлайн. Никаких забот с оборудованием.',
    'accountingServer.feature1': 'Высокая производительность',
    'accountingServer.feature1.desc': 'SSD диски и мощные процессоры для быстрой работы.',
    'accountingServer.feature2': 'Удалённый рабочий стол',
    'accountingServer.feature2.desc': 'Работайте из дома или в дороге как в офисе.',
    'accountingServer.feature3': 'Управление обновлениями',
    'accountingServer.feature3.desc': 'Мы заботимся об обновлениях системы.',

    // Accounting Box
    'accountingBox.title': 'Облачное хранилище',
    'accountingBox.subtitle': 'Безопасное облачное хранилище',
    'accountingBox.description': 'Храните, делитесь и создавайте резервные копии документов безопасно в облаке.',
    'accountingBox.feature1': 'Максимальная безопасность',
    'accountingBox.feature1.desc': 'Зашифрованная передача и хранение данных.',
    'accountingBox.feature2': 'Автоматические резервные копии',
    'accountingBox.feature2.desc': 'Регулярные бэкапы, вы никогда ничего не потеряете.',
    'accountingBox.feature3': 'Доступ 24/7',
    'accountingBox.feature3.desc': 'Ваши данные доступны когда они вам нужны.',

    // IT Support
    'itSupport.title': 'IT Поддержка',
    'itSupport.subtitle': 'Ваш внешний IT отдел',
    'itSupport.description': 'Оставьте IT заботы нам. Комплексное управление компьютерами, сетями и серверами.',
    'itSupport.feature1': 'Техподдержка',
    'itSupport.feature1.desc': 'Быстрая помощь по телефону или удалённо.',
    'itSupport.feature2': 'Мониторинг',
    'itSupport.feature2.desc': 'Постоянный контроль вашей инфраструктуры.',
    'itSupport.feature3': 'Консультации',
    'itSupport.feature3.desc': 'Поможем с выбором оборудования и ПО.',

    // Projects
    'projects.title': 'Проекты на заказ',
    'projects.subtitle': 'Сайты, интернет-магазины и сети',
    'projects.description': 'Создадим современный сайт, интернет-магазин или спроектируем корпоративную сеть.',

    // Pricing
    'pricing.from': 'от',
    'pricing.month': 'месяц',
    'pricing.popular': 'Популярный',
    'pricing.cta': 'Заказать',

    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Мы здесь для вас',
    'contact.description': 'Есть вопрос или нужна консультация? Не стесняйтесь обращаться.',
    'contact.form.name': 'Имя',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.form.success': 'Сообщение отправлено!',
    'contact.form.error': 'Что-то пошло не так. Попробуйте ещё раз.',

    // Footer
    'footer.rights': 'Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',

    // CTA
    'cta.title': 'Готовы вывести ваши IT на новый уровень?',
    'cta.button': 'Связаться с нами',

    // Benefits
    'benefits.title': 'Почему выбирают нас?',
    'benefits.experience': 'Опыт',
    'benefits.experience.desc': 'Более 10 лет в IT индустрии.',
    'benefits.support': 'Поддержка',
    'benefits.support.desc': 'Быстрая реакция на ваши запросы.',
    'benefits.security': 'Безопасность',
    'benefits.security.desc': 'Ваши данные в надёжных руках.',
    'benefits.price': 'Честные цены',
    'benefits.price.desc': 'Прозрачное ценообразование без скрытых платежей.',
  },

  uk: {
    // Navigation
    'nav.home': 'Головна',
    'nav.services': 'Послуги',
    'nav.accountingServer': 'Сервер для бухгалтерії',
    'nav.accountingBox': 'Хмарне сховище',
    'nav.itSupport': 'IT Підтримка',
    'nav.projects': 'Проекти на замовлення',
    'nav.about': 'Про нас',
    'nav.contact': 'Контакти',

    // Hero
    'hero.title': 'IT рішення для вашого бізнесу',
    'hero.subtitle': 'Надійні сервери, безпечні резервні копії та професійна підтримка. Все що потрібно для безтурботного ведення бізнесу.',
    'hero.cta': 'Почати співпрацю',
    'hero.learnMore': 'Дізнатися більше',

    // Services
    'services.title': 'Наші послуги',
    'services.subtitle': 'Комплексні IT рішення для малого та середнього бізнесу',

    // Accounting Server
    'accountingServer.title': 'Сервер для бухгалтерії',
    'accountingServer.subtitle': 'Ваш власний хмарний сервер',
    'accountingServer.description': 'Працюйте з Pohoda, Money S3 та іншими системами онлайн. Жодних турбот з обладнанням.',
    'accountingServer.feature1': 'Висока продуктивність',
    'accountingServer.feature1.desc': 'SSD диски та потужні процесори для швидкої роботи.',
    'accountingServer.feature2': 'Віддалений робочий стіл',
    'accountingServer.feature2.desc': 'Працюйте з дому або в дорозі як в офісі.',
    'accountingServer.feature3': 'Керування оновленнями',
    'accountingServer.feature3.desc': 'Ми дбаємо про оновлення системи.',

    // Accounting Box
    'accountingBox.title': 'Хмарне сховище',
    'accountingBox.subtitle': 'Безпечне хмарне сховище',
    'accountingBox.description': 'Зберігайте, діліться та створюйте резервні копії документів безпечно в хмарі.',
    'accountingBox.feature1': 'Максимальна безпека',
    'accountingBox.feature1.desc': 'Зашифрована передача та зберігання даних.',
    'accountingBox.feature2': 'Автоматичні резервні копії',
    'accountingBox.feature2.desc': 'Регулярні бекапи, ви ніколи нічого не втратите.',
    'accountingBox.feature3': 'Доступ 24/7',
    'accountingBox.feature3.desc': 'Ваші дані доступні коли вони вам потрібні.',

    // IT Support
    'itSupport.title': 'IT Підтримка',
    'itSupport.subtitle': 'Ваш зовнішній IT відділ',
    'itSupport.description': 'Залиште IT турботи нам. Комплексне керування комп\'ютерами, мережами та серверами.',
    'itSupport.feature1': 'Техпідтримка',
    'itSupport.feature1.desc': 'Швидка допомога по телефону або віддалено.',
    'itSupport.feature2': 'Моніторинг',
    'itSupport.feature2.desc': 'Постійний контроль вашої інфраструктури.',
    'itSupport.feature3': 'Консультації',
    'itSupport.feature3.desc': 'Допоможемо з вибором обладнання та ПЗ.',

    // Projects
    'projects.title': 'Проекти на замовлення',
    'projects.subtitle': 'Сайти, інтернет-магазини та мережі',
    'projects.description': 'Створимо сучасний сайт, інтернет-магазин або спроектуємо корпоративну мережу.',

    // Pricing
    'pricing.from': 'від',
    'pricing.month': 'місяць',
    'pricing.popular': 'Популярний',
    'pricing.cta': 'Замовити',

    // Contact
    'contact.title': 'Зв\'яжіться з нами',
    'contact.subtitle': 'Ми тут для вас',
    'contact.description': 'Є питання або потрібна консультація? Не соромтеся звертатися.',
    'contact.form.name': 'Ім\'я',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Повідомлення',
    'contact.form.submit': 'Надіслати',
    'contact.form.success': 'Повідомлення надіслано!',
    'contact.form.error': 'Щось пішло не так. Спробуйте ще раз.',

    // Footer
    'footer.rights': 'Всі права захищені.',
    'footer.privacy': 'Політика конфіденційності',

    // CTA
    'cta.title': 'Готові вивести ваші IT на новий рівень?',
    'cta.button': 'Зв\'язатися з нами',

    // Benefits
    'benefits.title': 'Чому обирають нас?',
    'benefits.experience': 'Досвід',
    'benefits.experience.desc': 'Понад 10 років в IT індустрії.',
    'benefits.support': 'Підтримка',
    'benefits.support.desc': 'Швидка реакція на ваші запити.',
    'benefits.security': 'Безпека',
    'benefits.security.desc': 'Ваші дані в надійних руках.',
    'benefits.price': 'Чесні ціни',
    'benefits.price.desc': 'Прозоре ціноутворення без прихованих платежів.',
  },

  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.accountingServer': 'Buchhaltungsserver',
    'nav.accountingBox': 'Cloud-Speicher',
    'nav.itSupport': 'IT-Support',
    'nav.projects': 'Individuelle Projekte',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'IT-Lösungen für Ihr Unternehmen',
    'hero.subtitle': 'Zuverlässige Server, sichere Backups und professioneller Support. Alles was Sie für ein sorgenfreies Geschäft brauchen.',
    'hero.cta': 'Zusammenarbeit starten',
    'hero.learnMore': 'Mehr erfahren',

    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Umfassende IT-Lösungen für kleine und mittlere Unternehmen',

    // Accounting Server
    'accountingServer.title': 'Buchhaltungsserver',
    'accountingServer.subtitle': 'Ihr eigener Cloud-Buchhaltungsserver',
    'accountingServer.description': 'Betreiben Sie Pohoda, Money S3 und andere Buchhaltungssysteme online. Keine Hardware-Sorgen.',
    'accountingServer.feature1': 'Hohe Leistung',
    'accountingServer.feature1.desc': 'SSD-Laufwerke und leistungsstarke Prozessoren für schnellen Betrieb.',
    'accountingServer.feature2': 'Remote-Desktop',
    'accountingServer.feature2.desc': 'Arbeiten Sie von zu Hause oder unterwegs wie im Büro.',
    'accountingServer.feature3': 'Update-Management',
    'accountingServer.feature3.desc': 'Wir kümmern uns um System-Updates.',

    // Accounting Box
    'accountingBox.title': 'Cloud-Speicher',
    'accountingBox.subtitle': 'Sicherer Cloud-Speicher',
    'accountingBox.description': 'Speichern, teilen und sichern Sie Dokumente sicher in der Cloud.',
    'accountingBox.feature1': 'Maximale Sicherheit',
    'accountingBox.feature1.desc': 'Verschlüsselte Datenübertragung und -speicherung.',
    'accountingBox.feature2': 'Automatische Backups',
    'accountingBox.feature2.desc': 'Regelmäßige Backups, Sie verlieren nie etwas.',
    'accountingBox.feature3': '24/7 Zugang',
    'accountingBox.feature3.desc': 'Ihre Daten sind verfügbar, wann immer Sie sie brauchen.',

    // IT Support
    'itSupport.title': 'IT-Support',
    'itSupport.subtitle': 'Ihre externe IT-Abteilung',
    'itSupport.description': 'Überlassen Sie IT-Sorgen uns. Umfassende Verwaltung von Computern, Netzwerken und Servern.',
    'itSupport.feature1': 'Helpdesk',
    'itSupport.feature1.desc': 'Schnelle Hilfe per Telefon oder Fernwartung.',
    'itSupport.feature2': 'Monitoring',
    'itSupport.feature2.desc': 'Ständige Überwachung Ihrer Infrastruktur.',
    'itSupport.feature3': 'Beratung',
    'itSupport.feature3.desc': 'Wir beraten bei der Hardware- und Softwareauswahl.',

    // Projects
    'projects.title': 'Individuelle Projekte',
    'projects.subtitle': 'Websites, E-Shops und Netzwerke',
    'projects.description': 'Wir erstellen moderne Websites, E-Shops oder entwerfen Unternehmensnetzwerke.',

    // Pricing
    'pricing.from': 'ab',
    'pricing.month': 'Monat',
    'pricing.popular': 'Beliebteste',
    'pricing.cta': 'Bestellen',

    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Wir sind für Sie da',
    'contact.description': 'Haben Sie eine Frage oder brauchen Sie Beratung? Zögern Sie nicht, uns zu kontaktieren.',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Senden',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    'contact.form.error': 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',

    // CTA
    'cta.title': 'Bereit, Ihre IT auf die nächste Stufe zu heben?',
    'cta.button': 'Kontaktieren Sie uns',

    // Benefits
    'benefits.title': 'Warum uns wählen?',
    'benefits.experience': 'Erfahrung',
    'benefits.experience.desc': 'Mehr als 10 Jahre in der IT-Branche.',
    'benefits.support': 'Support',
    'benefits.support.desc': 'Schnelle Reaktion auf Ihre Anfragen.',
    'benefits.security': 'Sicherheit',
    'benefits.security.desc': 'Ihre Daten sind bei uns sicher.',
    'benefits.price': 'Faire Preise',
    'benefits.price.desc': 'Transparente Preise ohne versteckte Gebühren.',
  },

  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.services': 'Usługi',
    'nav.accountingServer': 'Serwer księgowy',
    'nav.accountingBox': 'Chmura danych',
    'nav.itSupport': 'Wsparcie IT',
    'nav.projects': 'Projekty na zamówienie',
    'nav.about': 'O nas',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Rozwiązania IT dla Twojego biznesu',
    'hero.subtitle': 'Niezawodne serwery, bezpieczne kopie zapasowe i profesjonalne wsparcie. Wszystko czego potrzebujesz do bezproblemowego prowadzenia firmy.',
    'hero.cta': 'Rozpocznij współpracę',
    'hero.learnMore': 'Dowiedz się więcej',

    // Services
    'services.title': 'Nasze usługi',
    'services.subtitle': 'Kompleksowe rozwiązania IT dla małych i średnich firm',

    // Accounting Server
    'accountingServer.title': 'Serwer księgowy',
    'accountingServer.subtitle': 'Twój własny serwer księgowy w chmurze',
    'accountingServer.description': 'Pracuj z Pohoda, Money S3 i innymi systemami online. Żadnych zmartwień o sprzęt.',
    'accountingServer.feature1': 'Wysoka wydajność',
    'accountingServer.feature1.desc': 'Dyski SSD i wydajne procesory dla szybkiej pracy.',
    'accountingServer.feature2': 'Zdalny pulpit',
    'accountingServer.feature2.desc': 'Pracuj z domu lub w podróży jak w biurze.',
    'accountingServer.feature3': 'Zarządzanie aktualizacjami',
    'accountingServer.feature3.desc': 'Dbamy o aktualizacje systemu.',

    // Accounting Box
    'accountingBox.title': 'Chmura danych',
    'accountingBox.subtitle': 'Bezpieczna chmura danych',
    'accountingBox.description': 'Przechowuj, udostępniaj i twórz kopie zapasowe dokumentów bezpiecznie w chmurze.',
    'accountingBox.feature1': 'Maksymalne bezpieczeństwo',
    'accountingBox.feature1.desc': 'Szyfrowany transfer i przechowywanie danych.',
    'accountingBox.feature2': 'Automatyczne kopie zapasowe',
    'accountingBox.feature2.desc': 'Regularne backupy, nigdy niczego nie stracisz.',
    'accountingBox.feature3': 'Dostęp 24/7',
    'accountingBox.feature3.desc': 'Twoje dane są dostępne kiedy ich potrzebujesz.',

    // IT Support
    'itSupport.title': 'Wsparcie IT',
    'itSupport.subtitle': 'Twój zewnętrzny dział IT',
    'itSupport.description': 'Zostaw troski o IT nam. Kompleksowe zarządzanie komputerami, sieciami i serwerami.',
    'itSupport.feature1': 'Helpdesk',
    'itSupport.feature1.desc': 'Szybka pomoc telefoniczna lub zdalna.',
    'itSupport.feature2': 'Monitoring',
    'itSupport.feature2.desc': 'Stały nadzór nad Twoją infrastrukturą.',
    'itSupport.feature3': 'Konsultacje',
    'itSupport.feature3.desc': 'Doradzimy w wyborze sprzętu i oprogramowania.',

    // Projects
    'projects.title': 'Projekty na zamówienie',
    'projects.subtitle': 'Strony, sklepy i sieci',
    'projects.description': 'Stworzymy nowoczesną stronę, sklep internetowy lub zaprojektujemy sieć firmową.',

    // Pricing
    'pricing.from': 'od',
    'pricing.month': 'miesiąc',
    'pricing.popular': 'Najpopularniejszy',
    'pricing.cta': 'Zamów',

    // Contact
    'contact.title': 'Skontaktuj się z nami',
    'contact.subtitle': 'Jesteśmy tu dla Ciebie',
    'contact.description': 'Masz pytanie lub potrzebujesz porady? Nie wahaj się z nami skontaktować.',
    'contact.form.name': 'Imię',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Wiadomość',
    'contact.form.submit': 'Wyślij',
    'contact.form.success': 'Wiadomość wysłana!',
    'contact.form.error': 'Coś poszło nie tak. Spróbuj ponownie.',

    // Footer
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.privacy': 'Polityka prywatności',

    // CTA
    'cta.title': 'Gotowy przenieść swoje IT na wyższy poziom?',
    'cta.button': 'Skontaktuj się',

    // Benefits
    'benefits.title': 'Dlaczego my?',
    'benefits.experience': 'Doświadczenie',
    'benefits.experience.desc': 'Ponad 10 lat w branży IT.',
    'benefits.support': 'Wsparcie',
    'benefits.support.desc': 'Szybka reakcja na Twoje zgłoszenia.',
    'benefits.security': 'Bezpieczeństwo',
    'benefits.security.desc': 'Twoje dane są u nas bezpieczne.',
    'benefits.price': 'Uczciwe ceny',
    'benefits.price.desc': 'Przejrzysty cennik bez ukrytych opłat.',
  },
} as const;
