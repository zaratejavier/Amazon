import React from "react"
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { auth } from "./firebase";

const Header = (props) => {
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication = () => { 
    if (user) {
      auth.signOut();
    }
  }
  
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </Link>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email ? user?.email : "guest"}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link> 

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          {/* <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
          </div> */}
  
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

              <div class="dropdown-content">
                <CurrencyFormat
                  renderText={(value) => (
                <>
                  <p>
                    <strong>{`Total: ${value}`}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
