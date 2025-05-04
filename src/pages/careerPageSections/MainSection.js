import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ShadowImage from "../../assets/shadow-image.png";
import ImageGirl from "../../assets/image-girl.png";

function MainSection() {
  return (
    <MainSectionCSS>
      <img src={ShadowImage} className="shadow-image" alt="Shadow" />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src={ImageGirl} alt="Image Girl" />
          </Col>
          <Col xs={12} md={6} className="candidates">
            <h1>For candidates</h1>
            <p>
              Shape the future with the Kamberi Group! The Kamberi Group is
              looking for dedicated, talented individuals who are ready to
              develop innovative solutions with us. In a dynamic and supportive
              environment, you'll have the opportunity to further develop your
              skills and participate in exciting projects.
            </p>
            <p>
              We encourage the exchange of ideas and teamwork to explore new
              paths together. If you're interested in becoming part of a diverse
              and professional team, we look forward to receiving your
              application!
            </p>
            <NavLink to={`#`}>
              <Button variant="primary" className="btnn">
                unsolicited application
              </Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </MainSectionCSS>
  );
}

export default MainSection;

const MainSectionCSS = styled.div`
  /* background-color: transparent;
  background-image: linear-gradient(88deg, #dfb35fc4 0%, #ffffff 100%); */

  .shadow-image {
    position: absolute;
    left: -215px;
    top: -5px;
    width: 50%;
  }

  .candidates {
    align-self: anchor-center;

    h1,
    h2 {
      color: #000000;
      font-family: "Manrope", Sans-serif;
      font-size: 1.6em;
      font-weight: 500;
      text-transform: uppercase;
      line-height: 1.4em;
      letter-spacing: 2px;
    }

    p {
      margin-bottom: 2.05em;
    }

    button {
      background-color: #ffffff;
      font-family: "Manrope", Sans-serif;
      text-transform: lowercase;
      font-size: 15px;
      fill: #000000;
      color: #000000;
      border-radius: 50px;
      box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.5);
      padding: 15sspx 35px;
    }
  }
`;
