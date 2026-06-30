'use client';

import { useMemo, useState } from 'react';
import { useTimeline } from '../../components/Timeline/TimelineProvider';

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

const actions = [
  { type: 'Call', label: 'Call', icon: '📞' },
  { type: 'Text', label: 'Text', icon: '💬' },
  { type: 'Video', label: 'Video', icon: '🎥' },
];

export default function FriendDetail({ friend }) {
  const { addEntry } = useTimeline();
  const [toast, setToast] = useState(null);

  const status = statusMap[friend.status] ?? statusMap['on-track'];

  const handleCheckIn = (action) => {
    const now = new Date();
    const entry = {
      friendId: friend.id,
      type: action.type,
      icon: action.icon,
      title: `${action.type} with ${friend.name}`,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    addEntry(entry);
    setToast(`${entry.title} added`);
    window.setTimeout(() => setToast(null), 2000);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 xl:grid-cols-[360px_1fr]">
        <aside className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center text-center gap-5">
            <img
              className="h-28 w-28 rounded-full object-cover ring-2 ring-slate-200"
              src={friend.picture}
              alt={friend.name}
            />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                {friend.name}
              </h1>
              <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${status.classes}`}>
                {status.label}
              </span>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {friend.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Bio
              </p>
              <p className="text-slate-700">{friend.bio}</p>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Email
              </p>
              <p className="text-slate-700">{friend.email}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-3">
            <button type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Button
            </button>
            <button type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              ⏰ Snooze 2 Weeks
            </button>
            <button type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              📦 Archive
            </button>
            <button type="button" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100">
              🗑️ Delete
            </button>
          </div>
        </aside>

        <main className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Days Since Contact
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{friend.days_since_contact}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Goal
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{friend.goal} days</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Next Due Date
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{friend.next_due_date}</p>
            </div>
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Relationship Goal
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">Contact every {friend.goal} days</p>
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Edit
              </button>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Quick Check-In
                </p>
                <p className="mt-2 text-slate-600">Click to log a quick interaction in the timeline.</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {actions.map((action) => (
                <button
                  key={action.type}
                  type="button"
                  onClick={() => handleCheckIn(action)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <span>{action.icon}</span>
                  {action.label}
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>

      {toast && (
        <div className="pointer-events-none fixed right-6 bottom-6 z-50">
          <div className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </section>
  );
}
