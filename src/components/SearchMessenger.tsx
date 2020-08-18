import React from "react";
import styled from "styled-components";
import icons from "../assets/icons.png";

const StyledSearchMessenger = styled.div`
  height: 52px;
  padding: 4px 16px 12px;
  label {
    box-sizing: border-box;
    cursor: default;
    //display: inline-block;
    font-weight: normal;
    margin: 0;
    position: relative;
    vertical-align: middle;
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    svg {
      position: absolute;
      left: 12px;
      font-size: 20px;
      color: #8d949e !important;
      fill: #8d949e !important;
    }
    input {
      margin: 0;
      outline: 0;
      width: 100%;
      background-color: #f5f6f7;
      border-style: none;
      box-sizing: border-box;
      font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
      line-height: 30px;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 50px;
      font-size: 15px;
      height: 36px;
      padding-left: 36px;
      padding-right: 16px;
      text-align: left;
      position: relative;
      &::placeholder {
        color: #8d949e;
      }
    }
    &::before {
      background-image: url(${icons});
      background-repeat: no-repeat;
      background-size: 92px 1126px;
      background-position: -34px -883px;
      content: "";
      display: inline-block;
      height: 16px;
      left: 12px;
      position: absolute;
      top: 10px;
      width: 16px;
    }
  }
`;

const SearchMessenger = () => {
  return (
    <StyledSearchMessenger>
      <label htmlFor="">
        <input type="text" placeholder={"Search Messenger"} />
      </label>
    </StyledSearchMessenger>
  );
};

export default SearchMessenger;
