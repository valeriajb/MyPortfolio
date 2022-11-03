import React from 'react'
import './ListContact.css'
function ListContacts({contact}) {
    const{title,icon,descr,color}=contact
    return (
      <div className='container-card' >
          <img src={icon} className="image-card"></img>
          <div className="content-card">
            <h3 className="title-card">{title}</h3>
            <p className="description-card">{descr}</p>
          </div>
        </div>
    )
}

export default ListContacts