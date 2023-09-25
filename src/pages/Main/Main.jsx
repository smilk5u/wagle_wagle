import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import RightSide from "../../component/RightSide/RightSide";
import GuestBook from "../../component/RightSide/GuestBook";
import GiwaModal from "../../component/Modal/GiwaModal/GiwaModal";
import Completed from "../../component/Popup/Completed";
import BottomSide from "../../component/BottomSide/BottomSide";
import GiwaButton from "../../component/GiwaButton/GiwaButton";
import MainBg from "../../component/MainBg/MainBg";
import mainHouse from "../../assets/main/giwa_house_indigo.png";
import haetaeImg from "../../assets/main/haetae_img.png";
import taegeukgi from "../../assets/main/taegeukgi.png";
import Capture from "../../component/Popup/Capture";
import Speech from "../../component/Speech/Speech";
import { useBgColor } from "../../contexts/BackgroundColor"; // Bg Color Context
import { useParams, useSearchParams } from "react-router-dom";
import { getGiwaHouseApi, getGiwaListApi } from "../../apis/giwa";
import { useSelector } from "react-redux";

const Main = () => {
  const { url } = useParams();
  const userInfo = useSelector((state) => state.userReducer);
  const { bgColor, changeBgColor } = useBgColor(); // BG Color context
  const [openModal, setOpenModal] = useState(false); // 기와선택
  const [openNav, setOpenNav] = useState(true); // 네비
  const [openMakeup, setOpenMakeup] = useState(false); // 기와집 꾸미기
  const [openGusetBook, setOpenGusetBook] = useState(false); // 방명록 모달창
  const [capturePopBol, setCapturePopBol] = useState(false); // 캡쳐 팝업
  const [completedGiwa, setCompletedGiwa] = useState(false); // 기와 등록 팝업창
  const [giwaHouse, setGiwaHouse] = useState({}); //기와집 상태관리
  const [selectedGiwa, setSelectedGiwa] = useState(null);
  const [giwaList, setGiwaList] = useState([]);

  // 데이터가 없어서 임시 데이터 지정해놓음 삭제 예정
  const mockData = 2;
  useEffect(() => {
    // 유저 데이터에 broadId가 없어서 임시데이터 넣어놓음 삭제 예정
    // const requestData = url ? url : userInfo.broadId;
    const requestData = url ? url : mockData;
    getGiwaHouseApi(requestData).then((result) => {
      if (result.status === 200) {
        setGiwaHouse(result.data);
        return;
      } else {
        alert("기와집이 없습니다. 생성해주세요."); //임시로 넣어놓음!
        return;
      }
    });
  }, []);

  useEffect(() => {
    if (!giwaHouse.id) return;
    getGiwaListApi({
      broadId: giwaHouse.id,
      reverse: true,
    }).then((result) => {
      if (result.status === 200) {
        setGiwaList(result.data);
      }
    });
  }, [giwaHouse.id]);

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
   * 기와집 꾸미기 이벤트와 비슷한데 합칠 수 있는 방법이 있을지....ㅠ
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
      {openModal ? (
        <GiwaModal
          onXBtnClick={() => setOpenModal(false)}
          setCompletedGiwa={setCompletedGiwa}
        />
      ) : null}
      <NavBar isShowing={openNav} />
      <ExDiv $bgColor={bgColor}>
        <StyledMain>
          <HouseBox className={openMakeup || openGusetBook ? "left" : null}>
            {/* 말풍선 start */}
            <Speech setOpenModal={setOpenModal} />
            {/* 말풍선 end */}
            {/* 기와 버튼 start */}
            <GiwaButton
              setOpen={openGusetBookModal}
              changeGiwa={setSelectedGiwa}
              giwaList={giwaList.slice(0, 12)}
            />
            {/* 기와 버튼 end */}
            <img className="heatae" src={haetaeImg} alt="해태" />
            <img className="taegeukgi" src={taegeukgi} alt="태극기" />
          </HouseBox>
        </StyledMain>
        <RightSide
          openMakeup={openMakeup}
          xBtnClickHandler={closeMakeupHouse}
          updateFunction={() => {}}
          btnText={"기와집 꾸미기 완료"}
        ></RightSide>
        {/* 방명록 start */}
        <GuestBook
          openGusetBook={openGusetBook}
          xBtnClickHandler={closeGusetBookModal}
          selectedGiwa={selectedGiwa}
        ></GuestBook>
        {/* 방명록 end */}
        <BottomSide
          openMakeup={openMakeup}
          openGusetBook={openGusetBook}
          openMakeupHouse={openMakeupHouse}
          setCapturePopBol={setCapturePopBol}
        />
        {/* 배경 start */}
        <MainBg openMakeup={openMakeup} openGusetBook={openGusetBook} />
        {/* 배경 end */}
        <Test2 onClick={changeBgColor}>밤/낮(toggle)</Test2>
      </ExDiv>

      {/* 캡쳐 팝업 start */}
      {capturePopBol && <Capture setCapturePopBol={setCapturePopBol} />}
      {/* 캡쳐 팝업 end */}

      {/* 기와 등록 완료 팝업창 start */}
      {completedGiwa && <Completed setCompletedGiwa={setCompletedGiwa} />}
      {/* 기와 등록 완료 팝업창 end */}
    </>
  );
};

export default Main;

export const ExDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    158deg,
    ${({ $bgColor }) =>
      $bgColor ? "#FFFEF9 0%, #FFF8DC 100%" : " #868DCC 20%, #313557 95%"}
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
  left: 120px;
  top: 18%;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all ease-in-out 1s;
  z-index: 2;
  > img {
    position: absolute;
    &.heatae {
      right: 37%;
      top: 11.7%;
    }
    &.taegeukgi {
      left: -14%;
      top: 18%;
    }
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
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
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
  left: 0;
  top: 0;
  font-size: 20px;
  font-weight: 700;
  z-index: 9999;
`;
