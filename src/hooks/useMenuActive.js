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

  return { state, setState, changeStateTrue, changeStateFalse };
}

export function BarMenuFunction() {
  const stateContext = createContext();
  const { state, changeStateTrue, changeStateFalse } = useMenuActive();
  return (
    <>
      <stateContext.Provider value={state}>
        <TopBar
          state={state}
          changeStateTrue={changeStateTrue}
          changeStateFalse={changeStateFalse}
        />
        <Menu state={state} changeStateFalse={changeStateFalse} />
      </stateContext.Provider>
    </>
  );
}
