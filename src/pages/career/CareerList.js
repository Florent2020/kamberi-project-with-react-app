import React from "react";
import { useNavigate } from "react-router-dom";
import { positions } from "../../utils/dataPositions"; // where your array is stored
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Loader from "../../layout/Loader";
// import ErrorMessage from "../../layout/ErrorMessage";

const CareerList = () => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/career/position/${title}`);
  };

  return (
    <Container>
      <CareerListCSS>
        <h2>Current positions</h2>
        <Row>
          {positions.map((position) => (
            <div key={position.id} className="column-careerItem">
              <h4>{position.title}</h4>
              <div className="info-career">
                <hr></hr>
                <p>{position.short_info}</p>
                <button onClick={() => handleClick(position.id)}>
                  More Info
                </button>
              </div>
            </div>
          ))}
        </Row>
      </CareerListCSS>
    </Container>
  );
};

export default CareerList;

const CareerListCSS = styled.section`
  position: relative;
  padding: 150px 0 50px;
  width: 100%;

  h2 {
    color: #000000;
    font-family: "Montserrat", Sans-serif;
    font-size: 2.2em;
    font-weight: 500;
    line-height: 1.35em;
    letter-spacing: -1px;
    padding-bottom: 30px;
  }

  .row {
    margin-right: 0;
    margin-left: 0;
  }

  .column-careerItem {
    position: relative;
    background-color: #ffffff61 !important;
    padding: 20px;
    height: 300px;
    width: 31.33%;
    margin-right: 2% !important;
    margin-bottom: 2%;

    &:nth-of-type(3) {
      margin-right: 0 !important;
    }
  }

  h4 {
    color: #141414;
    font-family: "Manrope", Sans-serif;
    font-size: 1.4em;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1em;
    letter-spacing: 5px;
  }

  .info-career {
    position: absolute;
    bottom: 20px;
    padding-right: 20px;
  }

  hr {
    --divider-border-style: solid;
    --divider-color: #919191;
    --divider-border-width: 1px;
    width: 80px;
  }

  p {
    margin-bottom: 2.05em;
    margin-top: 2.5em;
  }

  button {
    background-color: #ffffff;
    font-family: "Manrope", Sans-serif;
    font-size: 0.6rem;
    font-weight: 400;
    padding: 8px 16px;
    text-transform: capitalize;
    letter-spacing: 3px;
    fill: #141414;
    color: #141414;
    border-style: none;
    border-radius: 50px 50px 50px 50px;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.5);

    &:hover {
      transform: scale(1.2);
      transition-duration: 0.3s;
      transition-property: transform;
    }
  }
`;
