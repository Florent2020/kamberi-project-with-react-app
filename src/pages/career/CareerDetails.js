import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { positions } from "../../utils/dataPositions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShadowImage from "../../assets/shadow-image.png";
import ImageGirl from "../../assets/image-girl.png";
// import yourCareer from "../../assets/your-career-with-us.png";

const CareerDetail = () => {
  const { id } = useParams();
  const position = positions.find((pos) => pos.id === parseInt(id));

  if (!position) return <p>Position not found</p>;

  return (
    <>
      <CareerDetailCSS>
        {/* <img src={ShadowImage} className="shadow-image" alt="Shadow" /> */}
        <Container>
          <Row>
            <Col xs={12} md={6} className="candidates">
              <h1>{position.title}</h1>
              <hr></hr>
              <p>{position.info}</p>
            </Col>
            <Col xs={12} md={6} className="images">
              <img src={ImageGirl} alt="Girl in front" className="the-girl" />
              <img src={ShadowImage} className="shadow-image" alt="Shadow" />
            </Col>
          </Row>
        </Container>
      </CareerDetailCSS>

      <CareerDetailCSS2>
        <Container>
          <Row>
            <h3>
              <FontAwesomeIcon icon={faCheck} />
              {position.main_tasks}
            </h3>
            <ul
              dangerouslySetInnerHTML={{ __html: position.main_tasks_info }}
            />
            <h3>
              <FontAwesomeIcon icon={faCheck} />
              {position.qualifications}
            </h3>
            <ul
              dangerouslySetInnerHTML={{ __html: position.qualifications_info }}
            />
            <h3>
              <FontAwesomeIcon icon={faCheck} />
              {position.benefits}
            </h3>
            <ul dangerouslySetInnerHTML={{ __html: position.benefits_info }} />
          </Row>
        </Container>
      </CareerDetailCSS2>

      <CareerDetailCSS3>
        <Container>
          <p>
            Become part of our team and shape the future with us! Send us your
            application documents by email to Bewerbung@IhreFirma.de.
          </p>
          <p>
            We look forward to getting to know you and starting your journey
            successfully together!
          </p>
          <p>We look forward to receiving your application!</p>
        </Container>
      </CareerDetailCSS3>
    </>
  );
};

export default CareerDetail;

const CareerDetailCSS = styled.section`
  padding: 100px 0 60px;
  background-color: transparent;
  background-image: linear-gradient(88deg, #dfb35fbd 0%, #ffffff 100%);

  .candidates {
    align-self: anchor-center;

    h1 {
      color: #000000;
      font-family: "Manrope", Sans-serif;
      font-size: 2.4;
      font-weight: 500;
      text-transform: uppercase;
      line-height: 1.4em;
      letter-spacing: 2px;
    }

    hr {
      --divider-border-style: solid;
      --divider-color: #ebe7de;
      --divider-border-width: 1px;
      width: 80px;
    }

    p {
      color: #000000;
      font-family: "Public Sans", Sans-serif;
      font-size: 1.1em;
      font-weight: 400;
      line-height: 1.7em;
      margin-bottom: 2.05em;
    }
  }

  .images {
    position: relative;
  }

  .the-girl {
    position: relative;
    bottom: -50px;
  }

  .shadow-image {
    position: absolute;
    width: 50%;
    bottom: 0;
    right: -30px;
  }
`;

const CareerDetailCSS2 = styled.section`
  padding: 50px 0 0;
  background-image: linear-gradient(88deg, #dfb35f5c 0%, #ffffff 100%);

  .row {
    flex-direction: column;
  }

  h3 {
    font-family: "Manrope", Sans-serif;
    font-weight: 600;
    line-height: 1.3em;
    font-size: 2.625rem;
    color: #000;
  }

  svg {
    color: #dfb35f;
    border-color: #dfb35f;
    font-size: 40px;
    margin-right: 20px;
  }

  ul {
    list-style-type: disc;
    margin: 20px 0 70px;

    li {
      margin-left: 15px;
      font-family: "Manrope", Sans-serif;
      font-size: 23px;
      font-weight: 500;
      line-height: 52px;
    }
  }
`;

const CareerDetailCSS3 = styled.section`
  background-image: linear-gradient(88deg, #dfb35f5c 0%, #ffffff 100%);
  padding-bottom: 30px;

  .container {
    padding: 0;

    p {
      color: #000;
      font-family: "Manrope", Sans-serif;
      font-size: 23px;
      font-weight: 600;
      padding-bottom: 20px;
    }
  }
`;
