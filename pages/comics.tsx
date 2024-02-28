import React from "react";
import Navigation from "../src/app/components/navigation";
import "../src/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import DownloadPDFButton from "@/app/components/DownloadPDFButton";
import Image from "react-bootstrap";

export default function About() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      ></link>
      <Navigation></Navigation>

      <Container>
        <Row className="about_row align-items-center">
          <Col sm={6}>
            <a href="/images/The_Beginnings.pdf" target="_blank">
              <img className="comics_image" src="/images/1.png"></img>
            </a>
          </Col>
          <Col sm={6}>
            <h2 className="about_header">The Beginnings</h2>
            <DownloadPDFButton
              url="/images/The_Beginnings.pdf"
              fileName="The_Beginnings.pdf"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
