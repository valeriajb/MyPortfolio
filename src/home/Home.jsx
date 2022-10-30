import React, {useState}from 'react'
import TopBar from '../components/TopBar/TopBar';
import Menu from '../components/Menu/Menu'
import Intro from '../components/Intro/Intro';
import Knowledges from '../components/Knowledges/Knowledges';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import './Home.css'
import {stateContext} from '../hooks/useMenuActive'
import {useMenuActive} from '../hooks/useMenuActive'
function Home() {
  
  const{state,changeStateTrue,changeStateFalse}=useMenuActive()
  
  return (
    
    <div className='bodyHome'>
      <stateContext.Provider value={state}>
        <TopBar state={state} changeStateTrue={changeStateTrue} changeStateFalse={changeStateFalse} />
        <Menu state={state} changeStateFalse={changeStateFalse}/>
      </stateContext.Provider>
        <div className='section-information'>
          <Intro/>
          <Knowledges/>
          <Skills/>
          <Portfolio/>
          <Contact/>
        </div>
    </div>
    
  )
}
export default Home