import React from "react";
import styled from "styled-components";
import NewMessage from "../containers/NewMessage";
import MessageInbox from "../containers/MessageInbox";

const StyledMessages = styled.header`
  flex: 2 0 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Messages = () => {
  return (
    <StyledMessages>
      <MessageInbox />
      <NewMessage />
    </StyledMessages>
  );
};

export default Messages;
