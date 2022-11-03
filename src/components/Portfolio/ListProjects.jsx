import React from "react";
import './ListProjects.css'
function ListProjects({date}) {
    const{img,title}=date
  return (
    <div className="container-project">
      <img className="image-project" src={img}></img>
      <h3 className="subtitle-project">{title}</h3>
    </div>
  );
}

export default ListProjects;
