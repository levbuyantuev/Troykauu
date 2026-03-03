import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MessageCircle, Send, Instagram, Check } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    address: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      service: '',
      address: '',
      comment: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Связаться с нами
          </span>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Заказать химчистку
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-gray-600">
            Оставьте заявку — мы перезвоним в течение 15 минут 
            и ответим на все вопросы.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 border-0 shadow-xl">
            <CardContent className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Иван"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Что нужно почистить?</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="clothing">Химчистка одежды</option>
                    <option value="shoes">Чистка обуви</option>
                    <option value="accessories">Аксессуары</option>
                    <option value="furniture">Мягкая мебель</option>
                    <option value="car">Автомобиль</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Адрес (для курьера)</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="ул. Ленина, 1, кв. 10"
                    value={formData.address}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    placeholder="Опишите, что нужно почистить, количество вещей..."
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-white text-base"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone Card */}
            <Card className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-amber-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Позвонить</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Работаем ежедневно с 10:00 до 19:00
                    </p>
                    <a
                      href="tel:+79999999999"
                      className="text-lg font-semibold text-amber-500 hover:text-teal-700 transition-colors"
                    >
                      +7 (999) 999-99-99
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messengers Card */}
            <Card className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Написать</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Ответим быстрее в мессенджерах
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://wa.me/79999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors text-sm font-medium"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href="https://t.me/troyka_himchistka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm font-medium"
                      >
                        <Send className="w-4 h-4" />
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-600 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Следите за нами — публикуем «до/после» и акции
                    </p>
                    <a
                      href="https://instagram.com/troyka_himchistka03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
                    >
                      @troyka_himchistka03
                      <Check className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Benefits */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-700 bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Почему заказывают у нас</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-gray-700 text-sm">Бесплатный выезд от 1500 ₽</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-gray-700 text-sm">Готовность за 3 дня</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-gray-700 text-sm">Гарантия качества</span>
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
