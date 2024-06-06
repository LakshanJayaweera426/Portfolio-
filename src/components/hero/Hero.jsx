import React from "react";
import './Hero.css'
import profile_img from '../../assets/myfour.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
        <img src={profile_img} alt=""></img>
        <h1><span>I'm Lakshan Jayaweera,</span> Fullstack Developer</h1>
        <p>I'm a full-stack developer with a BSc.Information Communication and Technology degree & 1 year of research.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero