import React from "react"
import "./Product.css"

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
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