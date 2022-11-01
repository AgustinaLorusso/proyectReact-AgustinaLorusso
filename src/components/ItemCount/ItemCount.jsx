import React from 'react'
import {useState} from 'react';
import Button from '../Button/Button';


function ItemCount({stock,initial,addToCart}) {
  const [count, setCount]= useState(initial);
  /*funciones que aumentan/disminuyen cantidad del producto*/
  function increaseCounter(){
    if (count < stock) setCount(count +1);
  }
  function decreaseCounter(){
    if (count > 1) setCount(count -1);
  }

  return (
    <div className='d-flex flex-column justify-content-center '>
       <div className='d-flex flex-row justify-content-around mb-2'>
         <Button onClick={increaseCounter} > + </Button>
         <strong>{count}</strong>
         <Button  onClick={decreaseCounter} > - </Button>
      </div>
      <Button onClick={() => {addToCart(count);}}>
          Agregar
      </Button>
    </div>
  )
}

export default ItemCount