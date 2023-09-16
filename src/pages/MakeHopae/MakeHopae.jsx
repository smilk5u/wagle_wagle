import { useCallback, useState } from "react";
import {FormMakeHopae} from "../../component/Form/Form";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import Title from "../../component/Title/Title";

const MakeHopae = () => {

  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false,
    isHopae: false,
  });

  const validUserInfo = useCallback(
    (name, value) => {
      setIsValid({ ...isValid, [name]: value });
    },
    [isValid]
  );

  return (
    <>
      <NavBar />
      <Main>
        <MainDiv>
          <Title title="호패만들기" />
          <Sub>자네, 이곳은 처음이요?</Sub>
          <Sub>이곳은 호패가 없으면 들어갈 수가 없다네.</Sub>
          <FormMakeHopae
            validUserInfo={validUserInfo}
          />
        </MainDiv>
      </Main>
    </>
  );
};

export default MakeHopae;


const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const MainDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  box-sizing: border-box;
`;

const Sub = styled.h3`
  margin-top: 14px;
  color: #9e9e9e;
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 10px;
`;