import React from "react";
import { useListHabilities } from "../hooks/useListHabilities";
import "../App.css";
function Knowledges() {
  const { habilities } = useListHabilities();
  return (
      <div id="Resumen" className="section-information">
        Holaaa
      </div>
  );
}

export default Knowledges;
