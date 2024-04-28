import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="header-title">{props.title}</h1></Col>
        </Row>
    </Container>
  );
}

export default Header;
