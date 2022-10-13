import 'bootstrap/dist/css/bootstrap.min.css'


function CardDetail(props) {
  return (
    <div className='w-100 h-100'>
      <div className='d-flex justify-content-center align-items-center '>
       <div className='card w-75 d-flex flex-row justify-content-between'>
         <div className='w-50'>
            <img src={props.img} alt={props.title} className='img'/>
         </div>
         <div className='card-body'>
            <h4>{props.title}</h4>
            <p>{props.detail}</p>
            <h5>${props.price}</h5>
            <button className='card-btn'>Agregar</button>
         </div>
        </div>  
      </div>
    </div>
  )
}

export default CardDetail