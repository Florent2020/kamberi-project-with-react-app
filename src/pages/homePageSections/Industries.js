import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CraftsRenovation from "../../assets/industries/crafts&renovation.png";
import CateringEvenets from "../../assets/industries/catering&events.png";
import HotelIndustry from "../../assets/industries/hotel-industry.png";
import Marketing from "../../assets/industries/marketing.png";
import ConsultingProjectManagement from "../../assets/industries/e-commerce.png";
import ECommerce from "../../assets/industries/catering&events.png";
import ServiceSector from "../../assets/industries/service-sector.png";
import RealEstate from "../../assets/industries/real-estate.png";

function Industries() {
  return (
    <IndustriesCss>
      <Container>
        <h2>Industries</h2>
        <Row className="industries">
          <Col xs={6} md={3}>
            <img src={CraftsRenovation} alt="Crafts-Renovation" />
            <h4>Crafts & Renovation</h4>
          </Col>
          <Col xs={6} md={3}>
            <img src={CateringEvenets} alt="Catering-Evenets" />
            <h4>Catering & Events</h4>
          </Col>
          <Col xs={6} md={3}>
            <img src={HotelIndustry} alt="Hotel-Industry" />
            <h4>Hotel Industry</h4>
          </Col>
          <Col xs={6} md={3}>
            <img src={Marketing} alt="Marketing" />
            <h4>Marketing</h4>
          </Col>
        </Row>
        <Row className="industries">
          <Col xs={6} md={3}>
            <img
              src={ConsultingProjectManagement}
              alt="Consulting-Project-Management"
            />
            <h4>Consulting and Project Managment</h4>
          </Col>
          <Col xs={6} md={3}>
            <img src={ECommerce} alt="E-Commerce" />
            <h4>E-Commerce</h4>
          </Col>
          <Col xs={6} md={3}>
            <img src={ServiceSector} alt="Service-Sector" />
            <h4>Service Sector</h4>
          </Col>
          <Col xs={6} md={3}>
            <img src={RealEstate} alt="Real-Estate" />
            <h4>Real Estate</h4>
          </Col>
        </Row>
      </Container>
    </IndustriesCss>
  );
}

export default Industries;

const IndustriesCss = styled.section`
  padding: 70px 0;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  .industries {
    position: relative;
    animation-name: example;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    &:first-of-type {
      padding-bottom: 40px;
    }

    img {
      width: 100%;
    }

    h4 {
      color: #333333;
      font-family: "Manrope", Sans-serif;
      font-size: 17px;
      font-weight: 500;
      text-transform: uppercase;
      margin-top: -40px;
    }
  }

  /* @keyframes example {
    from {
      left: -2000px;
    }
    to {
      left: 0px;
    }
  } */

  @keyframes example {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
`;
