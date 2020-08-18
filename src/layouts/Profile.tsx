import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import ProfileAction from "../components/ProfileAction";
import { ReactComponent as Call } from "../assets/call.svg";

const StyledProfile = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  flex: 0 2 33.33%;
  max-width: 420px;
  min-width: 200px;
  .profile-container {
    height: calc(100vh - 60px);
  }
  .scrollable-area {
    direction: ltr;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .profile-content {
    height: 100%;
    outline: none;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 14px;
  }

  .profile-resume {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 14px 16px 14px;
    word-break: break-word;
    & > div:nth-child(1) {
      width: 100px;
      height: 100px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 0;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      align-items: center;
      flex: 1 1 auto;
      margin-left: 0;
      margin-top: 12px;
      & > div:nth-child(1) {
        overflow: hidden;
        text-overflow: ellipsis;
        color: #000;
        display: flex;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        white-space: initial;
        word-break: break-word;
      }
      & > div:nth-child(2) {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.4);
        margin-top: 2px;
      }
    }
  }
`;

const Profile = () => {
  return (
    <StyledProfile>
      <div className="profile-container">
        <div className="scrollable-area">
          <div className="profile-content">
            <div className="profile-resume">
              <div>
                <img
                  src="https://scontent.faqp3-1.fna.fbcdn.net/v/t1.0-1/cp0/p80x80/38910104_10214375518995322_7716406692887396352_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_eui2=AeHtp317al01hVYVBa-QyPVw09hYNdp5gu_T2Fg12nmC78E6YEi4cygcrGIgDS51-UVZ6s7Q5K1G_ouxsj7cJOc6&_nc_ohc=0b5AKaFc_qUAX8g1A4l&_nc_ht=scontent.faqp3-1.fna&oh=c6e19e0f3bb64fa130fae3eadae31f2e&oe=5F5357A7"
                  alt=""
                />
              </div>
              <div>
                <div>
                  <span>Brian Rodriguez</span>
                </div>
                <div>
                  <span>Active 6m ago</span>
                </div>
              </div>
            </div>
            <Accordion title="More actions">
              <ProfileAction icon={<Call />} text="Search in Conversation" />
              <ProfileAction icon={<Call />} text="Edit Nicknames" />
              <ProfileAction icon={<Call />} text="Change Theme" />
              <ProfileAction icon={<Call />} text="Change Emoji" />
            </Accordion>
            <Accordion title="Privacy and support">
              <ProfileAction icon={<Call />} text="Notifications" />
              <ProfileAction icon={<Call />} text="Ignore Messages" />
              <ProfileAction icon={<Call />} text="Block Messages" />
              <ProfileAction
                icon={<Call />}
                text="Something's Wrong"
                subText="Give feedback and report conversation"
              />
            </Accordion>
            <Accordion title="Shared files">
              <ProfileAction icon={<Call />} text="Search in Conversation" />
              <ProfileAction icon={<Call />} text="Search in Conversation" />
              <ProfileAction icon={<Call />} text="Search in Conversation" />
            </Accordion>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
