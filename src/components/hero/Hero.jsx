import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
        <img src={profile_img} alt=""></img>
        <h1><span>I'm Alex brennet,</span> frontend developer based in USA</h1>
        <p>Google Fonts offers high-quality fonts to use on your web site for free. You can browse, preview, and apply fonts with a simple CSS style, or use the Developer API to query fonts programmatically.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero