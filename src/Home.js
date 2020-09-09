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
            id="12321341"
            title="YEOGNED 535 26 Mechanical Lockout Suspension Adjustable Fork Variable Speed Aluminum Mountain Bike for Path"
            price={308.00}
            image="https://m.media-amazon.com/images/I/517H0yWIHrL._AC_SL520_.jpg"
            rating={5}
            alt="A picture of a red"
          />
          <Product
            id="49538094"
            title="AmazonBasics Lightweight Camera Mount Tripod Stand With Bag - 16.5 - 50 Inches"
            price={25.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SL1484_.jpg"
            rating={4}
            alt="a camera tripod"
          />
        </div>
 
        <div className="home__row">
          <Product
            id='4903850'
            title="Controller Compatible with Playstation 4, YCCTEAM Wireless Controller for PS4 with Built-in 1000mAh Rechargeable Battery"
            price={44.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61agkOc6kXL._AC_SX679_.jpg"
            rating={4}
            alt="A play station 4 controller"
          />
          <Product
            id='23445930'
            title="DJI Ronin-SC - Camera Stabilizer 3-Axis Gimbal Handheld for Mirrorless Cameras up to 4.4 lbs / 2kg Payload"
            price={279.00}
            image="https://images-na.ssl-images-amazon.com/images/I/51BTZF3RRgL._AC_SX679_.jpg"
            rating={5}
            alt="Gimbal"
          />
          <Product
            id='3254354345'
            title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Silver (4th Generation)"
            price={1649.00}
            image="https://images-na.ssl-images-amazon.com/images/I/818F2JHUZ1L._AC_SX679_.jpg"
            rating={4}
            alt="DJI Mavic AIR 2 drone"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            alt="A Samsung monitor"
          />
        </div>
        
      </div>
    </div>
  )
}

export default Home


{/* <img alt="Alexa, open Jeopardy | Echo Show" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MDEyMjRkYzYt/MDEyMjRkYzYt-MWIxMWRkYjMt-w3000._CB406838427_.jpg" height="600px" width="1500px" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MDEyMjRkYzYt/MDEyMjRkYzYt-MWIxMWRkYjMt-w3000._CB406838427_.jpg"> */ }
{/* <img alt="Timeless watches for every style" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/FALL_1/GW/DH/AF_M_WATCHES_2x._CB407768965_.jpg" height="600px" width="1500px" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/FALL_1/GW/DH/AF_M_WATCHES_2x._CB407768965_.jpg"></img> */ }
{/* <img alt="AmazonBasics 60-Inch Lightweight Tripod with Bag" src="https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SY879_.jpg" data-old-hires="https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SL1484_.jpg" onload="if(this.width/this.height > 1.0){this.className += ' a-stretch-horizontal'}else{this.className += ' a-stretch-vertical'};this.onload='';" data-a-image-name="landingImage" class="a-dynamic-image a-stretch-vertical" id="landingImage" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SY550_.jpg&quot;:[550,331],&quot;https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SY679_.jpg&quot;:[679,408],&quot;https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SY879_.jpg&quot;:[879,528],&quot;https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SY450_.jpg&quot;:[450,270],&quot;https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SY741_.jpg&quot;:[741,445],&quot;https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SY606_.jpg&quot;:[606,364],&quot;https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SY355_.jpg&quot;:[355,213]}" style="max-width: 486px; max-height: 486px;"></img> */}