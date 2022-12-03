import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Guests = () => {

  const guestlistFirst = [
    {
      title: "Dr. Sreekumar Pilai",
      description: "Professor of Practice (Marketing & HR), Thapar School of Management, Patiala",
      imgUrl: projImg1,
    },
    {
      title: "Dr. Karminderjit Singh",
      description: "Associate Professor, Entrepreneurship and Sustainability, Marketing, LM Thapar School Management",
      imgUrl: projImg2,
    },
    {
      title: "Prof. (Dr.) A.S. Arora",
      description: "Ex-Dean Academics, SLIET Longowal Professor, Electrical & Instrumental Department",
      imgUrl: projImg3,
    },
    {
      title: "Prof. Siddaq P. Singh",
      description: "Instructor & Facilitator, Sustainability in Practice, LM Thapar School of Managemnt",
      imgUrl: projImg1,
    },
    {
      title: "Amit Raje",
      description: "Chairman & Managing Director, Aartech Solonics",
      imgUrl: projImg2,
    },
    {
      title: "Dr. Parmjit S. Panesar",
      description: "Professor, Department of Food Engineering & Technology, SLIET Longowal",
      imgUrl: projImg3,
    },
  ];

  const guestlistSecond = [
    {
      title: "Porf. Sukhcharan Singh",
      description: "Professor, Department of Food Engineering & Technology, SLIET Longowal",
      imgUrl: projImg1,
    },
    {
      title: "Sh. Awesh Jain",
      description:"Vice President Projects, Emamin Agrotech Ltd.",
      imgUrl: projImg2,
    },
    {
      title: "Dr. Indraj Singh",
      description: "Associate Professor, Mechanical Engineering Department, SLIET Longowal Certified Energy Auditor, Ministry of Power, Government of India",
      imgUrl: projImg3,
    },
    {
      title: "Dr. Amit Rai",
      description: "Assistant Professor, Department of Chemical Engineering & Technology, SLIET Longowal",
      imgUrl: projImg1,
    },
    {
      title: "Dr. Ram Pal Chaudhary",
      description: "Professor, Department of Chmistry, SLIET Longowal",
      imgUrl: projImg2,
    },
    {
      title: "Prof. (Dr.) R.K. Mishra",
      description: "Program Coordinator, Entrepreneurship Development Program, Ex-Head, Training & Placement Department SLIET Longowal Professor, Mathematics Department SLIET Longowal",
      imgUrl: projImg3,
    },
  ];

  const guestlistThird = [
    {
      title: "Dr. Sreekumar Pilai",
      description: "Professor of Practice (Marketing & HR), Thapar School of Management, Patiala",
      imgUrl: projImg1,
    },
    {
      title: "Dr. Karminderjit Singh",
      description: "Associate Professor, Entrepreneurship and Sustainability, Marketing, LM Thapar School Management",
      imgUrl: projImg2,
    },
    {
      title: "Prof. (Dr.) A.S. Arora",
      description: "Ex-Dean Academics, SLIET Longowal Professor, Electrical & Instrumental Department",
      imgUrl: projImg3,
    },
    {
      title: "Prof. Siddaq P. Singh",
      description: "Instructor & Facilitator, Sustainability in Practice, LM Thapar School of Managemnt",
      imgUrl: projImg1,
    },
    {
      title: "Amit Raje",
      description: "Chairman & Managing Director, Aartech Solonics",
      imgUrl: projImg2,
    },
    {
      title: "Dr. Parmjit S. Panesar",
      description: "Professor, Department of Food Engineering & Technology, SLIET Longowal",
      imgUrl: projImg3,
    },
  ];




  return (
    <section className="project" id="alumni">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Speakers</h2>
                <p>We have Prominent list of Speakers from variour organizations and colleges for Entrepreneurship Development Program(EDP) Fellows.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">List 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">List 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">List 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          guestlistFirst.map((project, index) => {
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
                        {
                          guestlistSecond.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          guestlistThird.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroundImg"></img>
    </section>
  )
}
