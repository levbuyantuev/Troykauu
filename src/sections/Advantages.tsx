import { useEffect, useRef } from 'react';
import { Clock, MapPin, Shield, Leaf, Star, Truck } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'Быстро',
    description: 'Стандартный срок чистки — всего 3 дня. Срочный заказ — за 24 часа.',
    stat: '3 дня',
    statLabel: 'средний срок',
  },
  {
    icon: Leaf,
    title: 'Эко-чистка',
    description: 'Используем только безопасные, биоразлагаемые средства. Бережно для ткани и кожи.',
    stat: '100%',
    statLabel: 'эко-средства',
  },
  {
    icon: Truck,
    title: 'Удобно',
    description: 'Выезд по Улан-Удэ, забор и доставка вещей. Бесплатно от 1500 ₽.',
    stat: '3',
    statLabel: 'точки в городе',
  },
  {
    icon: Shield,
    title: 'Надёжно',
    description: 'Гарантия качества. Повторная обработка бесплатно, если результат не устроил.',
    stat: '4.6',
    statLabel: 'рейтинг 2ГИС',
  },
  {
    icon: Star,
    title: 'Опытно',
    description: 'Более 280 положительных отзывов. Доверьте свои вещи профессионалам.',
    stat: '280+',
    statLabel: 'отзывов',
  },
  {
    icon: MapPin,
    title: 'Доступно',
    description: 'Три удобные точки в центре Улан-Удэ. Работаем ежедневно с 10:00 до 19:00.',
    stat: '10–19',
    statLabel: 'ежедневно',
  },
];

export function Advantages() {
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
    <section id="advantages" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-white text-teal-700 text-sm font-medium mb-4 shadow-sm">
            Почему выбирают нас
          </span>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Преимущества «Тройки»
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-gray-600">
            Мы ценим ваше время и доверие. Поэтому делаем всё, 
            чтобы химчистка была максимально удобной и эффективной.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 group`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <advantage.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {advantage.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-amber-500">
                        {advantage.stat}
                      </span>
                      <span className="text-sm text-gray-500">
                        {advantage.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-700 mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-amber-500">4.6/5</div>
                <div className="text-gray-600">Средняя оценка</div>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2 sm:border-x sm:border-gray-200">
                <div className="text-4xl font-bold text-amber-500">280+</div>
                <div className="text-gray-600">Отзывов на 2ГИС</div>
                <div className="text-sm text-gray-500">и Яндекс.Картах</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-amber-500">3</div>
                <div className="text-gray-600">Точки в Улан-Удэ</div>
                <div className="text-sm text-gray-500">Удобное расположение</div>
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
