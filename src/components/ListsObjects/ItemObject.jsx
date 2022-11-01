import React from "react";

function ItemObject({ typeObject, nameClassItem }) {
  const { title, description, image } = typeObject;

  return (
    <div className={nameClassItem}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image}></img>
    </div>
  );
}

export default ItemObject;
