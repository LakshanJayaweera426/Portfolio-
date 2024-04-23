import React from "react";
import './Footer.css'
import footer_logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo}/>
                <p>I'm a fullstack devoloper from Sri Lanka with 6 months of experience in Unify Solutions. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon}/>
                    <input type="email" placeholder="Enter your emal"/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 Lakshan Jayaweera. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer