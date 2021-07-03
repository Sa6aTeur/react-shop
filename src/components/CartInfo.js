import React from 'react'
import leftArrow from '../img/leftArrow.svg'


function CartInfo({title, imgUrl, description,onCartClose}) {
  
  return (
    <div className="emptyCart d-flex flex justify-center align-center flex-column">
              <img height={120} width={120} src={imgUrl} alt="emptyCart" />
              <h3>{title}</h3>
              <p>{description}</p>
              <button onClick={onCartClose} className="greenButton"><img className="leftArrow" height={16} width={16}  src={leftArrow} alt="back"/> Вернуться назад </button> 
            </div>
  )
}

export default CartInfo
