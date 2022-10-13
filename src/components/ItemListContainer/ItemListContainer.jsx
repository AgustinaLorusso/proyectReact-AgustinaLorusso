import React,{useState,useEffect} from 'react';
import './itemList.css'
import {getLibros} from "../../mockAPI/mockAPI"
import Card from '../Card/Card';
import {useParams} from "react-router-dom"
import {getBookByCategory} from "../../mockAPI/mockAPI"


 
function ItemListContainer() {
  const [librosList, setLibrosList]= useState([]);
  const {categoryId } = useParams();

  useEffect(()=>{
    if (categoryId === undefined){
      getLibros().then((data)=>{
        setLibrosList(data);     
      });
    }
    else{
      getBookByCategory(categoryId).then((data) =>{
        setLibrosList(data);
      });
    }   
    },[categoryId]
  )

  return (
    <main className="main">
        <section className="catalogo">
           {librosList.map((libros)=>{
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
        </section>
    </main>
  )

}

export default ItemListContainer