import React from 'react'
import './Menu.css'
function Menu({state,changeStateFalse}) {


  return (
    <div className={"container-menu "+(state && "active")}>
         <ul className={'list-menu '+(state && "active")}>
            <a onClick={changeStateFalse} href="#Inicio" className={'item-menu '+(state && "active")}>Inicio</a>
            <a onClick={changeStateFalse} href="#Habilidades" className={'item-menu '+(state && "active")}>Habilidades</a>
            <a onClick={changeStateFalse} href="#Portafolio" className={'item-menu '+(state && "active")}>Portafolio</a>
            <a onClick={changeStateFalse} href="#Contactos" className={'item-menu '+(state && "active")}>Contactos</a>
        </ul>
    </div>
   
  )
}

export default Menu