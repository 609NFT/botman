import React from "react";
import "../src/app/cave.css";
import Navigation from "../src/app/components/navigation";
import GameModal from "@/app/components/capedCrusader";
import RacerModal from "@/app/components/racer";
import Game1Modal from "@/app/components/game1";
import Game2Modal from "@/app/components/game2";
import { Row, Col, TabContainer } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/app/components/footer";

export default function Play() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      ></link>
      <Navigation></Navigation>
      <TabContainer>
        <Row className="games">
          <Col sm={3}>
            <GameModal></GameModal>
          </Col>
          <Col sm={3}>
            <RacerModal></RacerModal>
          </Col>
          <Col sm={3}>
            <Game1Modal></Game1Modal>
          </Col>
          <Col sm={3}>
            <Game2Modal></Game2Modal>
          </Col>
        </Row>
      </TabContainer>
      {/*<Footer></Footer>*/}
    </div>
  );
}
