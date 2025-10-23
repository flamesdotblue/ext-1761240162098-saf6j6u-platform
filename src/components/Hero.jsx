import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-4 pt-10 md:pt-14">
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-lg md:h-[70vh]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col justify-center gap-6 py-2 md:py-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            Interactive • Tech • Modern
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Building playful, interactive experiences for the modern web
          </h1>
          <p className="max-w-prose text-neutral-300">
            I craft performant front-end interfaces and immersive 3D moments. Explore my selected work below and feel free to reach out for collaborations.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:shadow-cyan-500/20 active:scale-[0.99]"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 active:scale-[0.99]"
            >
              Contact Me
            </a>
          </div>
          <ul className="mt-2 grid max-w-md grid-cols-2 gap-3 text-sm text-neutral-400">
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">WebGL & 3D Interfaces</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">TypeScript & React</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">Design Systems</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">Performance & A11y</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
