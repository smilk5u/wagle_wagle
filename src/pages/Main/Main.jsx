import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import mainBg from "../../assets/bg_main.png";
import mainHouse from "../../assets/main_house.png";
import CatImg from "../../assets/Cats.svg";
import RightSide from "../../component/RightSide/RightSide";
import GiwaModal from "../../component/Modal/GiwaModal/GiwaModal";
import Completed from "../../component/Popup/Completed";
import MainAside from "../../component/MainAside/MainAside";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openNav, setOpenNav] = useState(true);
  const [openMakeup, setOpenMakeup] = useState(false);
  // 테스트용 - 수정예정
  const [background, setBackground] = useState("day");
  const changeBackground = (e) => {
    setBackground(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    // jwt토큰을 넣어서 get요청하는 api호출
    // jwtTestApi().then((result) => {
    //   alert(result.data);
    // });
  }, []);

  const openMakeupHouse = () => {
    setOpenNav(false);
    setTimeout(() => {
      setOpenMakeup(true);
    }, 300);
  };

  const closeMakeupHouse = () => {
    setOpenMakeup(false);
    setTimeout(() => {
      setOpenNav(true);
    }, 300);
  };
  return (
    <>
      {openModal ? <GiwaModal onXBtnClick={() => setOpenModal(false)} /> : null}
      <NavBar isShowing={openNav} />
      <ExDiv background={background === "day" ? mainBg : null}>
        <StyledMain>
          <HouseBox className={openMakeup ? "left" : null}>
            <CatImgDiv />
          </HouseBox>
        </StyledMain>
        <RightSide
          openMakeup={openMakeup}
          xBtnClickHandler={closeMakeupHouse}
          setBackground={changeBackground}
        ></RightSide>
        {openMakeup ? null : <button onClick={openMakeupHouse}>클릭</button>}
        {openModal ? null : (
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            style={{ marginBottom: "50px" }}
          >
            기와선택
          </button>
        )}
      </ExDiv>
      {/* {openMakeup ? null : <MainAside className="/>} */}
      <MainAside openMakeup={openMakeup} />
      {/* <MainAside/> */}
      {/* 기와 등록 완료 팝업창 start */}
      {/* <Completed/> */}
      {/* 기와 등록 완료 팝업창 end */}
    </>
  );
};

export default Main;

const ExDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.background});
  ${(props) => (!props.background ? "background-color: #8585fd;" : null)}
  background-size: cover;
  position: relative;
  overflow: hidden;
  > button {
    position: absolute;
    bottom: 100px;
    left: 100px;
  }
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
  left: calc(50% - 300px);
  top: 200px;
  transition: all ease-in-out 1s;
  &.left {
    left: 285px;
  }
`;

const CatImgDiv = styled.div`
  position: absolute;
  top: 95px;
  left: 400px;
  width: 100px;
  height: 100px;
  background: url(${CatImg}) no-repeat;
`;
