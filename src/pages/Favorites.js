import React, { useContext } from 'react'
import AppContext from '../context'
import Card from '../components/Card'
import sadEmoji from '../img/sadEmoji.svg'
import leftArrow from '../img/leftArrow.svg'
import { Link } from 'react-router-dom';


function Favorites() {
  const {favorites, onAddToFavorites,onAddToCart} = useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="favorites">
        { favorites.length>0 ? (
        <div className="d-flex flex-wrap justify-center"> 
        {favorites.map((item,index) => <Card  
                                          key={index}
                                          onFavorite={onAddToFavorites}
                                          onAddToCart={onAddToCart}
                                          {...item}
                                                  />)}
        </div>)

        :(
          (<div className="emptyFavorites d-flex flex justify-center align-center flex-column">
          <img height={70} width={70} src={sadEmoji} alt="emptyCart" />
          <h3>Корзина пустая</h3>
          <p>Добавьте хотя бы одну пару кроссовок,<br/> чтобы сделать заказ.</p>
          <Link to="/react-shop">  
            <button width={360} className="greenButton"><img className="leftArrow" height={16} width={16}  src={leftArrow} alt="back"/> Вернуться назад </button>
          </Link> 
        </div>)
        )}
      </div>
    </div>
  )
}

export default Favorites
