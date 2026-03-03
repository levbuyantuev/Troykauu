import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Footprints, Backpack, Sofa, Car, Home } from 'lucide-react';

const services = [
  {
    icon: Shirt,
    title: 'Химчистка одежды',
    description: 'Пуховики, куртки, пальто, костюмы, платья, рубашки. Деликатная чистка любых тканей.',
    items: ['Пуховики', 'Куртки', 'Пальто', 'Костюмы', 'Платья'],
    color: 'bg-amber-100 text-amber-600',
    duration: '3 дня',
  },
  {
    icon: Footprints,
    title: 'Чистка обуви',
    description: 'Кроссовки, кеды, кожаная обувь, замша, нубук. Глубокая чистка и восстановление цвета.',
    items: ['Кроссовки', 'Кеды', 'Кожа', 'Замша', 'Нубук'],
    color: 'bg-teal-100 text-teal-600',
    duration: '3 дня',
  },
  {
    icon: Backpack,
    title: 'Аксессуары',
    description: 'Сумки, рюкзаки, головные уборы и другие аксессуары. Бережная чистка.',
    items: ['Сумки', 'Рюкзаки', 'Шапки', 'Шарфы', 'Перчатки'],
    color: 'bg-rose-100 text-rose-600',
    duration: '3 дня',
  },
  {
    icon: Sofa,
    title: 'Мягкая мебель',
    description: 'Чистка диванов, кресел, матрасов, штор. Выезд на дом с оборудованием.',
    items: ['Диваны', 'Кресла', 'Матрасы', 'Шторы', 'Ковры'],
    color: 'bg-violet-100 text-violet-600',
    duration: '1–2 дня',
  },
  {
    icon: Car,
    title: 'Автомобили',
    description: 'Химчистка салона автомобиля. Сиденья, коврики, потолок, багажник.',
    items: ['Сиденья', 'Коврики', 'Потолок', 'Багажник', 'Панели'],
    color: 'bg-blue-100 text-blue-600',
    duration: '3–5 часов',
  },
  {
    icon: Home,
    title: 'Выездная чистка',
    description: 'Заберём, почистим, привезём. Выезд по всему Улан-Удэ. Бесплатно от 1500 ₽.',
    items: ['Забор', 'Доставка', 'Срочно', 'Корпоративы', 'Подписка'],
    color: 'bg-green-100 text-green-600',
    duration: 'По запросу',
  },
];

export function Services() {
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
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Что мы чистим
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-gray-600">
            Ручная эко-чистка с использованием безопасных средств. 
            Гарантируем бережное отношение к вашим вещам.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 group hover:shadow-xl hover:-translate-y-1 border-0 shadow-lg bg-gray-50/50`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200 text-gray-600">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 rounded-full bg-white text-gray-600 border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eco Badge */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-700 mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-xl">
            <span className="text-2xl">🌿</span>
            <div className="text-left">
              <div className="font-bold">Эко-чистка</div>
              <div className="text-sm text-teal-100">Используем только безопасные средства</div>
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
