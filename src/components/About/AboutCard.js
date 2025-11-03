import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suresh </span> from <span className="purple"> Tirunelveli, India.</span>
            <br />
            I am currently employed as a Full Stack developer at Indalxyo Solution.
            <br />
            I have completed Integrated MSc in ComputerScience at St.john's College,
            Palayamkottai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you can, do it .
If you can’t, keep practicing until you can "{" "}
          </p>
          <footer className="blockquote-footer">Suresh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
