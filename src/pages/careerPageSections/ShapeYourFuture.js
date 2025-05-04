import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import viewPeople from "../../assets/view-people.jpg";

function ShapeYourFuture() {
  return (
    <ShapeYourFutureCss>
      <Container>
        <Row className="shape-your-future">
          <Col xs={12} md={8}>
            <h2>Shape your future with us!</h2>
            <p>
              Join our innovative and dynamic team where creativity meets
              cutting-edge technology. We're passionate about fostering a
              collaborative environment that empowers individuals to grow,
              learn, and make an impact.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src={logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    </ShapeYourFutureCss>
  );
}

export default ShapeYourFuture;

const ShapeYourFutureCss = styled.section`
  height: 350px;
  background-image: url(${viewPeople});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #996e1cdb;
  opacity: 0.76;
  padding: 20px 0;
  filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
    hue-rotate(0deg);

  .col-md-8 {
    align-content: center;
  }
  h2 {
    color: #ffffff;
    font-family: "Manrope", Sans-serif;
    font-size: 1.8em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 10px;
    padding-bottom: 40px;
  }

  p {
    color: #ffffff;
    font-family: "Manrope", Sans-serif;
    font-size: 1em;
    line-height: 1.6em;
    margin-bottom: 2.05em;
  }

  img {
    text-align: center;
  }

  img:hover {
    transform: scale(1.2);
    transition-duration: 0.3s;
    transition-property: transform;
  }
`;
