import { createContext, useContext, useState } from "react";

export const stateContext=createContext()
export function useMenuActive(){
        const [state,setState]=useState(false);

        const changeStateTrue=()=>{
            setState(true)
        }
        const changeStateFalse=()=>{
            setState(false)
        }

        return(
            {state,setState,changeStateTrue,changeStateFalse}
        )
}