import React from "react";
import Navigation from "../src/app/components/navigation";
import "../src/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
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
        <Row className="about_row">
          <Col>
            <img className="about_image" src="/images/sotham.png"></img>
          </Col>
          <Col>
            <p className="about_p">
              Renowned for its avant-garde approach to the integration of
              digital currency into every facet of daily life, Sotham has become
              synonymous with innovation. From the way its residents transact
              for basic necessities to the groundbreaking startups that line its
              bustling streets, the city breathes a culture of advancement and
              opportunity. Yet, beneath its glittering surface, Sotham embodies
              the dual nature of any great endeavor: the promise of monumental
              success shadowed closely by the risk of profound loss.
            </p>
          </Col>
        </Row>
        <Row className="about_row">
          <Col>
            <p className="about_p">
              CityTech is Sothams News Network that operates on the cutting
              edge, a 24/7 operation that broadcasts a continuous stream of
              data, news, and analysis directly into the homes and devices of
              Sothams residents.<br></br>
              <br></br>With programming that ranges from breaking news and live
              event coverage to in-depth discussions on market trends, CityTech
              is the digital town square of Sotham. It serves as a critical
              platform for announcements from the crypto industrys giants,
              updates on the latest investment opportunities, and spotlights on
              promising startups poised to become the next behemoths of the
              blockchain world.
            </p>
          </Col>
          <Col>
            <img className="about_image" src="/images/ctnn.png"></img>
          </Col>
        </Row>
        <Row className="about_row">
          <Col>
            <img className="about_image" src="/images/lunasol.png"></img>
          </Col>
          <Col>
            <p className="about_p">
              The arrival of LunarSol in Sotham was heralded as the dawn of a
              new era in digital finance, capturing the citys collective
              imagination and promising to redefine the cryptocurrency landscape
              with its pioneering blockchain technology. However, the glittering
              promise of LunarSol culminated in an event that would forever
              alter the course of Sothams history. In an unforeseen betrayal,
              the company orchestrated a devastating rug pull, disappearing into
              the ether with over $220 million of invested capital. This seismic
              event sent shockwaves throughout Sotham, leaving a scar on the
              citys psyche that still remains to this day. The LunarSol debacle
              became the defining moment for countless individuals, marking a
              before and after in the citys relationship with digital finance.
              To this day, the architects behind LunarSols grand deception
              remain at large, their identities shrouded in mystery and their
              actions a dark cloud hanging over Sotham, serving as a constant
              reminder of the fragility of trust in the digital age.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
