import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient lighting overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-fuchsia-400" />
          <span className="text-xs uppercase tracking-widest text-white/80">Creative Video Editing Studio</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Short-form Ads. Long-form Stories. One Social Video Partner.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          We craft scroll-stopping edits, engaging narratives, and an all-in-one content pipeline that fuels your brand across every social platform.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={() => handleScroll('services')} className="group rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
            Explore Services
          </button>
          <button onClick={() => handleScroll('work')} className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
