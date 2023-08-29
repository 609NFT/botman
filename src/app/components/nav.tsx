import Link from "next/link";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const AppBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Navbar className="navigation" expand="lg">
      <Container>
        <Navbar.Brand>
          <div className="w-22 h-22 main_logo">
            <Link
              href="/"
              rel="noopener noreferrer"
              passHref
              className="text-secondary hover:text-white"
            ></Link>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
