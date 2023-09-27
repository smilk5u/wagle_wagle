import { useCallback, useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import Title from "../../component/Title/Title";
import { IsTrue, IsFalse } from "../../component/ValidTest/ValidTest";
import { InputPwd } from "../../component/Input/Input";
import Button from "../../component/Button/Button";

const ConfirmPwd = () => {

  //// data

  // 변수
  const [isConfirmPwd, setIsConfirmPwd] = useState(true);

  const [data, setData] = useState({
    confirmPwd: "",
  });

  // 함수
  const updateData = useCallback(
    (name, value) => {
      setData({ ...data, [name]: value });
    },
    [data]
  );


  // 함수
  // 실시간 변수 업데이트
  // 값이 바뀌는 동안은 true 유지
  // 값이 써지는 동안 에러 메시지 출력 없애기 위함
  useEffect(() => {
    setIsConfirmPwd(true);
    console.log(data);
  }, [data.confirmPwd]);


  // '비밀번호 변경' 버튼 클릭 시 이벤트
  const handleClick = ()=>{
    
    // 기존 비밀번호 가져오기
    let pwd = "123";

    // 비밀번호 일치할 때
    if (pwd === data.confirmPwd){
    
        // 비밀번호 변경 화면 이동
        window.location.href = "/changePwd"
    }

    // 비밀번호 다를 때
    else{

        // 에러 메시지 출력
        setIsConfirmPwd(false);
    }
  }


  return (
    <>
      <NavBar />
      
      <Main>
        <MainDiv>

          <MainDivTop>

            {/* Title */}
            <Title title="비밀번호 확인" />
            <Sub>{"비밀번호를 변경하시나요?\n기존에 사용한 비밀번호 확인 후 변경이 가능해요."}</Sub>

          </MainDivTop>

          <MainDivBottom>

            {/* 비밀번호 확인 */}
            <InputPwd 
              placeholder="기존 비밀번호를 적어주세요."
              dataName="confirmPwd"
              updateData={updateData}
            />

            {/* 비밀번호 확인 판별 */}
            {(data.confirmPwd !== "") ? (
              (isConfirmPwd) ? (
                <IsTrue></IsTrue>
              ) : (
                <IsFalse>비밀번호를 잘못 입력했습니다.</IsFalse>
              )
            ) : <IsFalse>비밀번호를 입력해 주세요.</IsFalse>}

            {/* 버튼 */}
            <Button onClick={handleClick}>
              비밀번호 변경하기
            </Button>

          </MainDivBottom>

        </MainDiv>
      </Main>
    </>
  );
};

export default ConfirmPwd;


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
  padding-top: 100px;
  box-sizing: border-box;
`;

const MainDivTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: 500;
  line-height: 20px;

  text-align: center;
  white-space: pre-line;  // 문자열에서 \n 명령어 인식되도록
`;