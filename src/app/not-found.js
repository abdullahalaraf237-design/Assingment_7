export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Page not found</h1>
      <p className="mt-6 max-w-xl text-sm text-slate-600">The page you are looking for doesn&apos;t exist or has been moved. Use the navigation above to return home.</p>
    </main>
  );
}
