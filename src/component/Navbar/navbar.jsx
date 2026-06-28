
export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="text-lg font-bold text-slate-900">keen<span className="text-emerald-900">keeper</span></div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
          <a href="#" className="hover:text-slate-900">Home</a>
          <a href="#" className="hover:text-slate-900">Timeline</a>
          <a href="#" className="hover:text-slate-900">Stats</a>
        </div>
      </nav>
    </header>
  );
}
