import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    name: 'ОЦ «Куб»',
    address: 'ул. Ербанова, 11',
    description: 'Офис-центр «Куб», центральный вход',
    phone: '+7 (999) 999-99-99',
    hours: 'Ежедневно 10:00–19:00',
    metro: 'Центр города',
    color: 'bg-teal-100 text-amber-500',
    mapLink: 'https://2gis.ru/ulanude/firm/70000001046458015',
  },
  {
    name: 'ТЦ «Заря»',
    address: 'ул. Жердева, 104',
    description: 'Торговый центр «Заря», 1 этаж',
    phone: '+7 (999) 999-99-99',
    hours: 'Ежедневно 10:00–19:00',
    metro: 'Район Заря',
    color: 'bg-amber-100 text-amber-600',
    mapLink: 'https://2gis.ru/ulanude/firm/70000001094540322',
  },
  {
    name: 'ТД «Юбилейный Сити»',
    address: 'пр. Победы, 50',
    description: 'Торговый дом «Юбилейный Сити», 1 этаж',
    phone: '+7 (999) 999-99-99',
    hours: 'Ежедневно 10:00–19:00',
    metro: 'Центральный район',
    color: 'bg-rose-100 text-rose-600',
    mapLink: 'https://2gis.ru/ulanude',
  },
];

export function Locations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="locations" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Где нас найти
          </span>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши точки в Улан-Удэ
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-gray-600">
            Три удобные точки приёма в разных районах города. 
            Выбирайте ближайшую или закажите выезд курьера.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((location, index) => (
            <Card
              key={location.name}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 border-0 shadow-lg hover:shadow-xl transition-shadow`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${location.color} flex items-center justify-center flex-shrink-0`}>
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {location.name}
                    </h3>
                    <p className="text-amber-500 font-medium">{location.address}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 text-sm">{location.description}</p>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                  
                  <a 
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-amber-500 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{location.phone}</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <Navigation className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-sm">{location.metro}</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-200 hover:border-teal-600 hover:text-amber-500"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Построить маршрут
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder / Delivery Info */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-600 mt-12">
          <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Не хотите ехать? Мы приедем сами!
                </h3>
                <p className="text-teal-100 mb-6">
                  Закажите выезд курьера — заберём вещи из дома или офиса, 
                  почистим и привезём обратно. Бесплатно при заказе от 1500 ₽.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-sm">По всему Улан-Удэ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-sm">В удобное время</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="bg-white text-amber-500 hover:bg-gray-100 shadow-lg"
                  >
                    Заказать курьера
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
