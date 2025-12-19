import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
const ProjectHome = () => {
  return (
    <div><Container fluid className="project-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
              My Recent <strong className="purple">Works </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few projects I've worked on recently.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={chatify}
                  isBlog={false}
                  title="E-Commerce"
                  description="Our e-commerce platform is powered by the MERN stack for speed and reliability.
                  Enjoy a smooth shopping experience with a modern, responsive interface.
                  Secure user authentication and real-time data ensure safe, seamless transactions.
                  Built for performance shop smarter with next-gen technology!"
                  ghLink="https://github.com/sureshdev2003/E-commerce-Mern"
                  // demoLink="https://chatify-49.web.app/"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title="Village Complaint Management System"
                  description="The Village Complaint System is a digital platform for residents to report local issues easily.
                  Built using the MERN stack, it ensures fast, transparent, and secure complaint handling.
                  Villagers can track their complaints in real-time and receive timely updates.
                  Empowering rural communities with technology for better governance and quick solutions"
                  ghLink="https://github.com/sureshdev2003/Village-Complaint-Application"
                  
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={editor}
                  isBlog={false}
                  title="Tailor Website"
                  description="Our Tailor Management System makes custom clothing orders simple and efficient.
                  Built with the MERN stack, it offers smooth performance and secure user access.
                  Customers can place orders, choose designs, and track progress online.
                  Bringing traditional tailoring into the digital era with modern technology."
                  ghLink="https://github.com/sureshdev2003/tailer-web-application"
                  // demoLink="https://editor.soumya-jit.tech/"
                />
              </Col>
            </Row>

            <Button variant="primary" href="/project" style={{marginTop:"20px"}}>View More Projects</Button>
          </Container>
        </Container>
          </div>
  )
}

export default ProjectHome