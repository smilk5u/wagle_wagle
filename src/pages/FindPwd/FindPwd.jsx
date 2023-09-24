import { useCallback, useState, useEffect } from "react";
import {FormFindPwd} from "../../component/Form/Form";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import Title from "../../component/Title/Title";
import ModalBasic from "../../component/Modal/ModalBasic";
import { InputText } from "../../component/Input/Input";
import { validEmail, IsTrue, IsFalse } from "../../component/ValidTest/ValidTest";
import { ButtonActDeact } from "../../component/Button/Button";

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

  //// visibleModal

  // 변수
  const [visibleModal, setVisibleModal] = useState(false);

  // 함수
  const visibleFtn = (value) => {
    setVisibleModal(value);
  };


  //// 등록된 이메일 확인

  // 변수
  const [registeredEmail, setRegisteredEmail] = useState(false);

  // 함수
  const registeredEmailFtn = () => {

    // 등록된 이메일인지 확인.
    // 백엔드 통신

    // 변수 업데이트
    setRegisteredEmail(true);

    // modal 보이기
    setVisibleModal(true);
  };


  return (
    <>
      {(visibleModal)
        ? <ModalBasic
          msg = {(registeredEmail)
            ? "성공적으로 메일을 보냈습니다!"
            : "등록되지 않은 이메일입니다."}
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
            onClickBtn={registeredEmailFtn}
          />
        </MainDiv>
      </Main>
    </>
  );
};

const FindPwdRefine = () => {

  //// 기본 데이터

  // 변수
  const [data, setData] = useState({
    email: "",
    isEmail: false,
  });

  // 함수
  const updateData = useCallback(
    (name, value) => {
      setData({ ...data, [name]: value });
    },
    [data]
  );

  // 이메일 형식 판별
  useEffect(() => {

    // 판별
    updateData("isEmail", validEmail(data.email));

  }, [data.email]);


  //// 등록된 이메일 확인

  // 변수
  const [registeredEmail, setRegisteredEmail] = useState(false);

  // 함수
  const registeredEmailFtn = () => {

    // 등록된 이메일인지 확인.
    // 백엔드 통신

    // 변수 업데이트
    setRegisteredEmail(true);

    // modal 보이기
    setVisibleModal(true);
  };


  //// visibleModal

  // 변수
  const [visibleModal, setVisibleModal] = useState(false);

  // 함수
  const visibleFtn = (value) => {
    setVisibleModal(value);
  };

  // modal 확인 누르면 로그인 화면 이동
  const handleClick = ()=>{
    window.location.href = "/login"
  }


  return (
    <>
      <NavBar />

      {/* Modal */}
      {(visibleModal)
        ? <ModalBasic
          msg = {(registeredEmail)
            ? "성공적으로 메일을 보냈습니다!"
            : "등록되지 않은 이메일입니다."}
          buttonText="확인"
          visibleFtn={visibleFtn}
        />
        : null}

      <Main>
        <MainDiv>

          {/* Title */}
          <Title title="비밀번호 찾기" />
          <Sub>비밀번호를 분실하셨나요?</Sub>
          <Sub>이메일로 보낸 링크를 타고 들어와서 비밀번호 변경이 가능합니다.</Sub>

          <MainDivBottom>

            {/* Email */}
            <InputText
              placeholder="이메일을 적어주세요."
              dataName="email"
              updateData={updateData}
            />

            {/* Email 판별 */}
            {(data.email !== "")  // 비어있을 때
              ? (data.isEmail)  // 이메일 형식에 맞는지
                ? (<IsTrue></IsTrue>) 
                : (<IsFalse>이메일 형식에 맞지 않는 메일 주소입니다.</IsFalse>)
              : null
            }

            {/* 버튼 */}
            <ButtonActDeact 
              onClick={handleClick}
              disabled={!data.isEmail}
            >
              메일 보내기
            </ButtonActDeact>

          </MainDivBottom>
          
        </MainDiv>
      </Main>
    </>
  );
};

export default FindPwdRefine;


const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const MainDivBottom = styled.div`
  margin-top: 40px;
  button {
    margin: 40px 0 0;
    width: 100%
  }
`;

const Sub = styled.h3`
  margin-top: 14px;
  color: #9e9e9e;
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 10px;
`;