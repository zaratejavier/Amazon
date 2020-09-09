import React from "react"
import "./Product.css"

const Product = ({ title, image, price, rating }) => {
  
  const starRating = (rating) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<p key={i}>⭐</p>)
  }
  return (stars);
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {starRating(rating)}
        </div>
      </div>

      <img
        src="https://m.media-amazon.com/images/I/517H0yWIHrL._AC_SL520_.jpg" alt="a picture of a bike"
      />
    
      <button>Add to Basket</button>

   </div>
 ) 
}

export default Product

{/* <img alt="YEOGNED 535 26&quot; Mechanical Lockout Suspension Adjustable Fork Variable Speed Aluminum Mountain Bike for Path,Trail &amp; Mountain, 24 Speends, Disc Brake,Thumb Shifter,Outdoor Cycling" src="https://m.media-amazon.com/images/I/517H0yWIHrL._AC_SL520_.jpg" class="hud-dashboard-card-v2-image" data-a-hires="https://m.media-amazon.com/images/I/517H0yWIHrL._AC_SL520_.jpg"> */}