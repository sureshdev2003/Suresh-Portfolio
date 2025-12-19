import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Profile from "../../Assets/profile.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Project from "../Projects/ProjectHome";
import CertificatesHome from "../Certificates/CertificatesHome";
import Techstack from "../About/Techstack";
import AchivementsHome from "../Achivements/AchivementsHome";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SURESH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

           <Col md={5} className="d-flex justify-content-center align-items-center">
  <div className="glass-profile-box">
    <img
      src={Profile}
      alt="home pic"
      className="glass-profile-img"
    />
  </div>
</Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
      <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
         <Techstack />       
      <Project/>
      <AchivementsHome/>
      <CertificatesHome/>
    </section>
  );
}

export default Home;
