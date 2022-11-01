import React, { useState } from "react";
import { createBuyOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import {useContext} from 'react'
import {cartContext} from '../../context/cartContext'
import Button from "../Button/Button";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import InputForm from "./InputForm";
import "./useform.css"

export default function UserForm() {
  const navigate = useNavigate();
  const {cart,totalPrice,clearCart} =useContext(cartContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: totalPrice(),
      date: new Date(),
    };

    
    createBuyOrder(orderData).then((respuesta) => {
      Swal.fire({
        title: "Compra realizada!",
        text: "Su compra se ha realizado con exito!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        navigate(`/`);
      });
    
    });
  }
  

  return (
    <div className="w-100 d-flex flex-colum justify-content-center pt-5 main">
      <form  className="p-5  card-style d-flex flex-column justify-content-around" onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <Button onClick={()=>clearCart()} type="submit">Finalizar Compra</Button>
     </form>
    </div>
    
  );
}