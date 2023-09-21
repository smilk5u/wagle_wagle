import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import RightSide from "../../component/RightSide/RightSide";
import GuestBook from "../../component/RightSide/GuestBook";
import GiwaModal from "../../component/Modal/GiwaModal/GiwaModal";
import Completed from "../../component/Popup/Completed";
import BottomSide from "../../component/BottomSide/BottomSide";
import GiwaButton from "../../component/GiwaButton/GiwaButton";
import mainHouse from "../../assets/main/giwa_house_indigo.png";
import haetaeImg from "../../assets/main/haetae_img.png";
import taegeukgi from "../../assets/main/taegeukgi.png";
import pineTreeLeft from "../../assets/main/pine_tree_left.png";
import pineTreeRight from "../../assets/main/pine_tree_right.png";
import Capture from "../../component/Popup/Capture";
import { useBgColor } from "../../contexts/BackgroundColor"; // Bg Color Context

const Main = () => {
  const { bgColor, changeBgColor } = useBgColor(); // BG Color context
  const [openModal, setOpenModal] = useState(false); // 기와선택
  const [openNav, setOpenNav] = useState(true); // 네비
  const [openMakeup, setOpenMakeup] = useState(false); // 기와집 꾸미기
  const [openGusetBook, setOpenGusetBook] = useState(false); // 방명록 모달창
  const [capturePopBol, setCapturePopBol] = useState(false); // 캡쳐 팝업

  /** 😀 juju
    - background useState는 하위 컴포넌트에 전역적으로 사용하기 위해...?
      Context 로 사용하였습니다 context 경로 --> src/contexts/BackgroundColor    

    // 테스트용 - 수정예정 
    // const [background, setBackground] = useState(true);
    // const changeBackground = (e) => {
    //   setBackground(e.target.value);
    // };
  */

  useEffect(() => {
    // main페이지에서는 기와집을 불러오는 get요청을 해야함
    // 해당 api 확인되면 추가 예정
  }, []);

  const openMakeupHouse = () => {
    setOpenNav(false);
    setOpenMakeup(true);
    /** 😀 juju
      - setTimeout 사용시 속도가 안맞아서 일단 주석처리 해놓겠습니다
      
      // setTimeout(() => {
      //   setOpenMakeup(true);
      // }, 300);
    */
  };

  const closeMakeupHouse = () => {
    setOpenNav(true);
    setOpenMakeup(false);
    /** 😀 juju
      - setTimeout 사용시 속도가 안맞아서 일단 주석처리 해놓겠습니다

      // setTimeout(() => {
      //   setOpenNav(true);
      // }, 300);
    */
  };

  /** 😀 juju
   * 기와 클릭 시 방명록 오픈
   * 기와집 꾸미기 비슷한데 합칠 수 있는 방법이 있을지....ㅠ
  */
  const openGusetBookModal = () => {
    setOpenNav(false);
    setOpenGusetBook(true);
  };
  const closeGusetBookModal = () => {
    setOpenNav(true);
    setOpenGusetBook(false);
  };

  return (
    <>
      {openModal ? <GiwaModal onXBtnClick={() => setOpenModal(false)} /> : null}
      <NavBar isShowing={openNav} />
      <ExDiv $bgColor={bgColor}>
        <StyledMain>
          <HouseBox className={openMakeup || openGusetBook ? "left" : null}>
            <HaetaeWrap>
              <img src={haetaeImg} alt="해태" />
            </HaetaeWrap>
            <img src={taegeukgi} alt="태극기" />
            {/* 기와 버튼 start */}
            <GiwaButton setOpen={openGusetBookModal} />
            {/* 기와 버튼 end */}
          </HouseBox>
        </StyledMain>
        <RightSide
          openMakeup={openMakeup}
          xBtnClickHandler={closeMakeupHouse}
          updateFunction={() => { }}
        ></RightSide>

        {/* 방명록 start */}
        <GuestBook
          openGusetBook={openGusetBook}
          xBtnClickHandler={closeGusetBookModal}
        ></GuestBook>
        {/* 방명록 end */}

        <Test>
          {openMakeup || openGusetBook ? null : (
            <button onClick={openMakeupHouse}>사용자 : 기와집 만들기</button>
          )}
          {openModal ? null : (
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              style={{ marginBottom: "50px" }}
            >
              방문자 : 기와선택
            </button>
          )}
        </Test>
        {
          // console.log(openGusetBook)
        }
        <BottomSide
          openMakeup={openMakeup}
          openGusetBook={openGusetBook}
          openMakeupHouse={openMakeupHouse}
          setCapturePopBol={setCapturePopBol}
        />
        <Tree>
          <img src={pineTreeLeft} alt="왼쪽 소나무" />
          <img src={pineTreeRight} alt="오른쪽 소나무" />
        </Tree>
        <Test2 onClick={changeBgColor}>밤/낮(toggle)</Test2>
      </ExDiv>

      {/* 캡쳐 팝업 start */}
      {capturePopBol && <Capture setCapturePopBol={setCapturePopBol} />}
      {/* 캡쳐 팝업 end */}

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
  background: linear-gradient(
    140deg,
    ${({ $bgColor }) => $bgColor
    ? "#FFFEF9 0%, #FFF8DC 100%"
    : " #8C92CA 0%, #31365B 100%"}
  );
  position: relative;
  overflow: hidden;
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HouseBox = styled.div`
  width: 770px;
  height: 679px;
  background: url(${mainHouse}) no-repeat;
  background-size: cover;
  position: absolute;
  left: 7%;
  top: 12%;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all ease-in-out 1s;
  z-index: 2;
  > img {
    position: absolute;
    left: -14%;
    top: 18%;
  }
  &.left {
    left: -500px;
  }
`;

const HaetaeWrap = styled.div`
  width: 120px;
  position: absolute;
  top: 11%; 
  left: 47%;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Tree = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  > img {    
    position: absolute;
    &:nth-of-type(1) {
      max-width: 460px;
      left: 0;
      bottom: 0;
      z-index: 2;
    }
    &:nth-of-type(2) {
      max-width: 410px;
      right: 0;
      top: 13%;
    }
  }
`;

const Test = styled.div`
  position: relative;
  z-index: 10;
  > button {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Test2 = styled.button`
  position: absolute;
  left:0; top:0;
  font-size: 20px;
  font-weight: 700; 
  z-index: 9999;
`;
