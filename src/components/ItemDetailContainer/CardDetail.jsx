import 'bootstrap/dist/css/bootstrap.min.css'


function CardDetail(props) {
  return (
    <div>
      <div className='card'>
        <div className=''>
            <img src={props.img} alt={props.title} className='img'/>
        </div>
        <div className='card-body'>
            <h4>{props.title}</h4>
            <p>{props.detail}</p>
            <h5>${props.price}</h5>
        </div>
        <button className='card-btn'>Agregar</button>
     </div>  
    </div>
  )
}

export default CardDetail