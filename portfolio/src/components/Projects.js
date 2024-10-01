import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Learnio from "../assets/img/LearnioCaseStudy.png";
import Prototype from "../assets/img/Prototype.png";
import portfolio from "../assets/img/portfolio project.png";
import Rax from "../assets/img/Rax wireframe.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const Webprojects = [
    {
      title: "My Personal Portfolio",
      description:
        "A responsive website built with React to showcase my skills in web development and UI/UX design. Features project highlights, a skills section, and light/dark mode for a user-friendly experience.",
      imgUrl: portfolio,
      githubLink: "https://github.com/Aswinsureshb/My-Portfolio",
      externalLink: "https://aswinsureshb.github.io/My-Portfolio",
    },
    {
      title: "2",
      description: "Design & Development",
      imgUrl: projImg2,
      githubLink: "https://github.com/username/project1",
    },
    {
      title: "3",
      description: "Design & Development",
      imgUrl: projImg3,
      githubLink: "https://github.com/username/project1",
    },
  ];

  const Uxprojects = [
    {
      title: "Rax Wireframe",
      description: "Design & Development",
      imgUrl: Rax,
      externalLink: "https://issuu.com/aswinsureshbabu/docs/desktop_wireframe",
    },
    {
      title: "Case Study for Learnio",
      description: "A Skill Sharing Application",
      imgUrl: Learnio,
      externalLink:
        "https://issuu.com/aswinsureshbabu/docs/case_study_learnio_final..pptx",
    },
    {
      title: "Prototype for Learnio",
      description: "Design & Development",
      imgUrl: Prototype,
      externalLink:
        "https://www.figma.com/proto/8ZOS4r2PizlDUec0kQjy3T/UX-Design?page-id=0%3A1&node-id=49-359&viewport=331%2C318%2C0.11&t=R1WfOBSwwHn8vScF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=49%3A359",
    },
  ];

  const otherProjects = [
    {
      title: "Other Project 1",
      description: "Miscellaneous",
      imgUrl: projImg3,
    },
    {
      title: "Other Project 2",
      description: "Miscellaneous",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Projects</h2>
                  <div className="project-description">
                    <p>
                      Explore my portfolio of front-end, back-end, and UI/UX
                      design projects. From responsive web applications to
                      well-structured back-end systems, each project highlights
                      my ability to deliver user-centered, functional solutions
                      with a seamless design and development approach.
                    </p>
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI/UX Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Other Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {Webprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {Uxprojects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {otherProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
