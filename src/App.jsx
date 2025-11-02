import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import Pricing from './components/Pricing';

export default function App() {
  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black font-inter text-white">
      {/* Sticky Nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur sm:px-6">
        <div onClick={() => handleNav('home')} className="cursor-pointer select-none text-sm font-semibold tracking-wide">
          neoncut.
        </div>
        <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
          <button onClick={() => handleNav('services')} className="transition hover:text-white">Services</button>
          <button onClick={() => handleNav('work')} className="transition hover:text-white">Work</button>
          <button onClick={() => handleNav('pricing')} className="transition hover:text-white">Pricing</button>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <button onClick={() => handleNav('pricing')} className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-white/90">
          Get started
        </button>
      </header>

      <main className="space-y-0">
        <Hero />
        <Services />
        <WorkShowcase />
        <Pricing />
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-white/10 bg-black/60 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div>
            <div className="text-lg font-semibold">neoncut</div>
            <p className="mt-1 text-sm text-white/60">Creative video partners for modern brands.</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a href="mailto:hello@neoncut.studio" className="text-sm text-white/80 hover:text-white">hello@neoncut.studio</a>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <a href="#" className="text-sm text-white/80 hover:text-white">Instagram</a>
            <a href="#" className="text-sm text-white/80 hover:text-white">YouTube</a>
            <a href="#" className="text-sm text-white/80 hover:text-white">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
