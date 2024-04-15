import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className="hero">
        <img src={profile_img} alt=""></img>
        <h1><span>I'm Alex brennet,</span> frontend developer based in USA</h1>
        <p>Google Fonts offers high-quality fonts to use on your web site for free. You can browse, preview, and apply fonts with a simple CSS style, or use the Developer API to query fonts programmatically.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero