import React from "react";
import "../src/app/globals.css";
import Navigation from "../src/app/components/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { TabContainer, Row, Col } from "react-bootstrap";
import DownloadPDFButton from "@/app/components/DownloadPDFButton";
import Image from "react-bootstrap";
import AudioToggle from "@/app/components/audio";
import Footer from "@/app/components/footer";
import FlashlightEffect from "@/app/components/FlashlightEffect";

export default function About() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      ></link>
      {/*<FlashlightEffect></FlashlightEffect>*/}
      <Navigation></Navigation>
      {/*<AudioToggle></AudioToggle>*/}
      <TabContainer>
        <Row className="about_row align-items-center">
          <Col sm={6}>
            <a href="/images/The_Beginnings.pdf" target="_blank">
              <img
                className="comic_book"
                src="/images/the_beginnings.svg"
              ></img>
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
      </TabContainer>
      {/*<Footer></Footer>*/}
    </div>
  );
}
