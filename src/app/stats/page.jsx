'use client';

import { useTimeline } from '../../components/Timeline/TimelineProvider';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function StatsPage() {
  const { entries } = useTimeline();

  const data = [
    { name: 'Calls', value: entries.filter((entry) => entry.type === 'Call').length, color: '#16a34a' },
    { name: 'Texts', value: entries.filter((entry) => entry.type === 'Text').length, color: '#f59e0b' },
    { name: 'Videos', value: entries.filter((entry) => entry.type === 'Video').length, color: '#0f172a' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Friendship Analytics</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Interaction analytics</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">A visual view of your recent friend interactions helps you spot who needs a follow-up next.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={4}>
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}`, 'Interactions']} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">{item.name}</p>
                <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              </div>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full" style={{ width: `${total === 0 ? 0 : Math.min(100, (item.value / total) * 100)}%`, backgroundColor: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
