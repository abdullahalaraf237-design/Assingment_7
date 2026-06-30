'use client';

import { useMemo, useState } from 'react';
import { useTimeline } from '../../components/Timeline/TimelineProvider';

const actions = [
  { key: 'call', label: 'Call', icon: '📞' },
  { key: 'text', label: 'Text', icon: '💬' },
  { key: 'video', label: 'Video', icon: '🎥' },
];

export default function TimelineClient({ friendName, friendId }) {
  const { entries, addEntry } = useTimeline();
  const [toast, setToast] = useState(null);

  const friendEntries = useMemo(
    () => entries.filter((entry) => entry.friendId === friendId),
    [entries, friendId]
  );

  const handleAction = (action) => {
    const now = new Date();
    const nextEntry = {
      id: `${friendId}-${action.key}-${now.getTime()}`,
      type: action.label,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      title: `${action.label} with ${friendName}`,
      friendId,
      icon: action.icon,
    };

    addEntry(nextEntry);
    setToast(`${nextEntry.title} added`);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <div className="space-y-6 col-span-full relative">
      <div className="grid gap-3 sm:grid-cols-3 w-full">
        {actions.map((action) => (
          <button
            key={action.key}
            type="button"
            onClick={() => handleAction(action)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 shadow-sm hover:shadow-md w-full"
          >
            <span className="text-lg">{action.icon}</span>
            <span>{action.label}</span>
          </button>
        ))}
      </div>

      {friendEntries.length > 0 && (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">Recent Interactions</p>
          <div className="space-y-3">
            {friendEntries.map((entry) => (
              <div key={entry.id} className="rounded-3xl bg-white p-4 shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="rounded-3xl bg-slate-100 p-3 text-2xl flex-shrink-0">{entry.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900">{entry.title}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{entry.date} · {entry.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {toast && (
        <div className="pointer-events-none fixed right-6 bottom-6 z-50">
          <div className="rounded-3xl border border-emerald-700 bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-2xl">
            ✓ {toast}
          </div>
        </div>
      )}
    </div>
  );
}
