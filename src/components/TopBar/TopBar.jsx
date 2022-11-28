import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

function TopBar({ state, changeState }) {
  return (
    <div className={"top-bar " + (state && "active")}>
      <div className="navbar">
        <Link to="/" className={"logo " + (state && "active")}>
          VJB
        </Link>
        <div className="section-right">
          <div onClick={changeState} className="hamburguer-menu ">
            <span className={"line line-1 " + (state && "active")}></span>
            <span className={"line line-2 " + (state && "active")}></span>
            <span className={"line line-3 " + (state && "active")}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
