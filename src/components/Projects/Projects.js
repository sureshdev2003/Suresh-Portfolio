import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Food Ordering Website"
              description="A modern food ordering website designed with a clean and responsive UI.
              Built using React.js for fast performance and smooth user interaction.
              Users can browse menus, view delicious dishes, and explore restaurant details.
              A visually appealing frontend experience that brings food cravings to life!"
              ghLink="https://github.com/sureshdev2003/food-website"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Football Score App"
              description="A dynamic Football Score App built with React.js for real-time score tracking.
              Uses Local Storage to save match data and user updates without a backend.
              Simple, fast, and interactive interface to manage team scores easily.
              Perfect for local matches, practice games, or friendly tournaments."
              ghLink="https://github.com/sureshdev2003/football-scorecard-app"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Prepalyze"
              description="Prepalyze is an online exam portal designed for NEET and JEE aspirants.
              It provides a smooth, responsive interface built with modern frontend technologies.
              Students can take mock tests, track their performance, and analyze results easily.
              Empowering learners to prepare smarter with an interactive and user-friendly platform."
            
             demoLink="https://blogs.soumya-jit.tech/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
