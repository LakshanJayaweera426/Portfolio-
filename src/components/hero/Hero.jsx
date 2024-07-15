import React from "react";
import "./Hero.css";
import profile_img from "../../assets/myfive.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt=""></img>
      <h1>
        <span>I'm Lakshan Jayaweera,</span> Front-end Developer
      </h1>
      <p>
        I'm a frontend developer with a BSc (Hons) in Information Communication
        and Technology degree and one year of research.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-connect">
          <a href="https://drive.google.com/file/d/1BkP3Kv27Njb63YqAMFNKZq7fmp158o4t/view?usp=sharing" target="_blank">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
