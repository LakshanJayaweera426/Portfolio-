import React from "react";
import './Footer.css'
import footer_logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer">
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 Lakshan Jayaweera. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer