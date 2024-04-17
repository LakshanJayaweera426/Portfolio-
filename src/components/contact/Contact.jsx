import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern}/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>paragraph.... ........... ................ ................. ............ ..... </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon}/><p>abcd@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon}/><p>011 22 55 458</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon}/><p>No: 55/a/2 High level Rd, Nugegoda</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name </label>
                <input type="text" placeholder="Your name" name="name"/>
                <label htmlFor="">Your Email </label>
                <input type="email" placeholder="Your email" name="email"/>
                <label htmlFor="">Your message </label>
                <textarea name="msg" rows="8" placeholder="Your message"></textarea>
                <button type="submit" className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact