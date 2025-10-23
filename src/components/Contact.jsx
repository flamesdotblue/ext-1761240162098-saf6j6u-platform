import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s build something</h2>
          <p className="mt-3 max-w-prose text-neutral-400">
            I’m available for freelance work, collaborations, and interesting product challenges. Whether you have a project in mind or just want to say hi, my inbox is open.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10"
            >
              <Mail size={18} className="text-cyan-300" /> you@example.com
            </a>
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10"
            >
              <Github size={18} className="text-cyan-300" /> github.com/yourhandle
            </a>
            <a
              href="https://www.linkedin.com/in/yourhandle/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10"
            >
              <Linkedin size={18} className="text-cyan-300" /> linkedin.com/in/yourhandle
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <form
            className="grid grid-cols-1 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get('name');
              const email = data.get('email');
              const message = data.get('message');
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:you@example.com?subject=Portfolio Inquiry&body=${body}`;
            }}
          >
            <div>
              <label className="mb-1 block text-sm text-neutral-300" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-cyan-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-cyan-500"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-cyan-500"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-cyan-500/20 active:scale-[0.99]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
