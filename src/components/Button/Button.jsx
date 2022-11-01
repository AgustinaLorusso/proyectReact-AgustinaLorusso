import React from 'react'

function Button(props) {
  function handleClick(){
    /* Si es true la ejecuta*/
    if (props.onClick) props.onClick();
  }
  return (
    <button className='btn btn-secondary' onClick={handleClick}>
     {props.children}
   </button>
  )
}

export default Button