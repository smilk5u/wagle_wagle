import { useCallback, useState } from "react";
import Form from "../../component/Form/Form";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Title from "../../component/Title/Title";
import { joinApi } from "../../apis/user";

const Join = () => {
  const [{ userId, password, checkPassword }, setJoinInfo] = useState({
    userId: "",
    password: "",
    checkPassword: "",
  });

  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const joinUserInfo = useCallback((form) => {
    setJoinInfo({
      userId: form.userId,
      password: form.password,
      checkPassword: form.checkPassword,
    });
  }, []);

  const validUserInfo = useCallback(
    (name, value) => {
      setIsValid({ ...isValid, [name]: value });
    },
    [isValid]
  );

  const onJoinSubmit = useCallback(() => {
    if (isValid.isEmail && isValid.isPassword && isValid.isPasswordConfirm) {
      try {
        joinApi({
          email: userId,
          password: password,
          username: "닉네임2",
        }).then((result) => {
          if (result.status === 200) {
            setIsModalOpen(true);
          }
          // TODO-GOGI: 에러처리부분 백엔드와 얘기해서 추가 로직 구현해야함
          if (result.status === 500) {
            console.log("error500");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
      {isModalOpen ? (
        <ModalBg>
          <Modal>
            <ModalTop>회원가입이 완료되었습니다.</ModalTop>
            <ModalBottom>
              <Link to="/login">확인</Link>
            </ModalBottom>
          </Modal>
        </ModalBg>
      ) : null}
      <NavBar />
      <Main>
        <MainDiv>
          <Title title="회원가입" />
          <Sub>회원가입에 필요한 정보를 입력해주세요.</Sub>
          <Form
            joinUserInfo={joinUserInfo}
            onSubmit={onJoinSubmit}
            validUserInfo={validUserInfo}
          />
          <ToLogin>
            이미 와글와글 계정이 있으신가요? <Link to="/login">로그인하기</Link>
          </ToLogin>
        </MainDiv>
      </Main>
    </>
  );
};

export default Join;

const ModalBg = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(32, 32, 32, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 340px;
  height: 180px;
  background-color: #fff;
  border-radius: 10px;
  z-index: 200;
`;

const ModalTop = styled.div`
  width: 100%;
  height: 118px;
  border-bottom: 1px solid #eee;
  text-align: center;
  line-height: 118px;
  color: #222;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.64px;
`;

const ModalBottom = styled.div`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  > a {
    text-decoration: none;
    color: #e75852;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 20px;
  }
`;

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
