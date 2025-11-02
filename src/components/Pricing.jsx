import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter Ads',
    price: '$1,200',
    period: '/mo',
    blurb: 'Best for creators and startups testing paid and organic social.',
    features: [
      '8 short-form edits / month',
      'Hooks + caption design',
      '1x platform ratio (9:16)',
      '2-day turnaround',
    ],
    highlight: false,
  },
  {
    name: 'Content Engine',
    price: '$3,200',
    period: '/mo',
    blurb: 'Our most popular plan for growing brands with consistent output.',
    features: [
      '16 short-form + 2 long-form',
      'Multi-ratio exports (9:16, 1:1, 16:9)',
      'Content calendar + posting',
      'Priority revisions',
    ],
    highlight: true,
  },
  {
    name: 'Full Social Suite',
    price: '$6,500',
    period: '/mo',
    blurb: 'All-in-one production and distribution for teams ready to scale.',
    features: [
      'Unlimited clip requests',
      'YouTube edits + thumbnails',
      'Paid ads variants + UGC',
      'Analytics + strategy calls',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-white/60">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Simple plans, serious output</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Choose the level that matches your content goals. Upgrade, pause, or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border bg-white/5 p-6 ${t.highlight ? 'border-fuchsia-400/50 shadow-[0_0_50px_-12px_rgba(217,70,239,0.35)]' : 'border-white/10'}`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-300 backdrop-blur">
                  Most popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-white/70">{t.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{t.price}</span>
                <span className="text-white/60">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                    <Check className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-medium transition ${t.highlight ? 'bg-white text-black hover:bg-white/90' : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'}`}>
                Book a strategy call
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
