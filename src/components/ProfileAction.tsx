import React from "react";
import styled, { css } from "styled-components";
import { ReactNode } from "../utils/types";

interface ProfileActionProps {
  text?: string;
  background?: boolean;
  icon?: ReactNode;
  subText?: string;
}

const StyledProfileAction = styled.div<ProfileActionProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 44px;
  flex-direction: row-reverse;
  padding-left: 14px;
  padding-right: 12px;
  .icon-wrapper {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex: 0 0 35px;
    max-height: 44px;
    max-width: 35px;
    padding-left: 5px;
  }
  .icon-container {
    background-color: ${(props) =>
      props.background ? "rgba(0, 0, 0, .04)" : null};
    border-radius: 99px;
    box-sizing: border-box;
    height: 32px;
    padding: 5px;
    width: 32px;
    justify-content: center;
  }
  .action-title {
    color: rgba(0, 0, 0, 1);
    flex-grow: 1;
    overflow: hidden;
    display: block;
    line-height: 17.92px;
    ${(props) =>
      !!props.subText &&
      css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
        margin-top: 1px;
      `};
    span {
      color: rgba(0, 0, 0, 0.4);
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 15.36px;
    }
  }
`;

const ProfileAction: React.FC<ProfileActionProps> = ({
  text,
  subText,
  icon,
  background = true,
}) => {
  return (
    <StyledProfileAction subText={subText} background={background}>
      <div className="icon-wrapper">
        <div className="icon-container">{icon}</div>
      </div>
      <div className="action-title">
        {text}
        <span>{subText}</span>
      </div>
    </StyledProfileAction>
  );
};

export default ProfileAction;
