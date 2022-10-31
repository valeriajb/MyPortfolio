import React, { useEffect, useRef } from "react";
import next from "../../assets/Img/next.png";
import PersonIntro from "../../assets/Img/PersonIntro.png";
import { init } from "ityped";
import "./Intro.css";
import "../../App.css";
function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [ "Web", "Desktop" ],
    });
  });

  return (
    <div className="section-information">
      <div id="Inicio" className="intro-container">
        <div className="intro-left">
          <div className="img-container">
            <img src={PersonIntro} alt="" className="img-person" />
          </div>
        </div>
        <div className="intro-rigth">
          <span className="span-intro">Hola, soy</span>
          <h1 className="title-name">Valeria Jiménez B</h1>
          <span className="text-ocupation">
            Desarrolladora <span ref={textRef} className="span-development"></span>
          </span>
          <a href="#" className="next-page">
            <img src={next} alt="" className="img-next" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
