import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OurValues() {
  return (
    <Values>
      <Container>
        <h2>Our values</h2>
        <Row>
          <Col xs={12} md={4}>
            <span className="values-number">1</span>
            <h4>Integrity</h4>
            <p>
              We define integrity as honest, fair, and loyal behavior toward the
              company and our colleagues. Goals can only be achieved together,
              making it all the more important that everyone pulls together. The
              Kamberi Group is committed to always behaving with integrity
              toward its employees.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <span className="values-number">2</span>
            <h4>Teamwork</h4>
            <p>
              At the Kamberi Group, all employees should work together and act
              in the interests of the company's development. All subsidiaries
              should support each other wherever possible, and the same applies
              to the employees. There should be no competition, but rather a
              spirit of cooperation.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <span className="values-number">3</span>
            <h4>Open Communication</h4>
            <p>
              Understanding and open communication are important to us; problems
              and challenges should always be addressed openly. This is the only
              way to find a productive solution. For us, open communication also
              means always addressing the right contact person. This is the only
              way to maintain a pleasant working atmosphere.
            </p>
          </Col>
        </Row>
      </Container>
    </Values>
  );
}

const Values = styled.section`
  position: relative;
  padding: 50px 0;

  h2 {
    color: #202123;
    font-family: "Manrope", Sans-serif;
    text-align: center;
    padding-bottom: 50px;
    font-size: 1.8em;
    font-weight: 900;
    text-transform: none;
    line-height: 1.3em;
    letter-spacing: 8px;
  }

  .col-md-4,
  .col-12 {
    padding: 30px;
  }

  .values-number {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(0, 0, 0, 0.11);
    font-family: "Cabin", Sans-serif;
    font-size: 5.5em;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 0em;
    letter-spacing: 1.2px;
  }

  h4 {
    text-align: center;
    color: #000000;
    font-family: "Manrope", Sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 2.4em;
    letter-spacing: 5px;
  }

  p {
    text-align: center;
    color: #888888;
    font-family: "Manrope", Sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1.6em;
  }
`;
