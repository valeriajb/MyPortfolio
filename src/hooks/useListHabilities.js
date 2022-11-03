import React, { useState } from 'react'

export const habilitiesArray = [
    {
      title: "HTML",
      description:
        "HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto",
      image:"../../assets/Img/html.png"
    },
    {
      title:"CSS",
      description:"Cascading Style Sheets. Lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita",
      image:"../../assets/Img/css.png"
  },
  {
      title:"JAVASCRIPT",
      description:"JavaScript es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás.",
      image:"../../assets/Img/javascript.png"
  },
  {
      title:".NET",
      description:"Plataforma de aplicaciones que permite la creación y ejecución de servicios web y aplicaciones de Internet.",
      image:"../../assets/Img/net.png"
  },
  {
      title:"SQL SERVER",
      description:"sistema de gestión de base de datos relacional,utilizado para manipular y recuperar datos, crear tablas y definir relaciones entre ellas.",
      image:"../../assets/Img/sqlserver.jpg"
  },
  {
      title:"SCRUM",
      description:"Scrum es un marco de trabajo para desarrollo ágil. Es un proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente",
      image:"../../assets/Img/scrum.png"
  }
  
  ];
  
export function useListHabilities() {
    const[habilities,setHabilities]=useState(habilitiesArray)
    return({habilities})
}




