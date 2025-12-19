import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiBootstrap,
  DiAndroid,
  
  
  DiGit,
  
} from "react-icons/di";
import {
  SiExpress,
  SiNextdotjs,
 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ width:"100%", justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <DiJavascript1 />
      </Col>
     
      
      <Col xs={4} md={2} style={{ color: "#fff" }}  className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <DiNodejs />
      </Col>
     <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <DiGit />
      </Col>
     <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <DiBootstrap />
      </Col>
        <Col xs={4} md={2} style={{ color: "#fff" }} className="tech-icons">
        <DiAndroid />

      </Col>
      
      
   
    </Row>
  );
}

export default Techstack;
