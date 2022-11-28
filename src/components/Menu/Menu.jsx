import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
function Menu({ state, changeStateFalse }) {
  return (
    <div className={"container-menu " + (state && "active")}>
      <ul className={"list-menu " + (state && "active")}>
        <Link
          onClick={changeStateFalse}
          to="/"
          className={"item-menu " + (state && "active")}
        >
          Inicio
        </Link>
        <Link
          onClick={changeStateFalse}
          to="/habilidades"
          className={"item-menu " + (state && "active")}
        >
          Habilidades
        </Link>
        <Link
          onClick={changeStateFalse}
          to="/portfolio"
          className={"item-menu " + (state && "active")}
        >
          Portafolio
        </Link>
        <Link
          onClick={changeStateFalse}
          to="/contact"
          className={"item-menu " + (state && "active")}
        >
          Contactos
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
