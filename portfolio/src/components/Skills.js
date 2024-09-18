import meter4 from "../assets/img/UIDesign.jpg";
import meter1 from "../assets/img/software engineering.jpg";
import meter2 from "../assets/img/webdesign.jpg";
import meter3 from "../assets/img/webdedvelopment.jpg";
import css from "../assets/img/css.png";
import github from "../assets/img/github.png";
import html from "../assets/img/html.png";
import java from "../assets/img/java.png";
import javascript from "../assets/img/javascript.png";
import mysql from "../assets/img/mysql.png";
import nodejs from "../assets/img/nodejs.png";
import python from "../assets/img/python.png";
import react from "../assets/img/react.png";
import figma from "../assets/img/figma.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillsData = [
    {
      img: meter3,
      title: "Web Development",
      description:
        "Creating responsive and interactive websites using modern web technologies.",
    },
    {
      img: meter2,
      title: "Web Design",
      description:
        "Designing visually appealing and user-friendly web interfaces and modern technologies.",
    },
    {
      img: meter4,
      title: "UI/UX Design",
      description:
        "Focusing on user experience and interface design to ensure user satisfaction.",
    },
    {
      img: meter1,
      title: "Software Engineering",
      description:
        "Applying engineering principles to design, develop, and maintain software.",
    },
  ];

  return (
    <>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills & Expertise</h2>
                <p>
                  I specialize in UI/UX design, web development, and software
                  engineering. My expertise includes designing user-friendly
                  interfaces, developing responsive front-end and back-end
                  applications, and creating seamless digital experiences. 
                  
                  
                  <br />I focus on delivering efficient, user-centered solutions across
                  all aspects of design and development.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  {skillsData.map((skill, index) => (
                    <div className="item" key={index}>
                      <div className="skill-box">
                        <img src={skill.img} alt={`${skill.title} Icon`} />
                        <h5>{skill.title}</h5>
                        <p>{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-image-left"
          src={colorSharp}
          alt="Background"
        />
      </section>

      <div className="expertise">
        <div className="box">
          <img src={css} class="image" />
          <p class="text">CSS</p>
        </div>
        <div className="box">
          <img src={github} class="image" />
          <p class="text">Git</p>
        </div>
        <div className="box">
          <img src={html} class="image" />
          <p class="text">Html</p>
        </div>
        <div className="box">
          <img src={java} class="image" />
          <p class="text">Java</p>
        </div>
        <div className="javascriptbox">
          <img src={javascript} class="javascriptimage" />
          <p class="text">Javascript</p>
        </div>
        <div className="box">
          <img src={mysql} class="image" />
          <p class="text">Mysql</p>
        </div>
        <div className="nodebox">
          <img src={nodejs} class="image" />
          <p class="text">NodeJs</p>
        </div>
        <div className="pythonbox">
          <img src={python} class="pythonimage" />
          <p class="text">Python</p>
        </div>
        <div className="box">
          <img src={react} class="image" />
          <p class="text">React</p>
        </div>
        <div className="box">
          <img src={figma} class="image" />
          <p class="text">Figma</p>
        </div>
      </div>
    </>
  );
};
