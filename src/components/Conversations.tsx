import React from "react";
import styled from "styled-components";
import Conversation from "./Conversation";

const StyledConversations = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  direction: ltr;
`;

const Conversations = () => {
  return (
    <StyledConversations>
      {Array(50)
        .fill(1)
        .map((value, index) => (
          <Conversation key={index} />
        ))}
    </StyledConversations>
  );
};

export default Conversations;
