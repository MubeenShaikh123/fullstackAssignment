import React from 'react'

const Card = ({card}) => {
  return (
    <div key={card._id} className='bg-[#F4F6F8] w-full h-auto border rounded-lg border-gray-300'>
      <h1 className='break-words w-full border-b border-gray-300 px-5 pt-2 font-bold'>{card.title}</h1>
      <h3 className='break-words w-full px-5 pt-1 pb-4'>{card.description}</h3>
    </div>
  )
}

export default Card
