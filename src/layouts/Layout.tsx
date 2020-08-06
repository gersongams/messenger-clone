import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Messages from "./Messages";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  font-size: 14px;
  min-width: 500px;

  .layout__main {
    display: flex;
    flex: 3;
    flex-direction: column;
    min-width: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  .layout__wrapper {
    display: flex;
    flex: 1 1 0%;
    flex-direction: row-reverse;
  }
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Sidebar />
      <main className="layout__main">
        <Header />
        <div className="layout__wrapper">
          <Profile />
          <Messages />
        </div>
      </main>
    </StyledLayout>
  );
};

export default Layout;
