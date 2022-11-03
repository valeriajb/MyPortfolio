import React from "react";
import {useStateMessage} from '../../hooks/useStateMessage';
import "./FormContact.css";

function FormContact() {
  const {stateMessage,changeState}=useStateMessage()
  return (
    <>
      <form className="container-form">
        <h2 className="form-title">Contacto</h2>
        <input type="email" className="email-form" placeholder="Tu correo" />
        <textarea  className="text-form" placeholder="Tu mensaje"></textarea>
        <button onClick={
            (e)=>{
              e.preventDefault()
              changeState()

            }



        } className="button-form">Enviar</button>
        <span className={'message-send '+(stateMessage && "active")}>Gracias, te responderé pronto</span>
      
      
      
      
      </form>
    </>
  );
}

export default FormContact;
