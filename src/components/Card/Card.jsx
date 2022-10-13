import React from 'react'
import './card.css'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function Card(props) {
  return (
    <div className='card'>
      <div className=''>
        <img src={props.img} alt={props.title} className='img'/>
      </div>
      <div className='card-body'>
        <h4>{props.title}</h4>
        <p>{props.detail}</p>
        <h5>${props.price}</h5>
      </div>
      <Link to={`/book/${props.id}`}>       
        <button className='card-btn'>Agregar</button>
      </Link>
    </div>
  )
}

export default Card