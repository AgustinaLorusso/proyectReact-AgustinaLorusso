import React from 'react'
import './card.css'
import {Link} from "react-router-dom"
import Button from "../Button/Button"
/*import 'bootstrap/dist/css/bootstrap.min.css'*/

function Card(props) {
  return (
    <div class="card">
      <img src={props.img} alt={props.title} class="card-img"/>
      <div class="card-detail">
        <h4 className='card-title'>{props.title}</h4>
        <p class="card-text">{props.detail}</p>
        <h5>${props.price}</h5>
      </div>
      <Link to={`/book/${props.id}`} class="btn-style mb-2">       
        <Button>Agregar</Button>
      </Link>
    </div>
  )
}

export default Card