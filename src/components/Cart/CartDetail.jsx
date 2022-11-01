import React from 'react'
import {useContext} from 'react'
import {cartContext} from '../../context/cartContext'
import Button from "../Button/Button"
import "./cartStyle.css"

function CartDetail({cart}) {
    const {deleteFromCart}=useContext(cartContext);
  return (
    <div className='d-flex flex-row justify-content-around'>
        {cart.map((book) => (
        <div className='card p-3 cart-style' key={book.id}>
          <h5 className='card-title'>{book.title}</h5>
          <img src={book.img} alt="" />
          <h5> Cantidad:{book.count}</h5>
          <h5>Precio Total: ${book.price * book.count}</h5>
          <Button onClick={()=> deleteFromCart(book.id)} >Eliminar Producto</Button>
        </div>
      ))}
    </div>
  )
}

export default CartDetail