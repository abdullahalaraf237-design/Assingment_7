import React from 'react'
import friends from '../../../json.js'

export default function Banar() {
  const totalFriends = friends.length
  const totalOneTrak = friends.filter((friend) => friend.status === 'on_track').length
  const totalNeedsAttention = friends.filter((friend) => friend.status === 'Need Attention').length
  const totalInteractions = friends.filter((friend) => friend.status === 'Interactions This Month').length

  const stats = [
    { title: 'Total Friend', value: totalFriends },
    { title: 'One-Trak', value: totalOneTrak },
    { title: 'Needs Attention', value: totalNeedsAttention },
    { title: 'Interactions This Month', value: totalInteractions }
  ];

  return (
    <div className='px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-5xl text-center'>
        <h2 className='text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl'>Friends to keep close in your life</h2>

        <p className='mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-700/80 sm:text-base'>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className='hidden sm:block' /> relationships that matter most.
        </p>

        <button
          className='mt-6 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-amber-50 shadow-sm transition hover:bg-emerald-700 sm:w-auto'
        >
          + Add a Friend
        </button>
      </div>

      <div className='grid gap-4 mt-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map((stat) => (
          <div key={stat.title} className='bg-white shadow-sm border border-slate-200 rounded-3xl p-6 text-center'>
            <p className='text-3xl font-medium text-emerald-900'>{stat.value}</p>
            <p className='mt-3 text-sm font-medium text-slate-500'>{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
