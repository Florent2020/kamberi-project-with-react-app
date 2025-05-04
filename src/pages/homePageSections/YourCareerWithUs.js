import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import yourCareer from "../../assets/your-career-with-us.png";

function YourCareerWithUs() {
  return (
    <YourCareerWithUsCss>
      <Container fluid>
        <Row className="your-career-with-us">
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            <img src={logo} alt="logo" />
          </Col>
          <Col xs={12} md={4}>
            <h2>Your career with us</h2>
            <p>Growing together.</p>
            <button type="button">Apply Now!</button>
          </Col>
        </Row>
      </Container>
    </YourCareerWithUsCss>
  );
}

export default YourCareerWithUs;

const YourCareerWithUsCss = styled.section`
  height: 450px;
  background-image: url(${yourCareer});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  .your-career-with-us {
    div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      align-items: anchor-center;
      padding-top: 20px;
    }
    img {
      width: 100px;
    }

    div:last-of-type {
      height: 450px;
      background-color: #cc922585;
      border-radius: 450% 0% 0% 450%;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: center;
      padding-left: 100px;

      h2 {
        color: #000000;
        font-family: "Montserrat", Sans-serif;
        font-size: 21px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 100;
      }

      p {
        color: #ffffff;
        font-family: "Public Sans", Sans-serif;
        font-size: 57px;
        line-height: 1.1;
        letter-spacing: 2px;
        margin-bottom: 55px;
      }

      button {
        background-color: #00000000;
        font-family: "Montserrat", Sans-serif;
        font-size: 15px;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #ffffff;
        padding: 15px 40px;
        border-radius: 25px;
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }
`;
