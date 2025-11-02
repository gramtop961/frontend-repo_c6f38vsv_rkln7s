import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Athletic Wear Launch', tag: 'Short-form Ad', gradient: 'from-fuchsia-400/30 to-purple-500/30' },
  { title: 'Founder Story', tag: 'Long-form Edit', gradient: 'from-cyan-400/30 to-blue-500/30' },
  { title: 'Podcast Highlights', tag: 'Repurposed Clips', gradient: 'from-amber-400/30 to-pink-500/30' },
  { title: 'App Demo', tag: 'Product Video', gradient: 'from-emerald-400/30 to-teal-500/30' },
  { title: 'Event Recap', tag: 'Social Montage', gradient: 'from-indigo-400/30 to-sky-500/30' },
  { title: 'UGC Ads', tag: 'Performance Creative', gradient: 'from-rose-400/30 to-orange-500/30' },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative bg-gradient-to-b from-black via-black to-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">A taste of our edits</h2>
          </div>
          <p className="max-w-xl text-white/70">
            We tailor format, pacing, and storytelling to your audience and platform. Here are a few recent favorites.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`relative aspect-video w-full overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="pointer-events-none absolute inset-0 bg-black/30" />
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-sm text-white/60">{card.tag}</p>
                </div>
                <span className="text-xs uppercase tracking-widest text-white/50">View</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
