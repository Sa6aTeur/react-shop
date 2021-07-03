import React, {useContext, useState} from 'react'
import emptyCart from '../img/emptyCart.svg'
import orderComplete from '../img/orderComplete.svg'
import deleteButton from '../img/deleteButton.svg'
import rightArrow from '../img/rightArrow.svg'
import useTotalPrice from '../Hooks/totalPrice'
import CartInfo from '../components/CartInfo'
import AppContext from '../context'
import sneakersApi from '../api/axios'


function Drawer({onCartClose, onRemoveFromCart, items=[] }) {

  const {cartItems, setCartItems} = useContext(AppContext)

  let totalPrice = useTotalPrice()
  const [isOrederComplete, setIsOrederComplete] = useState(false)
  const [isOrderLoading, setIsOrderLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)


  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onClickOrder = async () => {
    debugger
    try {
      setIsOrderLoading(true)
      const {data} = await sneakersApi.post('/orders',{ items: cartItems })
      setOrderId(data.id)
      setIsOrederComplete(true)
      ////delete All Items From Cart (this is cycle because the TEST API does not have other methods in the endpoint )
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await sneakersApi.delete('/cart/' + item.id);
        await delay(1000);
      }       
      setCartItems([])
    } catch (error) {
      alert('Не удалось оформить заказ')
    }
    setIsOrderLoading(false)
  }


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
                <button onClick={onClickOrder} disabled={isOrderLoading} className="greenButton" > Оформить заказ <img className="rightArrow " height={16} width={16}  src={rightArrow} alt="order" /></button>          
            </div>
            </>   ) 
          
          : (<CartInfo title={isOrederComplete? 'Заказ оформлен!' :'Корзина пустая'}
                       imgUrl={isOrederComplete? orderComplete : emptyCart}
                       description={isOrederComplete? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` :'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                       onCartClose={onCartClose}
                       isOrederComplete={isOrederComplete}
             />)
        }                 
      </div>
    </div>
  )
}

export default Drawer
