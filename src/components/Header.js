import React from 'react'
import logo from '../img/logo.png';
import cartImg from '../img/Cart.svg'
import likeImg from '../img/Like.svg'
import userImg from '../img/User.svg'

function Header({onCartOpen}) {
  return (
    <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-15" alt="logo" src={logo} height={40} width={40} />

          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
          
        </div>

        <ul className="d-flex ">
          <li className="mr-30" onClick={onCartOpen}>
            <img className="cartImg mr-5" alt="cart" src={cartImg} height={20} width={20} /> 
            <span className="mr-15">1205 руб.</span>
          </li>
          <li>
            <img className="favoriteImg mr-25" alt="likes" src={likeImg} height={20} width={20} />
            <img className="userImg" src={userImg} height={20} width={20} />
          </li>
        </ul>

      </header>
  )
}

export default Header
