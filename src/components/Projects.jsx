import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime 3D Product Configurator',
    desc: 'A WebGL-powered configurator that lets users customize and preview products in realtime, with lighting and material controls.',
    tags: ['React', 'Three.js', 'Spline'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Engine v2',
    desc: 'A modular portfolio system using modern React patterns, content collections, and animated transitions.',
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Design System Playground',
    desc: 'A set of reusable components built with accessibility and performance in mind, themed for dark mode.',
    tags: ['Radix', 'shadcn/ui', 'TypeScript'],
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Projects</h2>
          <p className="mt-2 max-w-prose text-neutral-400">A few highlights from recent work. Each project emphasizes interactivity, visuals, and performance.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg transition-transform">
            <div className="mb-4 h-36 w-full rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent ring-1 ring-inset ring-white/10" />
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-neutral-400">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-neutral-300">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href={p.live} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/10">
                <ExternalLink size={16} /> Live
              </a>
              <a href={p.repo} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/10">
                <Github size={16} /> Code
              </a>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}
