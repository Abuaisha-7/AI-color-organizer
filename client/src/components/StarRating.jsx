import React from 'react'
import Star from './Star'

function StarRating({
    starsSelected = 0,
    totalStars = 5,
    onRate = (f) => f
  }) {
  return (
    <div className='flex justify-center items-center flex-col'>
    <div className='flex justify-center items-center' >
         {[...Array(totalStars)].map((n, i) => (
      <Star
        key={i}
        selected={i < starsSelected}
        onClick={() => onRate(i + 1)}
        
      />
    ))}
    </div>
    <p className='p__cormorant'>
      {starsSelected} of {totalStars} stars
    </p>
    </div>
  )
}

export default StarRating