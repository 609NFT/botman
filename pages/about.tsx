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
        <Row>
          <Col>
            <img src="../public/images/"></img>
          </Col>
          <Col>
            <p className="about_p">
              In the concrete jungle of Sotham, where the only thing higher than
              the skyscrapers is the citizens capacity for disbelief, roams a
              hero so unpredictable, hes practically the mascot for Murphys
              Law—turning every crisis into a punchline. Meet Botman: the only
              vigilante who could accidentally turn a stealth mission into a
              viral dance-off challenge. This isnt your garden-variety hero with
              a tragic backstory and a chiseled jawline. Nope, Botman is more
              like if optimism had a lovechild with chaos theory, and then sent
              that child to public school.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="about_p">
              In the concrete jungle of Sotham, where the only thing higher than
              the skyscrapers is the citizens capacity for disbelief, roams a
              hero so unpredictable, hes practically the mascot for Murphys
              Law—turning every crisis into a punchline. Meet Botman: the only
              vigilante who could accidentally turn a stealth mission into a
              viral dance-off challenge. This isnt your garden-variety hero with
              a tragic backstory and a chiseled jawline. Nope, Botman is more
              like if optimism had a lovechild with chaos theory, and then sent
              that child to public school.
            </p>
          </Col>
          <Col>2 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>
            <p className="about_p">
              In the concrete jungle of Sotham, where the only thing higher than
              the skyscrapers is the citizens capacity for disbelief, roams a
              hero so unpredictable, hes practically the mascot for Murphys
              Law—turning every crisis into a punchline. Meet Botman: the only
              vigilante who could accidentally turn a stealth mission into a
              viral dance-off challenge. This isnt your garden-variety hero with
              a tragic backstory and a chiseled jawline. Nope, Botman is more
              like if optimism had a lovechild with chaos theory, and then sent
              that child to public school.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
