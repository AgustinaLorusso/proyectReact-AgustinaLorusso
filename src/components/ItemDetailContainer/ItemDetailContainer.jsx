/*Se muesta cuando se pide ver el detalle de una card en particular*/

import { useState, useEffect } from "react";
import CardDetail from "./CardDetail";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/firebase"
import Loader from "../Loader/Loader";
import "./cardDetail.css"


function ItemDetailContainer() {
    const [book,setBook] = useState([]);
    const [loading,setLoading]=useState(true);

    /*busca los parametros de la url*/
    const {id} = useParams();

    /*uso useEffect para que se ejecute cada vez que se pida ver el detalle de otro producto (cuando cambia el id)*/
    /*getBookById busca la data del libro que se seleciono para ver el detalle*/
    useEffect(() => {
        getBookById(id).then((data) =>{
            setBook(data);
            setLoading(false);
        });
    },[id]);

  return (
    <div className="main py-1">
        {loading ? <div className="load"><Loader/> </div>: <div className="mb-5"><CardDetail book={book}/></div> } 
    </div>
  )
}

export default ItemDetailContainer