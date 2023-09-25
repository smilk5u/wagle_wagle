import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../component/Form/Form";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Title from "../../component/Title/Title";
import { joinApi, checkEmailApi } from "../../apis/user";
import ModalBasic from "../../component/Modal/ModalBasic";
import { InputText, InputPwd } from "../../component/Input/Input";
import { ButtonActDeact } from "../../component/Button/Button";
import { validEmail, validPwd, IsTrue, IsFalse, CheckInfo } from "../../component/ValidTest/ValidTest";
import axios from 'axios';

// const Join = () => {
//   const [{ userId, password, checkPassword }, setJoinInfo] = useState({
//     userId: "",
//     password: "",
//     checkPassword: "",
//   });

//   const [isValid, setIsValid] = useState({
//     isEmail: false,
//     isPassword: false,
//     isPasswordConfirm: false,
//   });

//   //// visibleModal

//   // 변수
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // 함수
//   const visibleFtn = (value) => {
//     setIsModalOpen(value);
//   };

//   const joinUserInfo = useCallback((form) => {
//     setJoinInfo({
//       userId: form.userId,
//       password: form.password,
//       checkPassword: form.checkPassword,
//     });
//   }, []);

//   const validUserInfo = useCallback(
//     (name, value) => {
//       setIsValid({ ...isValid, [name]: value });
//     },
//     [isValid]
//   );

//   const onJoinSubmit = () => {
//     if (isValid.isEmail && isValid.isPassword && isValid.isPasswordConfirm) {
//       joinApi({
//         email: userId,
//         password: password,
//       }).then((result) => {
//         if (result.status === 200) {
//           setIsModalOpen(true);
//         }
//         // TODO-GOGI: 에러처리부분 백엔드와 얘기해서 추가 로직 구현해야함
//         if (result.status === 500) {
//           console.log("error500");
//         }
//       });
//     }
//   }; 

//   return (
//     <>
//       {/* Modal */}
//       {(isModalOpen)
//         ? <ModalBasic
//           msg="회원가입이 완료되었습니다."
//           buttonText="확인"
//           linkPath="/login"
//           visibleFtn={visibleFtn}
//         />
//         : null}

//       <NavBar />
//       <Main>
//         <MainDiv>
//           <Title title="회원가입" />
//           <Sub>회원가입에 필요한 정보를 입력해주세요.</Sub>
//           <Form
//             joinUserInfo={joinUserInfo}
//             onSubmit={onJoinSubmit}
//             validUserInfo={validUserInfo}
//           />
//           <ToLogin>
//             이미 와글와글 계정이 있으신가요? <Link to="/login">로그인하기</Link>
//           </ToLogin>
//         </MainDiv>
//       </Main>
//     </>
//   );
// };

const JoinRefine = () => {
  const navigate = useNavigate();

  //// data

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
  });

  // 함수
  // 실시간 변수 업데이트
  // 변수 업데이트는 렌더링 끝나고 적용되는 듯하다.
  useEffect(() => {
    setIsValid({
      ...isValid,
      isEmail: validEmail(data.userId),
      isPassword: validPwd(data.pwd),
      isPasswordConfirm: (data.pwd === data.confirmPwd)
    });
  }, [data]);



  //// 회원가입

  // 회원가입 가능 판단
  const onJoinSubmit = (e) => {
    e.preventDefault();

    if (isValid.isEmail && isValid.isPassword && isValid.isPasswordConfirm) {
      console.log(data.userId)
      joinApi({
        email: data.userId,
        password: data.pwd,
        username: "닉네임2",
      }).then((result) => {
        console.log(result.status)
        if (result.status === 200) {
          setIsModalOpen(true);
        }
        // TODO-GOGI: 에러처리부분 백엔드와 얘기해서 추가 로직 구현해야함
        if (result.status === 500) {
          console.log("error500");
        }
      });

      // 로그인 화면으로 이동
      // handleClick();
    }
  };

  const getUser = async () => {
    console.log(data.userId,data.pwd)
    try {
      const response = await axios.post('https://port-0-backend-server-eu1k2lll0e0u3n.sel4.cloudtype.app/api/v1/users/signup', {
        email: data.userId,
        password: data.pwd,
      })
      console.log(response);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  }

  const checkJoin = async () => {
    try {
      const response = await axios.get('https://port-0-backend-server-eu1k2lll0e0u3n.sel4.cloudtype.app/api/v1/users/duplicate-check', {
        params: {
          email: 'juju@naver.com',
        },
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  // 회원가입 후 로그인 화면 이동
  const handleClick = () => {
    navigate("/Login");
  }

  //// visibleModal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 함수
  const visibleFtn = (value) => {
    setIsModalOpen(value);
  };

  /* 이메일 중복확인 */
  const onEmailCheck = () => {
    const params = { email: data.userId };
    console.log(data.userId)

    // checkEmailApi(data.userId).then((result) => {
    //   console.log(result)
    //   // if (result.status === 200) {
    //   // }
    //   // if (result.status === 500) {
    //   //   console.log("500");
    //   // }
    // });
  }


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

      <Main>
        <MainDiv>
          <span onClick={getUser} style={{ color: '#fff', fontSize: '20px' }}>회원가입</span>
          <span onClick={checkJoin} style={{ color: '#fff', fontSize: '20px' }}>중복확인</span>

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

export default JoinRefine;


const Main = styled.main`
  background-color: #222;
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
