import React from "react";
import styled from "styled-components";
import { ReactComponent as Call } from "../assets/call.svg";
import { ReactComponent as Video } from "../assets/video.svg";
import { ReactComponent as ChatInfo } from "../assets/chatInfo.svg";

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
  .chat-info {
    align-items: center;
    display: flex;
    font-size: 14px;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      margin-left: 2px;
      margin-right: 12px;
      img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 0;
      }
    }
    & > div:nth-child(2) {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      height: 32px;
      justify-content: center;
      h2 {
        font-size: 15px;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        margin: 0;
        padding: 0;
      }
      div {
        color: rgba(0, 0, 0, 0.4);
        font-size: 12px;
        font-weight: normal;
        margin-top: 2px;
        vertical-align: middle;
      }
    }
  }

  .chat-actions {
    align-items: center;
    bottom: 0;
    display: flex;
    padding: 9px 0 9px 8px;
    position: initial;
    right: 0;
    top: 0;
    list-style-type: none;
    line-height: 0;
    li {
      display: inline-block;
      margin-right: 12px;
      padding: 0;
      &:last-child {
        margin-right: 0;
      }
      a {
        display: inline-block;
        height: 32px;
        outline: none;
        padding: 0;
        width: 32px;
        cursor: pointer;
        transition: opacity 0.2s;
        div {
          height: 32px;
          width: 32px;
          svg {
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="chat-info">
        <div>
          <img
            src="https://scontent.faqp3-1.fna.fbcdn.net/v/t1.0-1/cp0/p80x80/38910104_10214375518995322_7716406692887396352_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_eui2=AeHtp317al01hVYVBa-QyPVw09hYNdp5gu_T2Fg12nmC78E6YEi4cygcrGIgDS51-UVZ6s7Q5K1G_ouxsj7cJOc6&_nc_ohc=0b5AKaFc_qUAX8g1A4l&_nc_ht=scontent.faqp3-1.fna&oh=c6e19e0f3bb64fa130fae3eadae31f2e&oe=5F5357A7"
            alt=""
          />
        </div>
        <div>
          <h2>
            <span>Brian Rodriguez</span>
          </h2>
          <div>Active 5m ago</div>
        </div>
      </div>
      <ul className="chat-actions">
        <li>
          <a href="#">
            <div>
              <Call />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <Video />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <ChatInfo />
            </div>
          </a>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
