import React from "react";
import { useListContact } from '../hooks/useContacts'
import ListContacts from '../components/Contact/ListContacts'
import FormContact from '../components/Contact/FormContact';
import {useStateMessage} from '../hooks/useStateMessage';
import "../components/Contact/Contact.css";

function Contact() {
  const { listContacts} = useListContact()

  return (
    <div id="Contactos" className="section-contact">
      <div className="container-cards">
        {
          listContacts.map((contact)=>
            <ListContacts contact={contact}/>
          )
        }
      </div>
      <div className="form">
        <FormContact />
      </div>
    </div>
  );
}

export default Contact;
