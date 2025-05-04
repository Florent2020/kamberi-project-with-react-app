import React from "react";
import styled from "styled-components";
import CareerList from "./career/CareerList";
import MainSection from "./careerPageSections/MainSection";
import ShapeYourFuture from "./careerPageSections/ShapeYourFuture";
import WhatToSay from "./careerPageSections/WhatToSay";

function CareerPage() {
  return (
    <CareerPageCSS>
      <MainSection />
      <CareerList />
      <ShapeYourFuture />
      <WhatToSay />
    </CareerPageCSS>
  );
}

export default CareerPage;

const CareerPageCSS = styled.div`
  padding-top: 200px;
  background-color: transparent;
  background-image: linear-gradient(88deg, #dfb35fc4 0%, #ffffff 100%);
`;
