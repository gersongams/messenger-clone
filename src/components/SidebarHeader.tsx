import React from "react";
import styled from "styled-components";
import { ReactComponent as Settings } from "../assets/config.svg";
import { ReactComponent as New } from "../assets/edit.svg";
import { ReactComponent as Rooms } from "../assets/room.svg";

const StyledSidebarHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  overflow: hidden;
  padding: 10px 16px 10px 16px;

  .header-profile {
    display: flex;
    align-items: center;
    div {
      height: 40px;
      width: 40px;
      margin-right: 12px;

      img {
        border-radius: 50%;
        border: 0;
        height: 40px;
        width: 40px;
      }
    }
    span {
      color: rgba(0, 0, 0, 1);
      font-size: 24px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.25s;
    }
  }
  .spacer {
    flex: 1 1 auto;
  }

  .header-actions {
    display: flex;
    span {
      height: 36px;
      margin-left: 12px;
      width: 36px;
      cursor: pointer;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 99px;
      display: flex;
      flex: 0 0 auto;
      justify-content: center;
      transition: width 0.25s, height 0.25s;
    }
  }
`;

const SidebarHeader = () => {
  return (
    <StyledSidebarHeader>
      <div className="header-profile">
        <a href="#">
          <div>
            <img
              src="https://ae01.alicdn.com/kf/H0796eedf43804726819970bb8de51be5Q.jpg_q50.jpg"
              alt=""
            />
          </div>
        </a>
        <span>Chats</span>
      </div>
      <div className="spacer" />
      <div className="header-actions">
        <span>
          <Settings />
        </span>
        <span>
          <Rooms />
        </span>
        <span>
          <New />
        </span>
      </div>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
