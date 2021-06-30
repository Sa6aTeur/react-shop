import React from 'react'
import logo from '../img/logo.png';
import cartImg from '../img/Cart.svg'
import likeImg from '../img/Like.svg'
import userImg from '../img/User.svg'
import useTotalPrice from '../Hooks/totalPrice';
import { Link } from 'react-router-dom';


function Header({onCartOpen}) {

  const totalPrice = useTotalPrice()

  return (
    <header className="d-flex justify-between align-center p-40">

        <div className="d-flex align-center">
          <Link to="/react-shop">
            <img className="mr-15" alt="logo" src={logo} height={40} width={40} />
          </Link>       
          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>       
        </div>

        <ul className="d-flex align-center ">
          <li className="mr-20 d-flex align-center" onClick={onCartOpen}>
            <img className="cartImg mr-5" alt="cart" src={cartImg} height={20} width={20} /> 
            <span className="mr-10 "><b >{totalPrice}</b></span>
          </li>
          <li className="d-flex align-center">
              <Link className="d-flex align-center" to="/favorites">
                <img className="favoriteImg mr-25" alt="likes" src={likeImg} height={20} width={20} />
              </Link>
            <img className="userImg" src={userImg} height={20} width={20} />
          </li>
        </ul>

      </header>
  )
}

export default Header
