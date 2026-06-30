'use client';

import { useMemo, useState } from 'react';
import { useTimeline } from '../../components/Timeline/TimelineProvider';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'Call', label: 'Call' },
  { key: 'Text', label: 'Text' },
  { key: 'Video', label: 'Video' },
];

const icons = {
  Call: '📞',
  Text: '💬',
  Video: '🎥',
};

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return entries;
    return entries.filter((entry) => entry.type === filter);
  }, [entries, filter]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Timeline</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Interaction history</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">Review every check-in from your friends and filter by call, text, or video.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === item.key ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
            No timeline entries yet. Visit a friend profile and log a new interaction.
          </div>
        ) : (
          filtered.map((entry) => (
            <div key={entry.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-3xl bg-slate-100 p-4 text-2xl">{icons[entry.type] ?? '🔔'}</div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{entry.title}</p>
                    <p className="mt-2 text-sm text-slate-500">{entry.date}</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{entry.time}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
