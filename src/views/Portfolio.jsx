import React from "react";
import imgeomerce from '../assets/Img/imgeomerce.jpg'
import "../components/Portfolio/Portfolio.css";
function Portfolio() {
  return (
    <div id="Portafolio" className="section-information">
      <h1 className="title-portfolio">Portafolio</h1>
      <ul className="list-menu-portfolio">
        <li className="item-menu-portfolio active">Featured</li>
        <li className="item-menu-portfolio ">Web App</li>
        <li className="item-menu-portfolio ">Mobile App</li>
        <li className="item-menu-portfolio ">Design</li>
        <li className="item-menu-portfolio ">Content</li>
      </ul>
      <div className="container-projects">
        <div className="container-project">
          <img className="image-project" src={imgeomerce}></img>
          <h3 className="subtitle-project">Banking pp</h3>
        </div>
        <div className="container-project">
          <img className="image-project" src={imgeomerce}></img>
          <h3 className="subtitle-project">Banking pp</h3>
        </div>
        <div className="container-project">
          <img className="image-project" src={imgeomerce}></img>
          <h3 className="subtitle-project">Banking pp</h3>
        </div>
        <div className="container-project">
          <img className="image-project" src={imgeomerce}></img>
          <h3 className="subtitle-project">Banking pp</h3>
        </div>
        <div className="container-project">
          <img className="image-project" src={imgeomerce}></img>
          <h3 className="subtitle-project">Banking pp</h3>
        </div>
        <div className="container-project">
          <img className="image-project" src={imgeomerce}></img>
          <h3 className="subtitle-project">Banking pp</h3>
        </div>
       
        
      </div>
    </div>
  );
}

export default Portfolio;
