import React from "react";
import styled from "styled-components";

const StyledMessages = styled.header`
  flex: 2 0 0%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Messages = () => {
  return <StyledMessages>Messages</StyledMessages>;
};

export default Messages;
