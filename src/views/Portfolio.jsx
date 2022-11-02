import React, { useEffect } from "react";
import { useDatePorfolio } from "../hooks/useDatesPorfolio";

import {
  useListPortfolio,
  useChangeStateList,
} from "../hooks/useListPortfolio";
import ListPortfolio from "../components/Portfolio/ListPorfolio";
import "../components/Portfolio/Portfolio.css";

function Portfolio() {
  const { listPortfolio } = useListPortfolio();
  const { changeList, setChangeList } = useChangeStateList("featured");
  const {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio,datePortfolio,setDatePorfolio} = useDatePorfolio();
 
  useEffect(() => {
    switch (changeList) {
      case "featured":
        setDatePorfolio(featuredPortfolio);
        break;
      case "webApp":
        setDatePorfolio(webPortfolio);
        break;
      case "mobileapp":
        setDatePorfolio(mobilePortfolio);
        break;
      case "design":
        setDatePorfolio(designPortfolio);
        break;
      case "content":
        setDatePorfolio(contentPortfolio);
        break;
      default: setDatePorfolio(featuredPortfolio);
      break;

    }
  }, [changeList]);
  return (
    <div id="Portafolio" className="section-information">
      <h1 className="title-portfolio">Portafolio</h1>
      <ul className="list-menu-portfolio">
        {listPortfolio.map((item) => (
          <ListPortfolio
            id={item.id}
            title={item.title}
            stateList={changeList === item.id}
            setChangeList={setChangeList}
          />
        ))}
      </ul>
      <div className="container-projects">
        {datePortfolio.map((d) => (
          <div className="container-project">
            <img className="image-project" src={d.img}></img>
            <h3 className="subtitle-project">{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
