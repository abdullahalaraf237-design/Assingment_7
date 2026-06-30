export default function FriendLoading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
        </div>
        <p className="mt-6 text-lg font-semibold text-slate-900">Loading friend details...</p>
        <p className="mt-2 text-sm text-slate-500">Please wait while we load your selected friend profile.</p>
      </div>
    </div>
  );
}
