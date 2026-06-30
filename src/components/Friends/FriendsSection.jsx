'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const statusClass = {
  overdue: 'bg-red-100 text-red-700',
  'almost due': 'bg-amber-100 text-amber-800',
  'on-track': 'bg-emerald-100 text-emerald-800',
};

export default function FriendsSection() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch('/api/friends');
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-1/3 rounded-full bg-slate-200" />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-72 rounded-[32px] bg-slate-200" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="friends" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">Your Friends</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">All connections</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600">Tap any card to open the friend details page and log a call, text, or video interaction.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {friends.map((friend) => (
          <Link key={friend.id} href={`/friend/${friend.id}`} className="group block overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-center">
              <img src={friend.picture} alt={friend.name} className="h-28 w-28 rounded-full object-cover" />
            </div>
            <div className="mt-5 text-center">
              <p className="text-xl font-semibold text-slate-900">{friend.name}</p>
              <p className="mt-2 text-sm text-slate-600">{friend.days_since_contact} days since contact</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {friend.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className={`inline-flex rounded-full px-3 py-2 text-sm font-semibold ${statusClass[friend.status] ?? 'bg-slate-100 text-slate-700'}`}>
                {friend.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
