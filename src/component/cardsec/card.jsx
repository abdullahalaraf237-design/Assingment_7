import React from 'react'
import cardData from '../../../json'

export default function Card() {
  const getStatusColor = (status) => {
    switch(status) {
      case 'overdue':
        return 'bg-red-500'
      case 'on_track':
        return 'bg-green-800'
      case 'due_soon':
        return 'bg-yellow-400'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className='mt-25 p-8'>
      <h2 className='ml-12 text-2xl mb-8'>Your friend</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12'>
        {cardData.map((card) => (
          <div key={card.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='flex justify-center p-4'>
              <img 
                src={card.picture} 
                alt={card.name}
                className='w-40 h-40 rounded-full object-cover opacity-60 bg-green-200'
              />
            </div>
            <div className='p-4 text-center'>
              <h3 className='text-xl font-bold mb-2'>{card.name}</h3>
              <p className='text-gray-600 text-sm mb-3'>{card.bio}</p>
              <div className='flex gap-2 mb-4 flex-wrap justify-center'>
                {card.tags.map((tag, idx) => (
                  <span key={idx} className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs'>
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex justify-center items-center gap-4'>
                <span className={`${getStatusColor(card.status)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {card.status.replace('_', ' ').toUpperCase()}
                </span>
                <span className='text-gray-600 text-sm'>{card.days_since_contact}d ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
