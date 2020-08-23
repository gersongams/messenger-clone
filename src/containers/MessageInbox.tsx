import React from "react";
import styled, { css } from "styled-components";

interface MessageBoxProps {
  me?: boolean;
}

const StyledMessageInbox = styled.div`
  padding: 0 12px;
  position: relative;
  height: calc(100vh - 112px);
`;

const MessageBlock = styled.div`
  max-width: 55%;
  padding: 6px 12px 7px;
  border-radius: 4px;
  margin: 1px 0;
  width: fit-content;
  font-size: 15px;
  line-height: 20.1px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MessageContainer = styled.div<MessageBoxProps>`
  margin: 20px 0;
  display: flex;
  width: 100%;
  ${MessageBox} {
    align-items: ${(props) => (props.me ? "flex-end" : "flex-start")};
  }
  ${MessageBlock} {
    ${(props) =>
      !props.me
        ? css`
            background-color: #f1f0f0;
            color: #000;
            &:first-child {
              border-top-left-radius: 1.3em;
              border-bottom-right-radius: 1.3em;
              border-top-right-radius: 1.3em;
            }

            &:last-child {
              border-bottom-left-radius: 1.3em;
              border-bottom-right-radius: 1.3em;
              border-top-right-radius: 1.3em;
            }

            &:not(:first-child):not(:last-child) {
              border-bottom-right-radius: 1.3em;
              border-top-right-radius: 1.3em;
            }
          `
        : css`
            background-color: rgb(0, 153, 255);
            color: #fff;
            &:first-child {
              border-top-right-radius: 1.3em;
              border-bottom-left-radius: 1.3em;
              border-top-left-radius: 1.3em;
            }

            &:last-child {
              border-bottom-right-radius: 1.3em;
              border-bottom-left-radius: 1.3em;
              border-top-left-radius: 1.3em;
            }

            &:not(:first-child):not(:last-child) {
              border-bottom-left-radius: 1.3em;
              border-top-left-radius: 1.3em;
            }
          `};
  }
`;

const MessageImage = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: flex-end;
  div {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    max-height: 28px;
    max-width: 28px;
    height: 32px;
    width: 32px;
  }
  img {
    cursor: pointer;
    height: 32px;
    width: 32px;
    border: 0;
    object-fit: cover;
    max-height: 28px;
    max-width: 28px;
  }
`;

const MessageInbox = () => {
  return (
    <StyledMessageInbox>
      <MessageContainer>
        <MessageImage>
          <div>
            <img
              alt="Brian Rodriguez"
              src="https://scontent.faqp3-1.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/38910104_10214375518995322_7716406692887396352_o.jpg?_nc_cat=101&amp;_nc_sid=7206a8&amp;_nc_eui2=AeHtp317al01hVYVBa-QyPVw09hYNdp5gu_T2Fg12nmC78E6YEi4cygcrGIgDS51-UVZ6s7Q5K1G_ouxsj7cJOc6&amp;_nc_ohc=gNAK44wNAoUAX9D2Nx6&amp;_nc_ht=scontent.faqp3-1.fna&amp;oh=c169dad98306ca9dfe6da84e3d0f23f2&amp;oe=5F68B6F8"
              height="32"
              width="32"
            />
          </div>
        </MessageImage>
        <MessageBox>
          <MessageBlock>span</MessageBlock>
          <MessageBlock>How are you?</MessageBlock>
          <MessageBlock>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            eaque eius facere non numquam odio repellat similique tenetur
            veritatis voluptatum. Ab adipisci aperiam cumque labore minus nulla
            porro! Dolorem, pariatur.
          </MessageBlock>
        </MessageBox>
      </MessageContainer>
      <MessageContainer me={true}>
        <MessageBox>
          <MessageBlock>I'm fine</MessageBlock>
          <MessageBlock>Thanks for asking</MessageBlock>
          <MessageBlock>Good by</MessageBlock>
        </MessageBox>
      </MessageContainer>
    </StyledMessageInbox>
  );
};

export default MessageInbox;
