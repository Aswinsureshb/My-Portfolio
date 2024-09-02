import meter4 from "../assets/img/UIDesign.jpg";
import meter1 from "../assets/img/software engineering.jpg";
import meter2 from "../assets/img/webdesign.jpg";
import meter3 from "../assets/img/webdedvelopment.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillsData = [
    {
      img: meter3,
      title: "Web Development",
      description: "Creating responsive and interactive websites using modern web technologies."
    },
    {
      img: meter2,
      title: "Web Design",
      description: "Designing visually appealing and user-friendly web interfaces and modern technologies."
    },
    {
      img: meter4,
      title: "UI/UX Design",
      description: "Focusing on user experience and interface design to ensure user satisfaction."
    },
    {
      img: meter1,
      title: "Software Engineering",
      description: "Applying engineering principles to design, develop, and maintain software."
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
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
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}