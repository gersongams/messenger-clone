import React from "react";
import styled from "styled-components";

const StyledProfile = styled.header`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  flex: 0 2 33.33%;
  max-width: 420px;
  min-width: 200px;
`;

const Profile = () => {
  return <StyledProfile>Profile</StyledProfile>;
};

export default Profile;
