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
import CopyLink from "../../component/Popup/CopyLink";
import { useBgColor } from "../../contexts/BackgroundColor"; // Bg Color Context
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { getGiwaHouseApi, getGiwaListApi } from "../../apis/giwa";
import { useSelector } from "react-redux";
import ModalBasic from "../../component/Modal/ModalBasic";
import Modal from "../../component/Modal/Modal";
import Warning from "../../component/Warning/Warning";

const Main = () => {
  const location = useLocation();
  const { url } = useParams();
  const userInfo = useSelector((state) => state.userReducer);
  const { bgColor, changeBgColor } = useBgColor(); // BG Color context
  const [openModal, setOpenModal] = useState(false); // 기와선택
  const [openNav, setOpenNav] = useState(true); // 네비
  const [openMakeup, setOpenMakeup] = useState(false); // 기와집 꾸미기
  const [openGusetBook, setOpenGusetBook] = useState(false); // 방명록 모달창
  const [copyLinkPop, setCopyLinkPop] = useState(false); // 링크복사 팝업창
  const [capturePopBol, setCapturePopBol] = useState(false); // 캡쳐 팝업창
  const [completedGiwa, setCompletedGiwa] = useState(false); // 기와 등록 팝업창
  const [giwaHouse, setGiwaHouse] = useState({}); //기와집 상태관리
  const [selectedGiwa, setSelectedGiwa] = useState(null);
  const [giwaList, setGiwaList] = useState([]);
  const [isVisitorClick, setIsVisitorClick] = useState(false);

  const previousPath = location.state ? location.state.from : null;

  // 데이터가 없어서 임시 데이터 지정해놓음 삭제 예정
  const mockData = 2;
  useEffect(() => {
    if (previousPath === "/makeGiwaHouse") {
      setCopyLinkPop(true);
    }
    // 유저 데이터에 broadId가 없어서 임시데이터 넣어놓음 삭제 예정
    // const requestData = url ? url : userInfo.broadId;
    const requestData = url ? url : mockData;
    getGiwaHouseApi(requestData).then((result) => {
      if (result.data.status === "SUCCESS") {
        setGiwaHouse(result.data.data);
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
    })
      .then((result) => {
        if (result.data.status === "SUCCESS") {
          setGiwaList(result.data.data);
        } else {
          throw new Error("서버에서 데이터를 가져오는 데 문제가 발생했습니다.");
        }
      })
      .catch((error) => {
        console.error("오류:", error);
      });
  }, [giwaHouse]);

  useEffect(() => {
    if (!isVisitorClick) return;

    setTimeout(() => {
      setIsVisitorClick(false);
    }, 3000);
  }, [isVisitorClick]);

  /* 기와집 꾸미기 모달창 */
  const openMakeupHouse = () => {
    setOpenNav(false);
    setOpenMakeup(true);
  };

  const closeMakeupHouse = () => {
    setOpenNav(true);
    setOpenMakeup(false);
  };

  /* 방명록 모달창 */
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
      {previousPath === "/makeGiwaHouse" ? (
        <Modal>
          {/* 수정해야함 임시 */}
          <ModalContent>
            <Link to="/main">널리 알리기</Link>
          </ModalContent>
        </Modal>
      ) : null}
      {openModal ? (
        <GiwaModal
          onXBtnClick={() => setOpenModal(false)}
          setCompletedGiwa={setCompletedGiwa}
          giwaHouseId={giwaHouse.id}
        />
      ) : null}
      <NavBar isShowing={openNav} />
      <ExDiv $bgColor={bgColor}>
        <StyledMain>
          <HouseBox className={openMakeup || openGusetBook ? "left" : null}>
            <Warning testActive={isVisitorClick} />
            {/* 말풍선 start */}
            <Speech
              setOpenModal={setOpenModal}
              url={url} //url이 있는 경우(방문자), url이 없는 경우(주인)
              giwaLength={giwaList.length} //기와의 개수
            />
            {/* 말풍선 end */}
            {/* 기와 버튼 start */}
            <GiwaButton
              setOpen={openGusetBookModal}
              changeGiwa={setSelectedGiwa}
              giwaList={giwaList.slice(0, 12)}
              setIsVisitorClick={setIsVisitorClick}
              url={url}
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
          username={userInfo.username}
        ></GuestBook>
        {/* 방명록 end */}
        <BottomSide
          openMakeup={openMakeup}
          openGusetBook={openGusetBook}
          openMakeupHouse={openMakeupHouse}
          setCapturePopBol={setCapturePopBol}
          setPopup={setCopyLinkPop}
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

      {/* 링크 복사 팝업창 start */}
      {copyLinkPop && <CopyLink setCopyLinkPop={setCopyLinkPop} />}
      {/* 링크 복사 팝업창 end */}
    </>
  );
};

export default Main;

const ModalContent = styled.div`
  width: 388px;
  height: 200px;
  background-color: white;
  position: relative;
  > img {
    position: absolute;
    top: -50px;
  }
`;

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

const WarnMessage = styled.div`
  width: 378px;
  height: 54px;
  position: absolute;
  left: calc(50% - 250px);
  top: -70px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ece0b9;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(244, 233, 203, 0.5);
  backdrop-filter: blur(5px);
  font-family: var(--font-hunmin);
  color: #222;
  font-size: 16px;
  font-weight: 400;
  line-height: 54px;
  text-align: center;
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
