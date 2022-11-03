import React from "react";
import { useListHabilities } from "../hooks/useListHabilities";
import ListKnowledges from '../components/Knowledges/ListKnowledges';
import "../App.css";
import '../components/Knowledges/Knowledges.css'
function Knowledges() {
  const { habilities } = useListHabilities();
  return (
      <div id="Resumen" className="section-information">
        <h1 className="title-knowledges">Habilidades</h1>
        <ul className="container-knowledges">
          {
            habilities.map((habilitie)=>
            <ListKnowledges habilitie={habilitie}/>
            )
          }
        </ul>
      </div>
  );
}

export default Knowledges;
