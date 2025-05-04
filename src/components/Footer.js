import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <footer>
        <div className="footer">Florent Hajdari</div>
      </footer>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  flex-shrink: 0;
  background-size: cover;
  background-position: center;

  .footer {
    padding: 20px 0;
    text-align: center;
    background-color: #000;
    color: #fff;
  }
`;
