import React,{useState,useEffect} from 'react';
import './itemList.css'
import {getLibros} from "../../mockAPI/mockAPI"
import Card from '../Card/Card';

 
function ItemListContainer() {
  const [librosList, setLibrosList]= useState([]);

  useEffect(
    ()=>{
      getLibros().then((data)=>{
        setLibrosList(data);     
      });
    },[]
  )

  return (
    <main className="main">
        <section className="catalogo">
           {librosList.map((libros)=>{
            return (
              <Card title={libros.title} img={libros.img} price={libros.price} detail={libros.detail}    />
            );
           })}
        </section>
    </main>
  )
 /* return (
    <main className="main">
        <section className="saludo">
            <div><h5>{props.greeting}</h5></div>
        </section>
    </main>
  )*/
}

export default ItemListContainer