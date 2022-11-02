import React from "react";
import "./ListPortfolio.css";

function ListPorfolio({ id, title, stateList, setChangeList }) {
  return (
    <li
      className={
        stateList ? "item-menu-portfolio active" : "item-menu-portfolio"
      } 
      onClick={() =>{
        setChangeList(id)

      } }
    >
      {title}
    </li>
  );
}

export default ListPorfolio;
