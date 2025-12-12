import React from 'react'
import Color from './Color'

function ColorList({
    colors = [],
    onRate = (f) => f,
    onRemove = (f) => f
  }) {
  return (
    <div className='flex flex-wrap items-cente  my-3 max-[900px]:justify-center  '>
        {colors.length === 0 ? (
      <p className='p__opensans'>No Colors Listed. (Add a Color)</p>
    ) : (
      colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRate={(rating) => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)}
        />
      ))
    )}
    </div>
  )
}

export default ColorList