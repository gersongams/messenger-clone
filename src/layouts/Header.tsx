import React from "react";
import styled from "styled-components";
import SidebarHeader from "../components/SidebarHeader";

const StyledHeader = styled.header`
  align-items: center;
  border-bottom: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  height: 60px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 8px 8px 16px;
  position: relative;
  text-align: center;
  z-index: 201;
`;

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;
