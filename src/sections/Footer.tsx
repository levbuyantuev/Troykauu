import { MapPin, Phone, Mail, Instagram, MessageCircle, Send } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Химчистка одежды', href: '#services' },
    { label: 'Чистка обуви', href: '#services' },
    { label: 'Аксессуары', href: '#services' },
    { label: 'Мягкая мебель', href: '#services' },
    { label: 'Автомобили', href: '#services' },
  ],
  company: [
    { label: 'О нас', href: '#advantages' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Адреса', href: '#locations' },
    { label: 'Контакты', href: '#contact' },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Т</span>
              </div>
              <div>
                <span className="font-bold text-xl">Тройка</span>
                <span className="block text-xs text-gray-400">Химчистка Улан-Удэ</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ручная эко-чистка одежды и обуви. 
              Быстро, качественно, с заботой о ваших вещах.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/troyka_himchistka03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/79999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/troyka_himchistka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+79999999999"
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    +7 (999) 999-99-99
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Ежедневно 10:00–19:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Улан-Удэ, 3 точки:</p>
                  <p>• ОЦ «Куб», ул. Ербанова, 11</p>
                  <p>• ТЦ «Заря», ул. Жердева, 104</p>
                  <p>• ТД «Юбилейный Сити»</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@troyka-himchistka.ru"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  info@troyka-himchistka.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 «Тройка» — Химчистка в Улан-Удэ. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-500 hover:text-gray-400 transition-colors">
                Политика конфиденциальности
              </button>
              <button className="text-gray-500 hover:text-gray-400 transition-colors">
                Договор-оферта
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
