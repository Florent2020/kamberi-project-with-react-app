import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import quotes from "../../assets/quotes.png";

function WhatToSay() {
  return (
    <WhatToSayCss>
      <Container>
        <Row className="what-to-say">
          <Col>
            <img src={quotes} alt="logo" />
            <h2>What they say</h2>
            <p>The only way to do great work is to love what you do.</p>
            <h5>- Steve Jobs -</h5>
          </Col>
        </Row>
      </Container>
    </WhatToSayCss>
  );
}

export default WhatToSay;

const WhatToSayCss = styled.section`
  background-color: transparent;
  background-image: linear-gradient(88deg, #dfb35fbd 0%, #ffffff 100%);
  text-align: center;
  padding: 130px 0 80px;

  .what-to-say {
    position: relative;

    img {
      position: absolute;
      top: 0;
      width: 8%;
      opacity: 0.1;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    h2 {
      color: #000000;
      font-family: "Lato", Sans-serif;
      font-size: 0.76em;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.25em;
      letter-spacing: 2px;
    }

    p {
      color: #000000;
      font-family: "Cormorant", Sans-serif;
      font-size: 2.9em;
      font-weight: 600;
      line-height: 1.4em;
      letter-spacing: -1px;
    }

    h5 {
      color: #000000;
      font-family: "Cormorant", Sans-serif;
      font-size: 0.9em;
      font-weight: 700;
      line-height: 1.25em;
    }
  }
`;
