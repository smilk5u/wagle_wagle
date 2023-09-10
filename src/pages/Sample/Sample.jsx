import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

// TODO: 샘플 컴포넌트 입니다. 추후 삭제 예정
const Sample = () => {
  const userInfo = useSelector((state) => state.userCheckReducer.User);
  console.log(userInfo);
  return (
    <Div>
      <div>
        <img src={userInfo.data.profile.thumbnail_image_url} alt="" />
        <p>닉네임 : {userInfo.name}</p>
        <p>아이디 : {userInfo.id}</p>
      </div>
    </Div>
  );
};

export default Sample;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    > img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
`;
