import React from "react";
import Navigation from "../src/app/components/navigation";
import GameModal from "@/app/components/capedCrusader";
import RacerModal from "@/app/components/racer";
import Game1Modal from "@/app/components/game1";
import { Row, Col, TabContainer } from "react-bootstrap";
import "../src/app/cave.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Col sm={4}>
            <GameModal></GameModal>
          </Col>
          <Col sm={4}>
            <RacerModal></RacerModal>
          </Col>
          <Col sm={4}>
            <Game1Modal></Game1Modal>
          </Col>
        </Row>
      </TabContainer>
    </div>
  );
}
