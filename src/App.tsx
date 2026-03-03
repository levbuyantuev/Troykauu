import { useEffect, useState } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Pricing } from './sections/Pricing';
import { Advantages } from './sections/Advantages';
import { Process } from './sections/Process';
import { Locations } from './sections/Locations';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Pricing />
        <Process />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
