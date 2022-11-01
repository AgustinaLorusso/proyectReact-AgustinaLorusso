import React,{useState,useEffect} from 'react';
import {getLibros} from "../../services/firebase"
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
import {getBookByCategory} from "../../services/firebase"
import Loader from '../Loader/Loader';
import "./itemList.css"



 
function ItemListContainer() {
  const [librosList, setLibrosList]= useState([]);
  const [loading , setLoading]= useState(true);
  const {categoryId } = useParams();

  useEffect(()=>{
    if (categoryId === undefined){
      getLibros().then((data)=>{
        setLibrosList(data);
        setLoading(false);     
      });
    }
    else{
      getBookByCategory(categoryId).then((data) =>{
        setLibrosList(data);
        setLoading(false);
      });
    }   
    },[categoryId]
  )

  return (
    <main className="main px-5">
        <section>  
        { loading ?
         <div className="load">
           <Loader/>
         </div>  :
         <div className='py-5 px-5'><ItemList librosList={librosList}/></div>
        }
        </section>
    </main>
  )

}

export default ItemListContainer