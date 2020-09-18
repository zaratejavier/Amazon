import React from "react"
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, image, price, rating,title }) => {
  
  const starRating = (rating) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<p key={i}>⭐</p>)
  }
  return (stars);
  }

  return (
    <div className="checkoutProduct">
      <img className='checkoutProduct__image' src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {starRating(rating)}
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct