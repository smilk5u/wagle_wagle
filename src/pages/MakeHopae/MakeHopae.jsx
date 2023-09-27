import { useCallback, useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import Title from "../../component/Title/Title";
import { InputText } from "../../component/Input/Input";
import { validHopae, IsTrue, IsFalse, CheckInfo } from "../../component/ValidTest/ValidTest";
import { ButtonActDeact } from "../../component/Button/Button";
import { makeHopae } from "../../redux/actions/userActions";
import { makeHopaeApi } from "../../apis/user";
import { setItem } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";


const MakeHopae = () => {

  // 백엔드 통신 변수 선언
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 변수
  const [data, setData] = useState({
    userId: -1,
    hopae: "",
    isHopae: false,
  });


  // 업데이트 함수
  const updateData = useCallback(
    (name, value) => {
      setData({ ...data, [name]: value });
    },
    [data]
  );


  // 경고 메시지 변수
  // 위 변수와 함께 useEffect 안에서 업데이트 할 때
  // 변수가 업데이트 되지 않는 문제 발생.
  // 변수 분리로 문제 해결
  const [hopaeWarn, setHopaeWarn] = useState("");

  // 조건에 따른 호패 경고 메시지
  useEffect(() => {
  
    // 호패명이 없는 경우
    if (data.hopae == ""){
      updateData("isHopae", false);
    }

    // 호패명이 있는 경우
    else{

      // 최대 8자 이하로 작성해 주세요.
      if (data.hopae.length > 8){
        updateData("isHopae", false);
        setHopaeWarn("최대 8자 이하로 작성해 주세요.");
      }

      // 8자 이하인 경우
      else{

        // 호패 한글 여부 검사
        let isHopae = validHopae(data.hopae);
        updateData("isHopae", isHopae);
        
        // 한글로 구성되지 않은 호패인 경우
        if (!isHopae){
          setHopaeWarn("호명은 한글만 사용할 수 있습니다.");
        }
      }
    }

    console.log(data);
  }, [data.hopae]); // 호패명 변동될 경우에만


  // '기와집 만들러 가기' 버튼 클릭 이벤트
  const onSubmit = () => {
    makeHopaeApi({
      userId: data.userId,
      userName: data.hopae,
    }).then((result) => {
      if (result.status === 200) {
        setItem("AUTH", result.data.data.accessToken);
        dispatch(
          makeHopae({
            userId: result.data.data.userId,
            userName: result.data.data.userName,
          })
        );
        navigate("/main");
        return;
      }
    });
  };

  return (
    <>
      <NavBar />
      
      <Main>
        <MainDiv>

          <MainDivTop>

            {/* Title */}
            <Title title="호패만들기" />
            <Sub>{"자네, 이곳은 처음이요?\n이곳은 호패가 없으면 들어갈 수가 없다네."}</Sub>

          </MainDivTop>


          <MainDivBottom>

            {/* 호패명 */}
            <InputText
              placeholder="호명을 적어주시오."
              dataName="hopae"
              updateData={updateData}
            />

            {/* 호패명 판별 */}
            {(data.hopae !== "") 
              
              ? ((data.isHopae) 
                ? (<IsTrue>유효한 호패입니다.</IsTrue>) 
                : (<IsFalse>{hopaeWarn}</IsFalse>)
              ) 
              
              : (         
                <CheckInfo>
                  <span>* </span>
                  호명은 한글만 사용 가능해요.
                </CheckInfo>
              )
            }

            {/* 버튼 */}
            <ButtonActDeact 
              onClick={onSubmit}
              disabled={!data.isHopae}
            >
              기와집 만들러 가기
            </ButtonActDeact>

          </MainDivBottom>

        </MainDiv>
      </Main>
    </>
  );
};

export default MakeHopae;

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
  padding-top: 50px;
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
  font-weight: 400;
  line-height: 22px;

  text-align: center;
  white-space: pre-line;  // 문자열에서 \n 명령어 인식되도록
`;
