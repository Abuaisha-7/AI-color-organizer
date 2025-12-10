import React from 'react'

function Star({ selected = false, onClick = (f) => f }) {
  return (
    <div 
    className={selected ? "selected_star" : "star"}
    onClick={onClick} 
    ></div>
  )
}

export default Star