import React from "react";
import ItemObject from "./ItemObject";
function ListObject({ objects, nameClassList, nameClassItem }) {
  return (
    <ul className={nameClassList}>
      {objects.map((object) => (
        <ItemObject typeObject={object} nameClassItem={nameClassItem} />
      ))}
    </ul>
  );
}

export default ListObject;
