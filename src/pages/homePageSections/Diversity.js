import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DiversityImage from "../../assets/diversity-image.png";

function Diversity() {
  return (
    <DiversityCss>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src={DiversityImage} alt="diversity" />
          </Col>
          <Col xs={12} md={6} className="diversity">
            <h2>Diversity and expertise under one roof</h2>
            <p>
              The Kamberi Group is an innovative company distinguished by its
              diverse range of services across a variety of industries. With
              expertise in construction and real estate projects, high-quality
              gastronomy and catering solutions, professional event management,
              and comprehensive consulting, we bring together creative
              approaches and solutions.
            </p>
            <p>
              Our dedicated team combines experience and expertise to set the
              highest standards in every area. We pride ourselves on
              implementing projects with passion and precision, creating added
              value for everyone involved. Discover the Kamberi Group and be
              inspired by our diversity!
            </p>
          </Col>
        </Row>
      </Container>
    </DiversityCss>
  );
}

export default Diversity;

const DiversityCss = styled.section`
  background-color: transparent;
  background-image: linear-gradient(7deg, #dfb35f 0%, #ffffff6b 80%);
  padding: 40px 0;

  & img {
    width: 80%;
  }

  .diversity {
    align-self: anchor-center;

    h2 {
      color: #262626;
      font-family: "Manrope", Sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.2em;
      margin-bottom: 5%;
    }
  }
`;
