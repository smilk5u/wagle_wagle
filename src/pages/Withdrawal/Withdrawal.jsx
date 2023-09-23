import React from 'react';
import styled from 'styled-components';
import Button from '../../component/Button/Button';
import Title from "../../component/Title/Title";
import NavBar from '../../component/NavBar/NavBar';

const Withdrawal = () => {
  return (
    <>
      <NavBar />
      <Main>
        <MainDiv>
          <Title title="회원탈퇴하나요?ㅠㅠ" />
          <Sub>회원가입에 필요한 정보를 입력해주세요.</Sub>
          <Button />
        </MainDiv>
      </Main>
    </>
  );
};

export default Withdrawal;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 100px; */
  box-sizing: border-box;
  button {
    margin: 40px 0 20px;
  }
`;

const Sub = styled.h3`
  margin-top: 14px;
  color: #9e9e9e;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;