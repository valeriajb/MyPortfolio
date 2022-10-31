import React, {useState} from 'react'
import './TopBar.css'

function TopBar( {state,changeStateTrue,changeStateFalse,changeState}) {
  return (
      
      <div className={"top-bar " + (state && "active")}>
        <div className="navbar">
          <a href="#Home" className={"logo " + (state && "active")}>VJB</a>
          <div className="section-right">
              <div onClick={changeState}className="hamburguer-menu ">
                <span className={"line line-1 " +  (state && "active")}></span>
                <span className={"line line-2 " +  (state && "active")}></span>
                <span className={"line line-3 " +  (state && "active")}></span>
              </div>
          </div>
        </div>
      </div>
  )
}
export default TopBar