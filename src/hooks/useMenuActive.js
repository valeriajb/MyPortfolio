import { createContext, useContext, useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import Menu from "../components/Menu/Menu";

export function useMenuActive() {
  const [state, setState] = useState(false);

  const changeStateTrue = () => {
    setState(true);
  };
  const changeStateFalse = () => {
    setState(false);
  };

   
  const changeState=()=>{
    (state===false)?changeStateTrue():changeStateFalse()
  }

  return { state, setState, changeStateTrue, changeStateFalse, changeState};
}

export function BarMenuFunction() {
  const stateContext = createContext();
  const { state, changeStateTrue, changeStateFalse,changeState } = useMenuActive();
  return (
    <>
      <stateContext.Provider value={state}>
        <TopBar
          state={state}
          changeStateTrue={changeStateTrue}
          changeStateFalse={changeStateFalse}
          changeState={changeState}
        />
        <Menu state={state} changeStateFalse={changeStateFalse} />
      </stateContext.Provider>
    </>
  );
}
