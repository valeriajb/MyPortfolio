import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { init } from "ityped";
import "./Intro.css";
import "../../App.css";
function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web", "Escritorio"],
    });
  }, []);

  return (
    <div className="section-information">
      <div id="Inicio" className="intro-container">
        <div className="intro-left">
          <div className="img-container">
            <img
              src="/assets/Img/PersonIntro.png"
              alt="Imagen Valeria"
              className="img-person"
            />
          </div>
        </div>
        <div className="intro-rigth">
          <span className="span-intro">Hola, soy</span>
          <h1 className="title-name">Valeria Jiménez B</h1>
          <h3 className="text-ocupation">
            Desarrolladora{" "}
            <span className="span-development" ref={textRef}></span>
          </h3>
          <a href="/habilidades" className="next-page">
            <img src="/assets/Img/next.png" alt="" className="img-next" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
