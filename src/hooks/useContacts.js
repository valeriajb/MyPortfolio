import { useState } from "react";

const ListContactsArray = [
  {
    title: "Teléfono",
    icon: "../assets/Img/telefonoIcon",
    descr: "+57 315 475 50 12",
    color:"pink"
  },
  {
    title: "Email",
    icon: "../assets/Img/emailIcon",
    descr: "vjimenezbedoya@gmail.com",
    color:"gray"

  },
  {
    title: "Ubicación",
    icon: "../assets/Img/locationIcon",
    descr: "Valle del Cauca - Colombia",
    color:"purple"
  },
];

export function useListContact() {
  const [listContacts, setListContacts] = useState(ListContactsArray);
  return { listContacts };
}
