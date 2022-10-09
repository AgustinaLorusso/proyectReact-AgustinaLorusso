import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={props.img} alt={props.title} className='img'/>
        </div>
        <div className='card-body'>
            <h4>{props.title}</h4>
            <p>{props.detail}</p>
            <h5>${props.price}</h5>
        </div>
        <button className='card-btn'>Agregar</button>
    </div>
  )
}

export default Card