import React from "react"
import "./Product.css"
import { useStateValue } from "./StateProvider"

const Product = ({ id, title, image, price, rating, alt }) => {
  const [{basket}, dispatch] = useStateValue();

  console.log("this is the basket >>>", basket)

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },

    })
  }

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
        src={image} alt={alt}
      />
    
      <button onClick={addToBasket}>Add to Basket</button>

   </div>
 ) 
}

export default Product

{/* <img alt="YEOGNED 535 26&quot; Mechanical Lockout Suspension Adjustable Fork Variable Speed Aluminum Mountain Bike for Path,Trail &amp; Mountain, 24 Speends, Disc Brake,Thumb Shifter,Outdoor Cycling" src="https://m.media-amazon.com/images/I/517H0yWIHrL._AC_SL520_.jpg" class="hud-dashboard-card-v2-image" data-a-hires="https://m.media-amazon.com/images/I/517H0yWIHrL._AC_SL520_.jpg"> */}