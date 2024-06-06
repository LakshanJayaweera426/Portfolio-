import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/myone.jpg'


const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1> --- About Me ---</h1>
            <img src={theme_pattern} alt=""></img>
        </div>
        <div className="about-section">
            <div className="about-left">

                <img src={profile_img}></img>

                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>6+</h1>
                        <p>MONTHS OF EXPERIENCE</p>
                    </div>
                </div>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>Born and raised in Negombo, I am the younger of two siblings. My brother, a dedicated microbiologist, has always been a source of inspiration. My father, a skilled electrician, and my mother, the heart of our household, have instilled in me the values of hard work and compassion.</p>
                    <p>My educational journey began at Harischandra National College, where I successfully completed my O/Ls in 2015. Driven by a thirst for knowledge, I continued my studies at St. Sebastian's College, culminating in the completion of my A/Ls in 2018.</p>
                    <p>In 2021, I embarked on a new chapter, enrolling in the B.Sc. Information and Communication Technology program at the University of Jaffna. Now in my fourth year, I am actively engaged in an internship, gaining valuable practical experience to complement my academic studies.</p>
                    <p>This journey has been one of continuous learning and growth, shaped by the unwavering support of my family and the dedication of my educators. As I look towards the future, I am filled with excitement and anticipation, eager to apply my knowledge and skills to make a meaningful contribution to the world.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <hr/>
                    <div className="about-skill"><p>Python & PHP</p><hr style={{width:"60%"}}/></div> 
                    <div className="about-skill"><p>Django & Node.js</p><hr style={{width:"50%"}}/></div> 
                    <hr/>                 
                    <div className="about-skill"><p>MySQL </p><hr style={{width:"60%"}}/></div> 
                    <div className="about-skill"><p>MongoDB </p><hr style={{width:"60%"}}/></div> 
                </div>
            </div>
        </div>
        
        {/* 
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
        */}
    </div>
  )
}

export default About