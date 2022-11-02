import React, { useState } from 'react'

export const ListPortfolio = [
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


export function useListPortfolio(){
    const [listPortfolio,setListPorfolio]=useState(ListPortfolio)
    return(
        {listPortfolio}
    )
}

export function useChangeStateList(){
    const [changeList,setChangeList]=useState()
    return({changeList,setChangeList})
}

