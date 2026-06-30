import Link from 'next/link';
import friends from '../../../data/friends.json';
import Profile from '../../../component/Profile/profile';

export default async function FriendDetailsPage({ params }) {
  const id = (await params).id;
  const friend = friends.find((item) => String(item.id) === id);

  if (!friend) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Friend not found</p>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900">We couldn’t find that friend.</h1>
          <p className="mt-4 text-slate-600">The friend may have been removed or the link is incorrect. Try returning to the homepage to choose another profile.</p>
          <Link href="/" className="mt-8 inline-flex rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Go back home
          </Link>
        </div>
      </main>
    );
  }

  return <Profile friend={friend} />;
}
