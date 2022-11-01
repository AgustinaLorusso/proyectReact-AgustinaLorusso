import React from 'react'
import {useContext} from 'react'
import {cartContext} from '../../context/cartContext'
import CartDetail from './CartDetail';
import {Link} from "react-router-dom"
import "./cartStyle.css"
import Button from '../Button/Button';


function Cart() {
    const {cart,totalPrice} =useContext(cartContext);
  
  return (
    <div className='main'>
        {cart.length===0 ? 
          <div className='text-center empty pt-5'>
           <h5 className='text-center'>El carrito esta vacio</h5>
           <Link to='/'><Button>Ver Libros</Button></Link>

          </div> : 
          <div>
           <div className='d-flex flex-column justify-content-center mx-5 pt-3'>
             <Link to='/checkout'><Button>Checkout ${totalPrice()}</Button></Link>
           </div>
            < div className='d-flex flex-row justify-content-around'>
              <CartDetail cart ={cart}/>
            </div>
          </div>
        }
    </div>
  )
}

export default Cart