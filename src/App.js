import React from "react";

import Home from "./home/Home";
import Knowledges from "./views/Knowledges";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import { BarMenuFunction } from "./hooks/useMenuActive";
import { Route, Routes } from "react-router-dom";


function App() {
   return (
     <>
        <BarMenuFunction />
       <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/habilidades" element={<Knowledges />} />
         <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
       </Routes> 
      
     </>
   );
 }

export default App;
