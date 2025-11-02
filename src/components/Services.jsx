import React from 'react';
import { Video, Film, Package } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Short-form Ads',
    desc: 'Hook-first edits for TikTok, Reels, and Shorts that convert attention into action.',
    points: ['Trend-aligned pacing', 'Caption + emoji overlays', 'A/B hook variants'],
    color: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    icon: Film,
    title: 'Long-form Content',
    desc: 'Documentary, podcasts, and YouTube-ready storytelling built for retention.',
    points: ['Narrative structuring', 'Chaptered timelines', 'Thumbnail strategy'],
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Package,
    title: 'All-in-One Social Package',
    desc: 'Monthly content engine: planning, editing, versioning, and publishing across platforms.',
    points: ['Content calendar', 'Multi-ratio exports', 'Cross-platform posting'],
    color: 'from-amber-500/20 to-pink-500/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">What we do</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Creative built for the feed and beyond</h2>
          </div>
          <p className="max-w-xl text-white/70">
            From thumb-stopping hooks to binge-worthy stories, we design edits that feel native to each platform while staying relentlessly on-brand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-1`}
            >
              <div className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${s.color} blur-3xl`} />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
