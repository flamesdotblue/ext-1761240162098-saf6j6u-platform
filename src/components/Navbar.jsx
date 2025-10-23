import { useState } from 'react';
import { Rocket } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="flex items-center gap-2" onClick={(e) => handleNav(e, '#home')}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight">Your Name</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-300 hover:text-white transition-colors"
              onClick={(e) => handleNav(e, l.href)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-cyan-500/20 active:scale-[0.99]"
          >
            Get in touch
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 px-3 py-2 text-sm text-neutral-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-neutral-200 hover:bg-white/5"
                onClick={(e) => handleNav(e, l.href)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-white"
              onClick={(e) => handleNav(e, '#contact')}
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
