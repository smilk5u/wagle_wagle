import styled from "styled-components";
import Form from "../../component/Form/Form";
import SocialLogin from "../../component/socialLogin/SocialLogin";
import { useCallback, useState } from "react";
import NavBar from "../../component/NavBar/NavBar";
import Title from "../../component/Title/Title";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { loginApi } from "../../apis/user";
import { setItem } from "../../utils/localStorage";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form의 input정보를 하위컴포넌트에서 받아서 상태값으로 변경해주는 과정
  const [{ loginId, loginPassword }, setLoginInfo] = useState({
    loginId: "",
    loginPassword: "",
  });
  const getUserInfo = useCallback((form) => {
    setLoginInfo({
      loginId: form.userId,
      loginPassword: form.password,
    });
  }, []);

  // submit 버튼 클릭시 실행될 함수( 나중에 백엔드 완성되면 추가 로직 구성할 예정 )
  const onSubmit = useCallback(() => {
    loginApi({
      email: loginId,
      password: loginPassword,
    }).then((result) => {
      if (result.status === 200) {
        // 테스트용 api에서는 jwt토큰 값만 내려오고 있음.
        // 유저정보(name)이 필요해서 찐api나오면 요청해야함
        setItem("AUTH", result.data);
        navigate("/main");
        // TODO-GOGI : api나오면 redux상태관리 로직도 추가
      }
    });

    // 임시 로그인 코드(테스트용)
    // if (loginId === user.id && loginPassword === user.password) {
    //   dispatch(
    //     login({
    //       id: user.id,
    //       name: user.name,
    //       loggedIn: true,
    //     })
    //   );
    //   window.location.pathname = "/main";
    // }
  }, [loginId, loginPassword]);

  return (
    <>
      {/* 네비게이션 바  */}
      <NavBar />
      <Main>
        <MainDiv>
          <Title title="로그인" />
          <Form getUserInfo={getUserInfo} onSubmit={onSubmit} />
          <LineDiv />
          <SocialLoginText>SNS 계정으로 로그인</SocialLoginText>
          <SocialLogin />
        </MainDiv>
      </Main>
    </>
  );
};

export default Login;

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
  padding-top: 100px;
  box-sizing: border-box;
`;

const LineDiv = styled.div`
  width: 438px;
  height: 1px;
  background-color: #dbdbdb;
  margin-top: 28px;
`;

const SocialLoginText = styled.h4`
  margin-top: 40px;
  font-weight: 400;
  font-family: var(--font-hunmin);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
