import { useCallback, useState } from "react";
import {FormFindPwd} from "../../component/Form/Form";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import Title from "../../component/Title/Title";
import ModalBasic from "../../component/Modal/ModalBasic";

const FindPwd = () => {

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

  // visibleModal 변수
  const [visibleModal, setVisibleModal] = useState(false);

  // visibleModal 함수
  const visibleFtn = (value) => {
    setVisibleModal(value);
  };

  return (
    <>
      {(visibleModal)
        ? <ModalBasic
          msg="성공적으로 메일을 보냈습니다!"
          buttonText="확인"
          visibleFtn={visibleFtn}
        />
        : null}

      <NavBar />
      <Main>
        <MainDiv>
          <Title title="비밀번호 찾기" />
          <Sub>비밀번호를 분실하셨나요?</Sub>
          <Sub>이메일로 보낸 링크를 타고 들어와서 비밀번호 변경이 가능합니다.</Sub>
          <FormFindPwd
            validUserInfo={validUserInfo}
            onClickBtn={visibleFtn}
          />
        </MainDiv>
      </Main>
    </>
  );
};

export default FindPwd;


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