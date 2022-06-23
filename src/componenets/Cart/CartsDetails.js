import React from 'react'

const CartsDetails = ({id,title,price,image,description,cartQuantity}) => {
  return (
    <div>
      <h1>{id}</h1>
      <h2>{cartQuantity}</h2>
      <h2>{title}</h2>
    </div>
  )
}

export default CartsDetails