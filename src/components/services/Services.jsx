import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import img1 from "../../assets/research1.png";
import img2 from "../../assets/research2.png";
import img3 from "../../assets/research3.png";
import img4 from "../../assets/research4.png";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>--- Research ---</h1>
        <img src={theme_pattern} />
      </div>

      <div className="research-container">
        <div className="research-container-week">
          <a
            href="https://sites.google.com/view/lakshan-jayaweera-77/updates/week-01"
            target="_blank"
          >
            <img src={img1} alt="Full stack ecommercial application" />
          </a>
          <div className="research-description">
            <p>
              We discussed our research concept with our supervisors and
              received preliminary feedback.
              <br />
              We looked across research papers and publications on road traffic
              sign detection.
              
            </p>
          </div>
        </div>

        <div className="research-container-week">
          <a
            href="https://sites.google.com/view/lakshan-jayaweera-77/updates/week-02"
            target="_blank"
          >
            <img src={img2} alt="Full stack ecommercial application" />
          </a>
          <div className="research-description">
            <p>
              We discussed whether there is a particular issue we would like to
              investigate. Object detection, picture categorization, or
              real-time application on self-driving vehicles? 
            </p>
          </div>
        </div>

        <div className="research-container-week">
          <a
            href="https://sites.google.com/view/lakshan-jayaweera-77/updates/week-03"
            target="_blank"
          >
            <img src={img3} alt="Full stack ecommercial application" />
          </a>
          <div className="research-description">
            <p>
              We watched a few YouTube videos to learn about road traffic sign
              detection and how to create a traffic sign detection model.
            </p>
          </div>
        </div>

        <div className="research-container-week">
          <a
            href="https://sites.google.com/view/lakshan-jayaweera-77/updates/week-04"
            target="_blank"
          >
            <img src={img4} alt="Full stack ecommercial application" />
          </a>
          <div className="research-description">
            <p>
              I sought for traffic signs on the route and took over 1000 photos.
            </p>
          </div>
        </div>
      </div>

        
      <div className="services-showmore">
        <p>
          <a
            href="https://sites.google.com/view/lakshan-jayaweera-77/home"
            target="_target"
          >
            Show More
          </a>
        </p>
        <img src={arrow_icon} />
      </div>
    </div>
  );
};

export default Services;
