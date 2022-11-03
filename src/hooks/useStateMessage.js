import { useState } from "react";

export function useStateMessage(){
    const  [stateMessage,setStateMessage]=useState(false)

    const setTrueMessage=()=>{
        setStateMessage(true)
    }
    const setFalseMessage=()=>{
        setStateMessage(false)
    }
    const changeState=()=>{
        stateMessage?setFalseMessage():setTrueMessage()
    }

    return( 
        {stateMessage,changeState}
    )


}