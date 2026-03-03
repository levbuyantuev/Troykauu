import { useEffect, useRef } from 'react';
import { Truck, Search, Sparkles, Package, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Truck,
    title: 'Забор',
    description: 'Курьер забирает вещи в удобное время или вы приносите в одну из наших точек.',
    color: 'bg-teal-100 text-amber-500',
  },
  {
    number: '02',
    icon: Search,
    title: 'Диагностика',
    description: 'Осматриваем вещи, определяем степень загрязнения и стоимость чистки.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Чистка',
    description: 'Проводим ручную эко-чистку с использованием безопасных средств.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    number: '04',
    icon: Package,
    title: 'Доставка',
    description: 'Привозим чистые вещи обратно или вы забираете их в удобной точке.',
    color: 'bg-violet-100 text-violet-600',
  },
];

export function Process() {
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-teal-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            Как мы работаем
          </span>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Простой процесс заказа
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-gray-600">
            Всего 4 шага — и ваши вещи снова как новые. 
            Мы позаботимся обо всём, вам остаётся только ждать результат.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 relative`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Connector Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%]">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-gray-200">
                    {step.number}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Info */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-700 mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-amber-500">3</span>
                </div>
                <h4 className="font-bold text-gray-900">Стандартный срок</h4>
                <p className="text-gray-600 text-sm">
                  Большинство вещей готовы через 3 дня после приёма
                </p>
              </div>
              <div className="space-y-3 sm:border-x sm:border-gray-200">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-amber-600">24</span>
                </div>
                <h4 className="font-bold text-gray-900">Срочный заказ</h4>
                <p className="text-gray-600 text-sm">
                  Нужно быстрее? Выполним чистку за 24 часа с доплатой 50%
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-green-600">✓</span>
                </div>
                <h4 className="font-bold text-gray-900">Гарантия качества</h4>
                <p className="text-gray-600 text-sm">
                  Если результат не устроит — переделаем бесплатно
                </p>
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
