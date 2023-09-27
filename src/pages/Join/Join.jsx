import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Title from "../../component/Title/Title";
import { joinApi, checkEmailApi } from "../../apis/user";
import ModalBasic from "../../component/Modal/ModalBasic";
import { InputText, InputPwd } from "../../component/Input/Input";
import { ButtonActDeact } from "../../component/Button/Button";
import { validEmail, validPwd, IsTrue, IsFalse, CheckInfo } from "../../component/ValidTest/ValidTest";

const Join = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // 회원가입 완료 팝업창
  const [emailCheckModal, setEmailCheckModal] = useState(false); // 이메일 중복확인 팝업창

  // 변수
  const [data, setData] = useState({
    userId: "",
    pwd: "",
    confirmPwd: "",
  });

  // 함수
  const updateData = useCallback(
    (name, value) => {
      setData({ ...data, [name]: value });
    },
    [data]
  );

  //// valid

  // 변수
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false,
    isEmeilCheck: false,
  });

  // 함수
  // 실시간 변수 업데이트
  // 변수 업데이트는 렌더링 끝나고 적용되는 듯하다.
  useEffect(() => {
    setIsValid({
      ...isValid,
      isPassword: validPwd(data.pwd),
      isPasswordConfirm: (data.pwd === data.confirmPwd),
      // isEmeilCheck: false,
    });
  }, [data]);

  useEffect(() => {
    setIsValid({
      ...isValid,
      isEmail: validEmail(data.userId),
      isEmeilCheck: false,
    });
  }, [data.userId]);


  // 회원가입 가능 판단
  const onJoinSubmit = (e) => {
    e.preventDefault();
    if (isValid.isEmail && isValid.isPassword && isValid.isPasswordConfirm) {
      console.log(data.userId)
      joinApi({
        email: data.userId,
        password: data.pwd,
      }).then((result) => {
        console.log(result.status)
        if (result.status === 200) {
          // modal 열기
          setIsModalOpen(true);
          // 로그인 화면으로 이동
          // handleClick();
        }
        // TODO-GOGI: 에러처리부분 백엔드와 얘기해서 추가 로직 구현해야함
        if (result.status === 500) {
          console.log("error500");
        }
      });
    }
  };

  /* 이메일 중복확인 */
  const onEmailCheck = (e) => {
    e.preventDefault();
    if (!e.target.classList.contains("available")) {
      checkEmailApi(data.userId)
        .then((result) => {
          if (result.data.status === "SUCCESS") {
            setEmailCheckModal(true);
            setIsValid({
              ...isValid,
              isEmeilCheck: true,
            });
          }
          if (result.data.status === "FAIL") {
            setEmailCheckModal(true);
          }
        });
    }
  }

  // 회원가입 후 로그인 화면 이동
  const handleClick = () => {
    navigate("/Login");
  }

  // 함수
  const visibleFtn = (value) => {
    setIsModalOpen(value);
  };

  //// 출력
  return (
    <>
      <NavBar />
      {/* Modal */}
      {(isModalOpen)
        ? <ModalBasic
          msg="회원가입이 완료되었습니다."
          buttonText="확인"
          onClickBtn={handleClick}
          visibleFtn={visibleFtn}
        />
        : null}

      {/* 이메일 중복확인 팝업창 start */}
      {(emailCheckModal) ? (
        (isValid.isEmeilCheck)
          ? <ModalBasic
            msg="사용가능한 이메일입니다."
            buttonText="확인"
            onClickBtn={() => setEmailCheckModal(false)}
          // visibleFtn={visibleFtn}
          />
          : <ModalBasic
            msg="이미 가입된 회원 입니다."
            buttonText="확인"
            onClickBtn={() => setEmailCheckModal(false)}
          // visibleFtn={visibleFtn}
          />
      ) : null}
      {/* 이메일 중복확인 팝업창 end */}

      <Main>
        <MainDiv>
          {/* Title */}
          <Title title="회원가입" />
          <Sub>회원가입에 필요한 정보를 입력해주세요.</Sub>

          <MainDivBottom>

            {/* Email */}
            <InputText
              placeholder="이메일을 적어주세요."
              dataName="userId"
              updateData={updateData}
              onEmailCheck={onEmailCheck}
              isValid={isValid}
            />

            {/* Email 판별  */}
            {(data.userId !== "") ? (
              (isValid.isEmail) ? (
                <IsTrue>유효한 이메일입니다.</IsTrue>
              ) : (
                <IsFalse>유효하지 않은 이메일입니다.</IsFalse>
              )
            ) : null
            }

            {/* 비밀번호 */}
            <InputPwd
              placeholder="비밀번호를 적어주세요."
              dataName="pwd"
              updateData={updateData}
            />

            {/* 비밀번호 판별 */}
            {(data.pwd !== "") ? (
              (isValid.isPassword) ? (
                <IsTrue>유효한 비밀번호입니다.</IsTrue>
              ) : (
                <IsFalse>유효하지 않은 비밀번호입니다.</IsFalse>
              )
            ) : (
              <CheckInfo>
                <span>* </span>
                6~16자, 영문 대.소문자, 숫자, 특수문자 중 2개 이상 사용하세요.
              </CheckInfo>
            )}


            {/* 비밀번호 확인 */}
            <InputPwd
              placeholder="비밀번호를 한 번 더 적어주세요."
              dataName="confirmPwd"
              updateData={updateData}
            />

            {/* 비밀번호 확인 판별 */}
            {(data.confirmPwd !== "") ? (
              (isValid.isPasswordConfirm) ? (
                <IsTrue>비밀번호가 일치합니다.</IsTrue>
              ) : (
                <IsFalse>비밀번호가 일치하지 않습니다.</IsFalse>
              )
            ) : null}


            {/* 회원가입 버튼 */}
            <ButtonActDeact onClick={(e) => onJoinSubmit(e)}>
              회원가입
            </ButtonActDeact>

          </MainDivBottom>

          {/* 하단 설명 */}
          <ToLogin>
            이미 와글와글 계정이 있으신가요? <Link to="/login">로그인하기</Link>
          </ToLogin>

        </MainDiv>
      </Main>
    </>
  );
};

export default Join;


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
  /* padding-top: 100px; */
`;

const MainDivBottom = styled.form`
  margin-top: 20px;
  display: block;
  button {
    margin: 40px 0 20px;
    width: 100%;
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

const ToLogin = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9e9e9e;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-top: 10px;
  > a {
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: none;
    color: #e75852;
    text-align: center;
    font-size: 16px;
    font-family: var(--font-hunmin);
    border-bottom: 1px solid #e75852;
  }
`;
