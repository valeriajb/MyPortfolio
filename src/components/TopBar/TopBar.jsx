import React, {useState} from 'react'
import {useMenuActive} from '../../hooks/useMenuActive';
import Menu from '../Menu/Menu'
import './TopBar.css'

function TopBar( {state,changeStateTrue,changeStateFalse}) {
  
  const changeState=()=>{
    (state===false)?changeStateTrue():changeStateFalse()
  }
  
  return (
    
      <>
      <div className={"top-bar " + (state && "active")}>
        <div className="navbar">
          <a href="#" className={"logo " + (state && "active")}>VJB</a>

          <div className="section-right">
              <div onClick={changeState}className="hamburguer-menu ">
                <span className={"line line-1 " +  (state && "active")}></span>
                <span className={"line line-2 " +  (state && "active")}></span>
                <span className={"line line-3 " +  (state && "active")}></span>
              </div>
              
          </div>
        </div>
      </div>
    </>
    
  )
}

export default TopBar