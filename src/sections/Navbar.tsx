import { useState } from 'react';
import { Menu, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#pricing', label: 'Цены' },
  { href: '#advantages', label: 'Почему мы' },
  { href: '#locations', label: 'Адреса' },
  { href: '#contact', label: 'Контакты' },
];

export function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">Т</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold text-lg transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                Тройка
              </span>
              <span className={`text-xs block -mt-1 transition-colors ${scrolled ? 'text-gray-500' : 'text-gray-600'}`}>
                Химчистка
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-amber-50 hover:text-amber-600 ${
                  scrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+79999999999"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+7 (999) 999-99-99</span>
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Заказать курьера
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Т</span>
                    </div>
                    <span className="font-bold text-lg">Тройка</span>
                  </div>
                </div>

                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>

                <div className="border-t pt-6 space-y-4">
                  <a
                    href="tel:+79999999999"
                    className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+7 (999) 999-99-99</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Улан-Удэ, 3 точки</span>
                  </div>
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Заказать курьера
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
