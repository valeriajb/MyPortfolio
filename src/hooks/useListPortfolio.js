import React, { useState } from 'react'

export const listPortfolio = [
    {
        id: "featured",
        title: "Featured"
    },
    {
        id: "webApp",
        title: "Web App"
    },
    {
        id: "mobileapp",
        title: "Mobile App"
    },
    {
        id: "design",
        title: "Design"
    },
    {
        id: "content",
        title: "Content"
    }
]

export function useListPortfolio() {
    const [porfolioList,setPorfolioList]=useState(listPortfolio);
    return({porfolioList,setPorfolioList}) //Importante las llaves a la hora de retornar, ya sean funciones o variables.
}

export function useStateList(listPortfolio){
    const [selected,setSelected]=useState("webApp")
    
    return({selected,setSelected,})
}

