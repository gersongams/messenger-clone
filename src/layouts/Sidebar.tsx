import React from "react";
import styled from "styled-components";
import SidebarHeader from "../components/SidebarHeader";
import ConversationContainer from "../containers/ConversationContainer";

const StyledSidebar = styled.aside`
  flex: 0 0 25%;
  max-width: 420px;
  min-width: 300px;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarHeader />
      <ConversationContainer />
    </StyledSidebar>
  );
};

export default Sidebar;
