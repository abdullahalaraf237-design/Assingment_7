export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="h-8 w-3/5 rounded-full bg-slate-200 animate-pulse" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-72 rounded-3xl bg-slate-200 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
