import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import "./style.css";
class shoes extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Whould you like to do??</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Link style={{ float: "left" }} to="/Trade/:id">
          {" "}
          Trade
        </Link>
        <Link style={{ float: "right" }} to="/donate">
          {" "}
          Donate
        </Link>
      </Container>
    );
  }
}

export default shoes;