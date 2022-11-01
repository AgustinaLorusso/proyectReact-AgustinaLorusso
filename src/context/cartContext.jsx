import {createContext,useState } from "react";

const cartContext=createContext();

function CartContextProvider(props) {
    const [cart,setCart]=useState([]);

    /*funcion de agregar al carrito*/
    function addItemToCart(item,count){
        /*copia el array*/
        let newCart= [...cart];
        /*Agrega la propiedad cantidad al objeto(donde esta guardado todos los datos del producto)*/
        let newItem={...item,count}
        /*Agrega el objeto a al carrito*/
        newCart.push(newItem)
        /*guarda carrito modificado en un estado*/
        setCart(newCart)

    }

    /*funcion de eliminar de carrito*/
    function deleteFromCart(idToDelete){
        
        /*Nuevo array con objetos que no tienen el id del elemento que se quiere elimiar*/
        let newCart =cart.filter((item)=>item.id!==idToDelete);
        setCart(newCart);
    }

    function countItemsOnCart(){
        let total=0;
        cart.forEach((item)=>{
            total = total + item.count;
        });
        return total;
    
    }

    function totalPrice(){
        let total=0;
        cart.forEach((item)=>{
            total = total + (item.price*item.count);
        });
        return total;
    }

    function isInCart(cart,id){
        return cart.some((arr) => id === arr.id);
    }

    function clearCart(){
        return setCart([])
    }

  return (
    <cartContext.Provider value={{cart,addItemToCart,deleteFromCart,countItemsOnCart,totalPrice,isInCart,clearCart}}>
        {props.children}
    </cartContext.Provider>
  )
}

export {cartContext,CartContextProvider}