import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import mainBg from "../../assets/bg_main.png";
import mainHouse from "../../assets/main_house.png";
import RightSide from "../../component/RightSide/RightSide";
import { jwtTestApi } from "../../apis/user";
import Input from './../../component/Input/Input';

const Main = () => {
  const [openNav, setOpenNav] = useState(true);
  const [openMakeup, setOpenMakeup] = useState(false);

  useEffect(() => {
    // jwt토큰을 넣어서 get요청하는 api호출
    jwtTestApi().then((result) => {
      alert(result.data);
    });
  }, []);

  const openMakeupHouse = () => {
    setOpenNav(false);
    setTimeout(() => {
      setOpenMakeup(true);
    }, 300);
  };
  return (
    <>
      <NavBar isShowing={openNav} />
      <ExDiv>
        <StyledMain>
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
