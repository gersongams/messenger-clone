import React from "react";
import styled from "styled-components";
import SearchMessenger from "../components/SearchMessenger";
import Conversations from "../components/Conversations";

const StyledConversationContainer = styled.div`
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

const ConversationContainer = () => {
  return (
    <StyledConversationContainer>
      <SearchMessenger />
      <Conversations />
    </StyledConversationContainer>
  );
};

export default ConversationContainer;
