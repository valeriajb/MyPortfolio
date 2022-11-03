import React from 'react'
import '../Knowledges/ListKnowledges.css'
function ListKnowledges({habilitie}) {
    const {title,description,image}=habilitie
  return (
    <div className='container-knowledge'>
        <h2 className='subtitle-knowledges'>{title}</h2>
        <img className="image-knowledges" src={image}></img>
    </div>
  )
}

export default ListKnowledges