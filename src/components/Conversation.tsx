import React from "react";
import styled from "styled-components";

const StyledConversation = styled.li`
  background: transparent;
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  &:nth-child(1) {
    & > div {
      & > a {
        & > div {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
  & > div {
    flex: 1;
    min-width: 0;
    display: flex;
    height: 100%;
    & > a {
      display: flex;
      padding-left: 8px;
      padding-right: 8px;
      flex: 1;
      min-width: 0;
      cursor: pointer;
      text-decoration: none;
      & > div {
        align-items: center;
        border-radius: 10px;
        min-width: 0;
        padding-left: 8px;
        padding-right: 8px;
        display: flex;
        flex: 1 1 auto;
      }
    }
  }
  .conversation-user {
    align-items: center;
    margin-right: 12px;
    display: flex;
    height: 50px;
    width: 50px;
    img {
      height: 50px;
      width: 50px;
      border: 0;
      border-radius: 50%;
    }
  }
  .conversation-content {
    flex: 1 1 0px;
    justify-content: center;
    min-width: 0;
    padding: 0 16px 0 0;
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
      justify-content: space-between;
      display: flex;
      span {
        flex: 1 1 0%;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgba(0, 0, 0, 1);
        font-size: 15px;
        font-weight: 400;
        line-height: 1.4;
      }
    }
    div:nth-child(2) {
      align-items: baseline;
      justify-content: left;
      margin-right: 12px;
      display: flex;
      span {
        color: rgba(153, 153, 153, 1);
        font-size: 13px;
        font-weight: 400;
        height: 18px;
        flex: 0 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre;
      }
      div {
        color: rgba(0, 0, 0, 0.4);
        font-size: 13px;
        margin-left: 4px;
        margin-right: 4px;
      }
      abbr {
        border-bottom: none;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.4);
        display: inline-block;
        font-size: 13px;
        font-weight: 400;
        padding-top: 0;
        white-space: nowrap;
      }
    }
  }
`;

const Conversation = () => {
  return (
    <StyledConversation>
      <div>
        <a href="#">
          <div>
            <div className="conversation-user">
              <img
                src="https://www.cinemascomics.com/wp-content/uploads/2020/06/pokemon-pikachu.jpg"
                alt=""
              />
            </div>
            <div className="conversation-content">
              <div>
                <span>Pikachu</span>
              </div>
              <div>
                <span>You: xdd</span>
                <div>.</div>
                <abbr>11:00 PM</abbr>
              </div>
            </div>
          </div>
        </a>
      </div>
    </StyledConversation>
  );
};

export default Conversation;
