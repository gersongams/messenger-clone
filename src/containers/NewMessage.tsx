import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as Gif } from "../assets/gif.svg";
import { ReactComponent as Sticker } from "../assets/sticker.svg";
import { ReactComponent as Upload } from "../assets/upload.svg";
import { ReactComponent as Emoji } from "../assets/emoji.svg";
import { ReactComponent as Send } from "../assets/send.svg";

const StyledNewMessage = styled.div`
  height: 52px;
  border-top: none;
  position: relative;
`;

const NewMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 8px 0 12px;
  overflow: hidden;
  position: relative;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 1);
  padding: 0 8px;
`;

const MoreOptions = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  margin-right: 8px;
  padding: 0 0 14px 4px;
  z-index: 1;
  div {
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.22s cubic-bezier(0.5, 0, 0.4, 1);
    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

const Attach = styled.div`
  align-items: flex-end;
  display: flex;
  padding: 8px 0;
  a {
    text-decoration: none;
    color: #385898;
    cursor: pointer;
    transition: opacity 0.2s;
    margin-right: 8px;
  }
`;

const MessageBox = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  display: flex;
  flex: 1 1 auto;
  margin: 8px 8px 8px 0;
  min-width: 100px;
  padding: 0 8px 0 12px;
  div {
    padding: 9px 0;
    flex: 1;
    max-height: 144px;
    min-height: 18px;
    overflow-y: auto;
    vertical-align: middle;
    input {
      background: transparent;
      border: none;
      box-shadow: none;
      width: 100%;
      outline: transparent;
    }
  }
  a {
    align-items: flex-end;
    display: flex;
    padding: 6px 0 6px 2px;
    cursor: pointer;
    transition: opacity 0.2s;
    color: #385898;
    text-decoration: none;
  }
`;

const SendMessage = styled.a`
  align-items: flex-end;
  display: flex;
  flex-shrink: 0;
  padding-bottom: 8px;
  color: rgb(0, 153, 255);
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 0.9em;
  font-weight: bold;
  line-height: 32px;
  max-width: 80px;
  min-width: 33px;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: auto;
`;

const NewMessage = () => {
  return (
    <StyledNewMessage>
      <NewMessageWrapper>
        <MoreOptions>
          <div>
            <More />
          </div>
        </MoreOptions>
        <Attach>
          <a href="#">
            <Gif />
          </a>
          <a href="#">
            <Sticker />
          </a>
          <a href="#">
            <Upload />
          </a>
        </Attach>
        <MessageBox>
          <div>
            <input type="text" placeholder="test" />
          </div>
          <a href="#">
            <Emoji />
          </a>
        </MessageBox>
        <SendMessage href="#">
          <Send />
        </SendMessage>
      </NewMessageWrapper>
    </StyledNewMessage>
  );
};

export default NewMessage;
