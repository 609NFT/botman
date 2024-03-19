import React from "react";
import "../src/app/globals.css";
import Navigation from "../src/app/components/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { TabContainer, Row, Col } from "react-bootstrap";
import TokenBalance from "@/app/components/swaps";

export default function Swap() {
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
          <Col sm={12}>
            <TokenBalance tokenMintAddress="2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK" />
          </Col>
        </Row>
      </TabContainer>
      {/*<Footer></Footer>*/}
    </div>
  );
}
