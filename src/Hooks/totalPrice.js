import React, { useContext } from 'react'
import AppContext from '../context'


export const useTotalPrice = () => {
  
  const{cartItems} = useContext(AppContext)
  let totalPrice = 0
  cartItems.forEach(item => totalPrice = totalPrice + Number(item.price))

  return totalPrice
}


export default useTotalPrice
