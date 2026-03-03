import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';

const clothingPrices = [
  { name: 'Пуховик короткий', price: 'от 800 ₽', popular: true },
  { name: 'Пуховик длинный', price: 'от 1000 ₽', popular: false },
  { name: 'Куртка', price: 'от 700 ₽', popular: false },
  { name: 'Пальто', price: 'от 900 ₽', popular: false },
  { name: 'Плащ', price: 'от 700 ₽', popular: false },
  { name: 'Костюм (2 предмета)', price: 'от 1200 ₽', popular: true },
  { name: 'Пиджак', price: 'от 700 ₽', popular: false },
  { name: 'Брюки', price: 'от 500 ₽', popular: false },
  { name: 'Платье', price: 'от 600 ₽', popular: false },
  { name: 'Рубашка / блуза', price: 'от 350 ₽', popular: false },
  { name: 'Свитер / джемпер', price: 'от 450 ₽', popular: false },
  { name: 'Джинсы', price: 'от 450 ₽', popular: false },
];

const shoesPrices = [
  { name: 'Кроссовки / кеды', price: 'от 600 ₽', popular: true },
  { name: 'Кожаные ботинки', price: 'от 800 ₽', popular: false },
  { name: 'Сапоги', price: 'от 900 ₽', popular: false },
  { name: 'Туфли', price: 'от 700 ₽', popular: false },
  { name: 'Угги / уггибутсы', price: 'от 800 ₽', popular: false },
  { name: 'Лоферы / мокасины', price: 'от 700 ₽', popular: false },
  { name: 'Восстановление цвета', price: 'от 400 ₽', popular: true },
  { name: 'Водоотталкивающая пропитка', price: 'от 300 ₽', popular: false },
  { name: 'Удаление пятен (сложные)', price: 'от 200 ₽', popular: false },
];

const accessoriesPrices = [
  { name: 'Сумка малая', price: 'от 500 ₽', popular: false },
  { name: 'Сумка средняя', price: 'от 700 ₽', popular: false },
  { name: 'Сумка большая', price: 'от 900 ₽', popular: true },
  { name: 'Рюкзак', price: 'от 700 ₽', popular: false },
  { name: 'Шапка / берет', price: 'от 300 ₽', popular: false },
  { name: 'Шарф', price: 'от 350 ₽', popular: false },
  { name: 'Перчатки / варежки', price: 'от 250 ₽', popular: false },
];

const homePrices = [
  { name: 'Диван (2-местный)', price: 'от 2000 ₽', popular: true },
  { name: 'Диван (3-местный)', price: 'от 2500 ₽', popular: false },
  { name: 'Кресло', price: 'от 1200 ₽', popular: false },
  { name: 'Матрас (1-спальный)', price: 'от 1500 ₽', popular: false },
  { name: 'Матрас (2-спальный)', price: 'от 2000 ₽', popular: true },
  { name: 'Ковёр (м²)', price: 'от 300 ₽', popular: false },
  { name: 'Шторы (пог. метр)', price: 'от 200 ₽', popular: false },
];

interface PriceItem {
  name: string;
  price: string;
  popular: boolean;
}

function PriceCard({ items, title }: { items: PriceItem[]; title: string }) {
  return (
    <Card className="border-0 shadow-lg bg-white">
      <CardContent className="p-0">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-gray-700">{item.name}</span>
                {item.popular && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">
                    Популярное
                  </span>
                )}
              </div>
              <span className="font-semibold text-amber-500">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('clothing');

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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Цены
          </span>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Стоимость услуг
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-gray-600">
            Прозрачное ценообразование. Финальная стоимость зависит от степени загрязнения и материала.
          </p>
        </div>

        {/* Pricing Tabs */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto mb-8 grid grid-cols-2 lg:grid-cols-4 gap-2">
              <TabsTrigger value="clothing" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                Одежда
              </TabsTrigger>
              <TabsTrigger value="shoes" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                Обувь
              </TabsTrigger>
              <TabsTrigger value="accessories" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                Аксессуары
              </TabsTrigger>
              <TabsTrigger value="home" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                Мебель
              </TabsTrigger>
            </TabsList>

            <TabsContent value="clothing" className="mt-0">
              <PriceCard items={clothingPrices} title="Химчистка одежды" />
            </TabsContent>
            <TabsContent value="shoes" className="mt-0">
              <PriceCard items={shoesPrices} title="Чистка обуви" />
            </TabsContent>
            <TabsContent value="accessories" className="mt-0">
              <PriceCard items={accessoriesPrices} title="Аксессуары" />
            </TabsContent>
            <TabsContent value="home" className="mt-0">
              <PriceCard items={homePrices} title="Мягкая мебель и ковры" />
            </TabsContent>
          </Tabs>
        </div>

        {/* Additional Info */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-12 grid md:grid-cols-2 gap-6">
          {/* Delivery Info */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Выезд и доставка</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>Бесплатный выезд от 1500 ₽</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>Забор и доставка в тот же день</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>По всему Улан-Удэ</span>
              </li>
            </ul>
          </div>

          {/* Discounts Info */}
          <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-6 text-gray-900">
            <h3 className="text-xl font-bold mb-4">Скидки и акции</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>Скидка 10% на первый заказ</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>Скидка 15% при заказе от 5 вещей</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>Постоянным клиентам — бонусы</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-600 mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Не нашли нужную услугу? Свяжитесь с нами — рассчитаем стоимость индивидуально.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all"
          >
            Получить консультацию
          </Button>
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

