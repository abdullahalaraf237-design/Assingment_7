import React from 'react'
import Link from 'next/link'
import cardData from '../../data/friends.json'

export default function Card() {
  const statusMap = {
    overdue: { color: 'bg-red-100 text-red-800', label: 'Overdue' },
    'almost due': { color: 'bg-amber-100 text-amber-800', label: 'Almost Due' },
    'on-track': { color: 'bg-emerald-100 text-emerald-800', label: 'On Track' },
  };

  return (
    <div className="mt-25 p-8">
      <h2 className="ml-12 text-2xl mb-8 font-semibold text-slate-900">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
        {cardData.map((card) => {
          const statusInfo = statusMap[card.status] || statusMap['on-track'];
          return (
            <Link key={card.id} href={`/friend/${card.id}`} className="block rounded-lg border border-transparent bg-white shadow-md transition hover:border-slate-300 hover:shadow-lg">
              <div className="flex justify-center p-4">
                <img 
                  src={card.picture} 
                  alt={card.name}
                  className="w-40 h-40 rounded-full object-cover shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{card.name}</h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{card.bio}</p>
                <div className="flex gap-2 mb-4 flex-wrap justify-center">
                  {card.tags.map((tag, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-3 flex-wrap">
                  <span className={`${statusInfo.color} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {statusInfo.label}
                  </span>
                  <span className="text-slate-600 text-sm font-medium">{card.days_since_contact}d</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
