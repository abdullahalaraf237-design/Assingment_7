'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/timeline', label: 'Timeline', icon: '📜' },
  { href: '/stats', label: 'Stats', icon: '📊' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3 text-lg font-bold text-slate-900">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-900 text-lg text-white">K</span>
          <span>KeenKeeper</span>
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition ${isActive ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
