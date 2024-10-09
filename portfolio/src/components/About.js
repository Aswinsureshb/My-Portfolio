import React from "react";
import "../App.css";
import myImage from "../assets/img/myimage.png";

// Define the About section as a constant
export const About = () => {
  return (
    <div className="about" id="abouts">
      <div className="title">
        <h2>I am Aswin Sureshbabu</h2>
      </div>
      <div className="aboutcontainer">
        <div className="description">
          <p>
            I'm Aswin Sureshbabu, a passionate web developer and UX/UI designer
            with a strong foundation in programming and database management.
            With a diverse skill set that includes HTML, CSS, Java, Python, and
            Flutter, I thrive in creating intuitive and visually appealing
            digital experiences. My journey in tech began with a deep interest
            in crafting user-centric interfaces, which led me to complete a UX
            Design Bootcamp at BrainStation. Currently, I'm pursuing a Computer
            Programming diploma at Sault College, where I'm honing my skills in
            full-stack development.
            <br />
            <br />
            Throughout my career, I have had the opportunity to work on various
            projects, from developing responsive websites to designing mobile
            applications and managing databases. My experience includes
            interning as a Graphic Design Intern at Rax App Inc., where I
            learned the importance of combining aesthetic design with
            functionality.
            <br />
            <br />
            One of the recent projects I have been working on is a
            location-based social app that helps people connect instantly with
            others in close proximity and reconnect with acquaintances when they
            come near.
            <br />
            <br />
            I am excited to bring my expertise and creativity to new
            challenges, particularly in environment that value innovation,
            user-focused design and development.
          </p>
        </div>
        <div className="about-image">
          <img src={myImage} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

// Export the constant
