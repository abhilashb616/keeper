import React from "react";
import styled from "styled-components";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <HeaderContainer>
      <MainHeading>
        <HighlightIcon />
        Keeper
      </MainHeading>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--header-bg-color);
  padding: 10px 35px;
`;
const MainHeading = styled.h1`
  color: var(--body-color);
`;
