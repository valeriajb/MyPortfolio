import React from "react";
import "./ListPortfolio.css";

function ListPorfolio({ id, title, stateActive, setSelected }) {
  return (
    <li
      className={
        stateActive ? "item-menu-portfolio active" : "item-menu-portfolio"
      }
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default ListPorfolio;
