import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import img1 from "../../assets/mywork1.png";
import img2 from "../../assets/mywork2.png";
import img3 from "../../assets/mywork3.jpg";
import img4 from "../../assets/mywork4.jpg";
import img5 from "../../assets/mywork5.jpg";
import img6 from "../../assets/mywork6.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Works</h1>
        <img src={theme_pattern} />
      </div>
      <div className="mywork-container">
        <div className="mywork-container-project">
          <a
            href="https://github.com/LakshanJayaweera426/Full-Stack-E-commerce-web-aplication-with-MERN"
            target="_blank"
          >
            <img src={img2} alt="Full stack ecommercial application" />
          </a>
          <div className="mywork-description">
            <p>
              Created a full-stack e-commerce website with MERN (React, MongoDB,
              Express, and Node.js). React handles the frontend (products, cart,
              and login/registration). The backend (Express, Node.js, MongoDB)
              manages product data via APIs that enable CRUD (Create, Read,
              Update, and Delete) actions on products and carts, as well as user
              authentication.
            </p>
            <div className="mywork-tags">
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>Javascript</h4>
              <h4>React js</h4>
              <h4>Node js</h4>
              <h4>Express js</h4>
              <h4>Mongo db</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="mywork-container-project">
        <a
          href="https://github.com/LakshanJayaweera426/Full-Stack-Food-Delivery-Application-with-MERN"
          target="_blank"
        >
          <img src={img6} alt="E-commercial web application (front end)" />
        </a>
        <div className="mywork-description">
          <p>
            I created food delivery web application (front-end) using React
            js.Shopping cart functionality so that user can add food items in
            their cart and order food from this app. (Front-end)
          </p>
          <div className="mywork-tags">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
            <h4>React js</h4>
          </div>
        </div>
      </div>

      <div className="mywork-container-project">
        <a
          href="https://github.com/LakshanJayaweera426/Ecommerce-Web-Application"
          target="_blank"
        >
          <img src={img3} alt="E commercial web application" />
        </a>
        <div className="mywork-description">
          <p>
            I built an Ecommerce web application using the Django framework.
            There's some functionalitis. Cart, Wishlist, Payment Gateway, and
            Login Authentication.
          </p>
          <div className="mywork-tags">
            <h4>Python</h4>
            <h4>Django</h4>
          </div>
        </div>
      </div>

      <div className="mywork-container-project">
        <a
          href="https://github.com/LakshanJayaweera426/Student-Registration-System"
          target="_blank"
        >
          <img src={img5} alt="Student registration system" />
        </a>
        <div className="mywork-description">
          <p>
            This is a web application system. Students can utilise this to
            register at the university online. I used HTML, CSS, and JS for
            frontend development and PHP for backend development. I used
            Bootstrap for the framework and MySQL for the database.
          </p>
          <div className="mywork-tags">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
            <h4>PHP</h4>
            <h4>Bootstrap</h4>
          </div>
        </div>
      </div>

      <div className="mywork-container-project">
        <a
          href="https://github.com/LakshanJayaweera426/Weather-Application"
          target="_blank"
        >
          <img src={img1} alt="Weather application" />
        </a>
        <div className="mywork-description">
          <p>
            A weather app for a website built with HTML, CSS, and JavaScript. We
            will display current weather data from Fess API and OpenWeatherMap
            on our website or app, including temperature, weather conditions,
            humidity, and wind speed based on the city.
          </p>
          <div className="mywork-tags">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </div>
        </div>
      </div>

      <div className="mywork-showmore">
        <p>
          <a href="https://github.com/LakshanJayaweera426" target="self">
            Show More
          </a>
        </p>
        <img src={arrow_icon} />
      </div>
    </div>
  );
};

export default MyWork;
