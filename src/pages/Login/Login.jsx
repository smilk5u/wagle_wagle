import styled from "styled-components";
import Form from "../../component/Form/Form";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import { useCallback, useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import Title from "../../component/Title/Title";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { loginApi } from "../../apis/user";
import { setItem } from "../../utils/localStorage";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { InputText, InputPwd } from "../../component/Input/Input";
import Button from "../../component/Button/Button";
import CheckBox from "../../component/CheckBox/CheckBox";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form의 input정보를 하위컴포넌트에서 받아서 상태값으로 변경해주는 과정
  const [{ loginId, loginPassword }, setLoginInfo] = useState({
    loginId: "test1111@naver.com",
    loginPassword: "qwer1234",
  });
  const getUserInfo = useCallback((form) => {
    setLoginInfo({
      loginId: form.userId,
      loginPassword: form.password,
    });
  }, []);

  // submit 버튼 클릭시 실행될 함수( 나중에 백엔드 완성되면 추가 로직 구성할 예정 )
  const onSubmit = async () => {
    // api통신 예시
    // const response = await axios.post(
    //   "https://port-0-backend-server-eu1k2lll0e0u3n.sel4.cloudtype.app/api/v1/users/login",
    //   {
    //     email: loginId,
    //     password: loginPassword,
    //   }
    // );

    loginApi({
      email: loginId,
      password: loginPassword,
    }).then((result) => {
      if (result.status === 200) {
        setItem("AUTH", result.data.data.accessToken);
        dispatch(
          login({
            userId: result.data.data.userId,
            username: result.data.data.username,
          })
        );
        if (!result.data.data.isExistHopae) {
          navigate("/makeHopae");
          return;
        } else {
          navigate("/main");
        }
      }
    });
  };

  return (
    <>
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


const LoginRefine = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form의 input정보를 하위컴포넌트에서 받아서 상태값으로 변경해주는 과정
  // 변수
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    pwd: "",
  });

  // 함수
  const updateData = useCallback(
    (name, value) => {
      setLoginInfo({ ...loginInfo, [name]: value });
    },
    [loginInfo]
  );

  // // monitoring
  // useEffect(() => {

  //   console.log(loginInfo);

  // }, [loginInfo]);
  
  // submit 버튼 클릭시 실행될 함수( 나중에 백엔드 완성되면 추가 로직 구성할 예정 )
  const onSubmit = () => {
    loginApi({
      email: loginInfo.id,
      password: loginInfo.pwd,
    }).then((result) => {
      if (result.status === 200) {
        // 테스트용 api에서는 jwt토큰 값만 내려오고 있음.
        // 유저정보(name)이 필요해서 찐api나오면 요청해야함
        setItem("AUTH", result.data);
        dispatch(
          login({
            id: "아이디",
            name: "",
            data: {},
          })
        );
        navigate("/makeHopae");

        // TODO-GOGI : api나오면 redux상태관리 로직도 추가
        // TODO-GOGI : 유저 로그인 후 호패정보도 내려오면 있는지 확인 후 없다면
        // navigate("/makeHopae")
        // 호패정보가 있다면
        // navigate("/main")
      }
    });
  };

  // 회원가입 후 로그인 화면 이동
  const handleClickJoin = ()=>{
    window.location.href = "/join"
  }

  return (
    <>
      <NavBar />
      
      <Main>
        <MainDiv>

          {/* Title */}
          <Title title="로그인" />

          <MainDiv2>

            {/* Email */}
            <InputText
              placeholder="이메일을 적어주세요."
              dataName="id"
              updateData={updateData}
            />

            {/* 비밀번호 */}
            <InputPwd 
              placeholder="비밀번호를 적어주세요."
              dataName="pwd"
              updateData={updateData}
            />

            {/* 저장 기능, 비밀번호 찾기 */}
            <LoginCheckDiv>
              <CheckBox labelName="이메일, 비밀번호 저장" />
              <LinkItem to="/findPwd">비밀번호 찾기</LinkItem>
            </LoginCheckDiv>

            {/* 로그인 버튼 */}
            <Button 
              onClick={onSubmit}
            >
              로그인
            </Button>

            {/* 회원가입 페이지 이동 버튼 */}
            <Button 
              onClick={handleClickJoin}
              color="white"
            >
              회원가입
            </Button>

          </MainDiv2>
          
          {/* SNS 계정 연결 */}
          <LineDiv />
          <SocialLoginText>SNS 계정으로 로그인</SocialLoginText>
          <SocialLogin />

        </MainDiv>
      </Main>
    </>
  );
};


export default LoginRefine;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  box-sizing: border-box;
  button {
    margin: 0 0 12px;
    width: 100%;
  }
`;

const MainDiv2 = styled.div`
  margin-top: 40px;
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

const LoginCheckDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const LinkItem = styled(Link)`
  color: #9e9e9e;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  text-decoration-line: none;
  padding-bottom: 1px;
  border-bottom: 1px solid #9e9e9e;
`;