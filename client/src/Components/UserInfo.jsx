import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

function UserInfo() {
  const name = useSelector((state) => state.authReducer?.name);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <CardWrapper>
      <UserInfoWrap>
        <img
          src={`https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg`}
          alt=""
        />
        <section>
          <h5>
            <strong>{name ? name : "sarbjot"}</strong>
          </h5>
          <p>Welcome to the sarbInstgram</p>
        </section>
      </UserInfoWrap>
      <h4 onClick={logoutHandler}>Sign out</h4>
    </CardWrapper>
  );
}

export default UserInfo;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 0;
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  > h4 {
    cursor: pointer;
    color: #4299e1;
    font: 20px;
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
  }
`;
const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  > img {
    object-fit: contain;
    height: 60px;
    width: 60px;
    border-radius: 9999px;
    margin-right: 15px;
    cursor: pointer;
  }
  > section {
    flex: 1;
  }
  > section > p {
    color: gray;
    font-size: 15px;
  }
  > section > h5 {
    color: rgb(115 115 115);
    cursor: pointer;
  }
`;
