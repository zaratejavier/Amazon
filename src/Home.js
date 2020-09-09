import React from "react"
import './Home.css'
import Product from "./Product"

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/FALL_1/GW/DH/AF_M_WATCHES_2x._CB407768965_.jpg" alt=""
        />

        <div className="home__row">
          <Product
            title="YEOGNED 535 26 Mechanical Lockout Suspension Adjustable Fork Variable Speed Aluminum Mountain Bike for Path"
            price={308.00}
            image="https://m.media-amazon.com/images/I/517H0yWIHrL._AC_SL520_.jpg"
            rating={5}
          />
          <Product/>
        </div>
 
        <div className="home__row">
          <Product/>
          <Product/>
          <Product/>
        </div>

        <div className="home__row">
          <Product/>
        </div>
        
      </div>
    </div>
  )
}

export default Home


{/* <img alt="Alexa, open Jeopardy | Echo Show" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MDEyMjRkYzYt/MDEyMjRkYzYt-MWIxMWRkYjMt-w3000._CB406838427_.jpg" height="600px" width="1500px" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MDEyMjRkYzYt/MDEyMjRkYzYt-MWIxMWRkYjMt-w3000._CB406838427_.jpg"> */ }
{/* <img alt="Timeless watches for every style" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/FALL_1/GW/DH/AF_M_WATCHES_2x._CB407768965_.jpg" height="600px" width="1500px" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/FALL_1/GW/DH/AF_M_WATCHES_2x._CB407768965_.jpg"></img> */}