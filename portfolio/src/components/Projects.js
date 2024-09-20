import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Webprojects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      githubLink: "https://github.com/username/project1",
      externalLink: "https://otherproject1.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      githubLink: "https://github.com/username/project1",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      githubLink: "https://github.com/username/project1",
    },
    
  ];

  const Uxprojects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      externalLink: "https://otherproject1.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      externalLink: "https://otherproject1.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      externalLink: "https://otherproject1.com",
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
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <div className="project-description">
                <p>Explore my portfolio of front-end, back-end, and UI/UX design projects. From responsive web applications to well-structured back-end systems, each project highlights my ability to deliver user-centered, functional solutions with a seamless design and development approach.</p>
                </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Webprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {Uxprojects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {otherProjects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
