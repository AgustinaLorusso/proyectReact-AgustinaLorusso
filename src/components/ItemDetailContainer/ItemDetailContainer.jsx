/*Se muesta cuando se pide ver el detalle de una card en particular*/

import { useState, useEffect } from "react";
import CardDetail from "./CardDetail";
import { useParams } from "react-router-dom";
import { getBookById } from "../../mockAPI/mockAPI"


function ItemDetailContainer() {
    const [book,setBook] = useState([]);

    /*busca los parametros de la url*/
    const {id} = useParams();

    /*uso useEffect para que se ejecute cada vez que se pida ver el detalle de otro producto (cuando cambia el id)*/
    /*getBookById busca la data del libro que se seleciono para ver el detalle*/
    useEffect(() => {
        getBookById(id).then((data) =>{
            setBook(data);
        });
    },[id]);

  return (
    <div>
        <CardDetail
            title={book.title}
            img={book.img}
            price={book.price}
            detail={book.detail}
            stock={book.stock}
        />  
    </div>
  )
}

export default ItemDetailContainer