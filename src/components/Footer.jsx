import React from "react";
import styled from "styled-components";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <FooterContainer>
      <p>Copyright © {date}</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
