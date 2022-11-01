import React from "react";
import imgeomerce from "../assets/Img/imgeomerce.jpg";
import ListPorfolio from "../components/Portfolio/ListPorfolio";
import { useListPortfolio, useStateList } from "../hooks/useListPortfolio";
import "../components/Portfolio/Portfolio.css";
function Portfolio() {
  const { porfolioList } = useListPortfolio();
  const { selected, setSelected,changeStateId } = useStateList();
  return (
    <div id="Portafolio" className="section-information">
      <h1 className="title-portfolio">Portafolio</h1>
      <ul className="list-menu-portfolio">
        {porfolioList.map((item) => (
          <ListPorfolio 
          id={item.id}
          title={item.title} 
          stateActive={selected===item.id}
          setSelected={setSelected}
        />
        ))}
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
