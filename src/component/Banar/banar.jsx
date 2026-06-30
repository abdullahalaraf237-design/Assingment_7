import friends from '../../data/friends.json';

const statusMap = {
  overdue: { label: 'Overdue', color: 'bg-red-100 text-red-700' },
  'almost due': { label: 'Almost Due', color: 'bg-amber-100 text-amber-800' },
  'on-track': { label: 'On Track', color: 'bg-emerald-100 text-emerald-800' },
};

export default function Banar() {
  const totalFriends = friends.length;
  const totalOnTrack = friends.filter((friend) => friend.status === 'on-track').length;
  const totalAlmostDue = friends.filter((friend) => friend.status === 'almost due').length;
  const totalOverdue = friends.filter((friend) => friend.status === 'overdue').length;

  const stats = [
    { title: 'Total Friends', value: totalFriends },
    { title: 'On Track', value: totalOnTrack },
    { title: 'Almost Due', value: totalAlmostDue },
    { title: 'Overdue', value: totalOverdue },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 pb-16 pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[1.8fr_1fr] xl:items-center">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">Relationships made simple</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Keep the people who matter most close.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Manage your friendships with a clear plan, quick check-ins, and one place for every connection.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-800">
                <span>＋</span>
                Add a Friend
              </button>
              <a href="#friends" className="text-sm font-semibold text-slate-900 underline-offset-4 transition hover:underline">
                Browse friends
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.title} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-500">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
