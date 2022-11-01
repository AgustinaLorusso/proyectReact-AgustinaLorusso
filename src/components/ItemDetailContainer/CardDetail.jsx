import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react';
import {useContext} from 'react';
import {cartContext} from '../../context/cartContext';
import {Link} from "react-router-dom"
import "./cardDetail.css"
import Button from "../Button/Button"



function CardDetail({book}) {
  const [counter, setCounter] = useState(0);
  const{addItemToCart,isInCart,cart}= useContext(cartContext);

  /*funcion de compra, guarda cantidad del producto en un estado*/
  function handleAddToCart(count) {
    addItemToCart(book,count);
    setCounter(count);
  
  }
  return (
    <div className='w-100 h-100'>
      <div className='d-flex justify-content-center align-items-center '>
       <div className='card w-75 d-flex flex-row justify-content-between card-style'>
         <div className='w-50'>
            <img src={book.img} alt={book.title} className='img'/>
         </div>
         <div className='card-body'>
            <h4>{book.title}</h4>
            <p>{book.detail}</p>
            <h5>${book.price}</h5>
            <p>{book.description}</p>
            {((counter===0)&&(isInCart(cart,book.id)!=true)) ? (
              <ItemCount
               addToCart={handleAddToCart}
               stock={book.stock}
               initial={1}
              />) : (
                <Link to="/cart" className='cart-view'><Button>Ver Carrito</Button></Link>
              )} 
         </div>
        </div>  
      </div>
    </div>
  )
}

export default CardDetail