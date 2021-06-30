import React from 'react'
import sneaker from '../img/sneaker1.jpg'
import btnPlus from '../img/btnPlus.svg'
import emptyCart from '../img/emptyCart.svg'
import btnChecked from '../img/btnChecked.svg'
import deleteButton from '../img/deleteButton.svg'
import rightArrow from '../img/rightArrow.svg'
import leftArrow from '../img/leftArrow.svg'
import useTotalPrice from '../Hooks/totalPrice'


function Drawer({onCartClose, onRemoveFromCart, items=[] }) {

  let totalPrice = useTotalPrice()

  return (   
    <div className=" overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between align-center mb-20">Корзина <img onClick={onCartClose} className="removeButton cu-p" height={25} width={25} src={deleteButton} alt="sneaker" /></h2>
        
        {items.length >0 
          ? (<>
            <div className="items">
              { items.map(item => (
                  <div className="cartItem d-flex align-center justify-between">
                  <div className="imgWrapper"><img src={item.imageUrl} alt="sneaker" width={70} height={70}/></div>
                  <div className="">
                    <p>{item.title}</p>
                    <b>{item.price}</b>
                  </div>
                  <img onClick={()=>{onRemoveFromCart({...item})}} className="removeButton" src={deleteButton} alt="sneaker" />
                </div>
              ))}       
            </div>

            <div className="cartTotalBlock">
              <ul>
                  <li className="d-flex justify-between mt-10">
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice}</b>
                  </li>
                  <li className="d-flex justify-between mt-10">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>{Math.ceil(totalPrice*0.05)}</b>
                  </li>
                </ul>
                <button className="greenButton">Оформить заказ <img className="rightArrow " height={16} width={16}  src={rightArrow} alt="order" /></button>          
            </div>
            </>   ) 
          
          : (<div className="emptyCart d-flex flex justify-center align-center flex-column">
              <img height={120} width={120} src={emptyCart} alt="emptyCart" />
              <h3>Корзина пустая</h3>
              <p>Добавьте хотя бы одну пару кроссовок,<br/> чтобы сделать заказ.</p>
              <button onClick={onCartClose} className="greenButton"><img className="leftArrow" height={16} width={16}  src={leftArrow} alt="back"/> Вернуться назад </button> 
            </div>)
        }                 
      </div>
    </div>
  )
}

export default Drawer
