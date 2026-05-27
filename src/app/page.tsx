'use client';

import Sidebar from '@/components/Sidebar';
import ParticlesBackground from '@/components/ParticlesBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import { ArrowUp, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-panel border border-card-border flex items-center justify-center text-text-primary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-card-border bg-bg-secondary transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <span>© {new Date().getFullYear()} Mano Arvind.</span>
        </div>
        <div className="flex items-center gap-6 text-text-muted">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent-blue transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent-blue transition-colors">LinkedIn</a>
          <a href="#contact" className="text-sm hover:text-accent-purple transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <Sidebar />
      <div className="relative z-10 w-full lg:pl-[290px]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  );
}
