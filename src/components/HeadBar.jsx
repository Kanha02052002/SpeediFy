import React from "react";
import Profile from "../assets/icons/profile (1).png";
import External from "../assets/icons/external.png";

export default function HeadBar() {
  function portfolio() {
    window.location.href =
      "https://kanha02052002.github.io/first-student-portfolio/";
  }

  function sourceCodelink() {
    window.location.href =
      "https://github.com/Kanha02052002/SpeediFy";
  }
  
  return (
    <div className="mainSection">
      <img
        className="profile"
        onClick={portfolio}
        src={Profile}
        alt=""
        title="Portfolio Website"
      />
      <div className="navbar">
        <div className="linkage">
          <a
            className="anchor"
            title="LinkedIn"
            href="https://www.linkedin.com/in/kanha-khantaal-829302258/"
          >
            LinkedIn
          </a>
          <a className="anchor" title="Github" href="https://github.com/">
            Github
          </a>
          <a
            className="anchor"
            title="Coursera"
            href="https://www.coursera.org/"
          >
            Coursera
          </a>
          <a className="anchor" title="Figma" href="https://www.figma.com/">
            Figma
          </a>
          <a
            className="anchor"
            title="Whatsapp"
            href="https://web.whatsapp.com/"
          >
            Whatsapp
          </a>
          <a
            className="anchor"
            title="Youtube "
            href="https://www.youtube.com/"
          >
            Youtube
          </a>
        </div>
      </div>
      <span className="sourceCode" onClick={sourceCodelink} title="Get the Source Code">
        <span className="material-symbols-outlined">code</span>
      </span>
    </div>
  );
}
