export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-400">KeenKeeper</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Keep the people you care about close.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              A calm home for your most meaningful connections — with reminders, check-ins, and history all in one place.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Explore</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li><a href="/" className="transition hover:text-white">Home</a></li>
              <li><a href="/timeline" className="transition hover:text-white">Timeline</a></li>
              <li><a href="/stats" className="transition hover:text-white">Stats</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Legal</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li><a href="#" className="transition hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="transition hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="transition hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and friendly connections.</p>
        </div>
      </div>
    </footer>
  );
}
