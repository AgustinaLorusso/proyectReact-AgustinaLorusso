import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./carrito.css"
import {useContext} from 'react'
import {cartContext} from '../../context/cartContext'



function CartWidget() {
  const {countItemsOnCart} = useContext(cartContext)
  return (
    <div className='estilo-carrito'>
      <FontAwesomeIcon icon={faCartShopping }/>
      <h5 className='ms-2' >{countItemsOnCart()>0 && countItemsOnCart()}</h5>
    </div>
  )
}
export default CartWidget