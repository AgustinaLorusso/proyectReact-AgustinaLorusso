import React from 'react'
import Card from '../Card/Card';
import './itemList.css'


function ItemList(props) {
  return (
   
      <div className='catalogo'>
        {props.librosList.map((libros)=>{
              return (
                <Card 
                key={libros.id}
                id={libros.id}
                title={libros.title} 
                img={libros.img} 
                price={libros.price} 
                detail={libros.detail}
                />
              );
            })}
      </div>
    
  )
}

export default ItemList