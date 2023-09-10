import React, { useEffect, useState } from "react"; 
import { styled } from "styled-components"; // 스타일
import NavBar from "../../component/NavBar/NavBar"; // 네비게이션
import mainBg from "../../assets/bg_main.png"; // 이미지
import mainHouse from "../../assets/main_house.png"; // 이미지
import RightSide from "../../component/RightSide/RightSide"; // 
import { jwtTestApi } from "../../apis/user";
import Input from './../../component/Input/Input';

const Main = () => {
  const [openNav, setOpenNav] = useState(true);  // 오른쪽네비 열기닫기
  const [openMakeup, setOpenMakeup] = useState(false); // 만들기 열기, 닫기

  useEffect(() => {
    // jwt토큰을 넣어서 get요청하는 api호출
    // jwtTestApi().then((result) => {
    //   alert(result.data);
    // });
  }, []);
  
  /* 만들기 시작시  */
  const openMakeupHouse = () => {
    setOpenNav(false); // 네비게이션 닫힘
    setTimeout(() => {
      setOpenMakeup(true); // 하우스 left
    }, 300);
  };
  return (
    <>
      {/* 위 네비게이션이 내려와있는지 아닌지 체크함 */}
      <NavBar isShowing={openNav} /> 
      <ExDiv>
        <StyledMain>
          {/* 오픈시 이미지 class left 추가 */}
          <HouseBox className={openMakeup ? "left" : null}></HouseBox>
        </StyledMain>
        <RightSide openMakeup={openMakeup}></RightSide>
        {openMakeup ? null : (
          <button onClick={openMakeupHouse}>
            클릭
            <span>안녕ㅋ</span>
          </button>
        )}
      </ExDiv>
    </>
  ); 
};

export default Main;

const ExDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mainBg});
  background-size: cover;
  position: relative;
  overflow: hidden;
  > button { position: absolute; bottom: 100px; left: 100px; }
  span { background-color: red; position: relative; }
`;

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;  
`;

const HouseBox = styled.div`
  width: 800px;
  height: 700px;
  background: url(${mainHouse}) no-repeat;
  background-size: 800px 700px;
  position: absolute;
  left: 620px;
  top: 200px;
  transition: all ease-in-out 1s;
  &.left {
    left: 285px;
  }
`;
