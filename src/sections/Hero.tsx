import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Truck, Clock, Shield } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-teal-700 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Ручная эко-чистка в Улан-Удэ
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Химчистка{' '}
                <span className="text-teal-600">«Тройка»</span>
              </h1>
              <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-xl sm:text-2xl text-gray-600 leading-relaxed">
                Вернём вашим вещам первозданную чистоту за 3 дня. Выезд по городу, забор и доставка — бесплатно!
              </p>
            </div>

            {/* Features */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <span className="font-medium">3 дня</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-teal-600" />
                </div>
                <span className="font-medium">Выезд</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <span className="font-medium">Гарантия</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="bg-amber-500 hover:bg-teal-700 text-white shadow-xl hover:shadow-2xl transition-all text-base px-8"
              >
                Заказать курьера
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#pricing')}
                className="border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 text-base px-8"
              >
                Рассчитать стоимость
              </Button>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold text-teal-600">4.6</div>
                  <div className="text-sm text-gray-500">рейтинг на 2ГИС</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">280+</div>
                  <div className="text-sm text-gray-500">отзывов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">3</div>
                  <div className="text-sm text-gray-500">точки в городе</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 relative lg:h-[600px]">
            <div className="relative h-full flex items-center justify-center">
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg">
                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl" />
                
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <Sparkles className="w-20 h-20 mx-auto mb-6 opacity-90" />
                      <h3 className="text-2xl font-bold mb-2">Эко-чистка</h3>
                      <p className="text-teal-100">Безопасно для вас и природы</p>
                    </div>
                  </div>
                  
                  {/* Service Tags */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">👟</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Чистка обуви</div>
                        <div className="text-sm text-gray-500">Кроссовки, кеды, кожа</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🧥</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Химчистка одежды</div>
                        <div className="text-sm text-gray-500">Пуховики, пальто, костюмы</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🎒</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Аксессуары</div>
                        <div className="text-sm text-gray-500">Сумки, рюкзаки, шапки</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Готово!</div>
                      <div className="text-xs text-gray-500">За 3 дня</div>
                    </div>
                  </div>
                </div>
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
