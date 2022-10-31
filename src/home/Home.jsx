import React, {useState}from 'react'
import {BarMenuFunction} from '../hooks/useMenuActive'
import Intro from '../components/Intro/Intro'
import './Home.css'
function Home() {
  return (
    <>
     <BarMenuFunction/>
     <Intro/>
    </>
  )
}
export default Home