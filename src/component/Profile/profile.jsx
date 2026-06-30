'use client';

import { useEffect, useState } from 'react';
import TimelineClient from '../friendDetails/TimelineClient';

const statusMap = {
  overdue: {
    label: 'Overdue',
    classes: 'bg-red-100 text-red-800',
  },
  'almost due': {
    label: 'Almost Due',
    classes: 'bg-amber-100 text-amber-800',
  },
  'on-track': {
    label: 'On Track',
    classes: 'bg-emerald-100 text-emerald-800',
  },
};

export default function Profile({ friend }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const currentFriend = friend;
  const status = statusMap[currentFriend.status] ?? statusMap['on-track'];

  return (
    <section className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 transition transform duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="mb-10 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">Friend Details</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{currentFriend.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">View and manage your connection, log quick interactions, and keep your relationship on track.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{currentFriend.tags.join(' · ')}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[360px_1fr]">
        <aside className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center text-center gap-5">
            <img
              className="h-32 w-32 rounded-full object-cover ring-4 ring-emerald-100"
              src={currentFriend.picture}
              alt={currentFriend.name}
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Status</p>
              <span className={`mt-3 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${status.classes}`}>{status.label}</span>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">About</p>
              <p className="text-slate-700">{currentFriend.bio}</p>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Email</p>
              <p className="text-slate-700">{currentFriend.email}</p>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Tags</p>
              <div className="flex flex-wrap gap-2">
                {currentFriend.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3">
            <button type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Button</button>
            <button type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">⏰ Snooze 2 Weeks</button>
            <button type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">📦 Archive</button>
            <button type="button" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100">🗑️ Delete</button>
          </div>
        </aside>

        <main className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Days Since Contact</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{currentFriend.days_since_contact}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Goal</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{currentFriend.goal} days</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Next Due Date</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{currentFriend.next_due_date}</p>
            </div>
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Relationship Goal</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">Contact every {currentFriend.goal} days</p>
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Edit</button>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Quick Check-In</p>
                <p className="mt-2 text-slate-600">Log your interaction with {currentFriend.name}</p>
              </div>
            </div>
            <TimelineClient friendName={currentFriend.name} friendId={currentFriend.id} />
          </section>
        </main>
      </div>
    </section>
  );
}
