import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./carrito.css"



function CartWidget() {
  return (
    <a href="#" className='estilo-carrito'><FontAwesomeIcon icon={faCartShopping } /></a>
  )
}

export default CartWidget