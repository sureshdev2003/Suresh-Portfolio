import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutImg from "../../Assets/about-us.png";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I fell in love with Web Development, and I’ve learned quite a bit along the way.
              Every project teaches me something new!
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Sofeware Development
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
         <Col
  md={4}
  className="myAvtar d-flex justify-content-center align-items-center"
>
  <Tilt>
    <img
      src={AboutImg}
      className="img-fluid"
      style={{
        height: "400px",
        width: "400px",
        borderRadius: "50%",
        boxShadow: "5px 5px 25px 5px #8a49a8",
        objectFit: "cover",
       
      }}
      alt="avatar"
    />
  </Tilt>
</Col>

        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
