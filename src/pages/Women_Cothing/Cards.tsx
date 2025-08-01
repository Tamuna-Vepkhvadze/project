import React from 'react'

interface CardProps {
    id: number
    image: string
    title: string
    price: number
}

const Cards:React.FC<CardProps> = ({id, image, price, title}) => {
  return (
        <div key={id} className="jewelery-card">
          <div className="image-wrapper">
            <img src={image} alt={title} />
          </div>
          <div className="info">
            <h2>{title}</h2>
            <p>${price}</p>
          </div>
        </div>
  )
}

export default Cards