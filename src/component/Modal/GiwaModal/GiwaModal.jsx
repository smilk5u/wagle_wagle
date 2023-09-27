import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import Modal from "../Modal";
import SelectGiwa from "./SelectGiwa";
import { ButtonActDeact } from "../../Button/Button";
import WriteGuestText from "./WriteGuestText";
import NameContain from "./NameMade";
import { ReactComponent as CloseBtn } from "../../../assets/common/closeBtn.svg";
import { ReactComponent as LeftArrow } from "../../../assets/common/ic_left_arrow.svg";
import giwaComplated from "../../../assets/modal/giwa_complated.png";

const GiwaModal = ({ onXBtnClick, setCompletedGiwa }) => {
  const selectedGiwa = useSelector((state) => state.giwaReducer);
  const [pageNum, setPageNum] = useState(1);

  return (
    <Modal>
      <ChooseBox>
        <XBtnBox>
          <CloseBtn width={36} height={37} fill="black" onClick={onXBtnClick} />
        </XBtnBox>
        {pageNum === 1 ? (
          <>
            <TitleField>
              <span>하나.</span> 기와를 선택해 주시오.
            </TitleField>
            <SelectGiwa />
            <ButtonActDeact
              disabled={!selectedGiwa.number}
              onClick={() => {
                setPageNum(2);
              }}
              style={{
                width: "300px",
                height: "54px",
                marginTop: "0",
                marginBottom: "0",
              }}
            >
              {!selectedGiwa.number
                ? "기와를 선택해 주시오."
                : "이 기와로 선택하기"}
            </ButtonActDeact>
          </>
        ) : pageNum === 2 ? (
          <>
            <TitleField>
              <span>둘.</span> 방명록을 써주시오.
            </TitleField>
            <WriteGuestText />
            <ExDiv>
              <GoBackBox>
                <GoBackBtn onClick={() => setPageNum(1)}>
                  <LeftArrow />
                </GoBackBtn>
                <GiwaBox>
                  <img src={giwaComplated} alt="기와 선택완료" />
                </GiwaBox>
              </GoBackBox>
              <ButtonActDeact
                disabled={selectedGiwa.text === ""}
                onClick={() => {
                  setPageNum(3);
                }}
                style={{ width: "300px", height: "54px", marginTop: "0" }}
              >
                {selectedGiwa.text === ""
                  ? "방명록 작성하기"
                  : "기와 등록 하러가기"}
              </ButtonActDeact>
            </ExDiv>
          </>
        ) : (
          <>
            <TitleField>
              <span>셋.</span> 이름을 남겨주시오.
            </TitleField>
            <NameContain />
            <ExDiv>
              <GoBackBox>
                <GoBackBtn onClick={() => setPageNum(2)}>
                  <LeftArrow />
                </GoBackBtn>
                <GiwaBox>
                  <img src={giwaComplated} alt="기와 선택완료" />
                </GiwaBox>
                <GiwaBox>
                  <span>가</span>
                </GiwaBox>
              </GoBackBox>
              <ButtonActDeact
                disabled={!selectedGiwa.number}
                onClick={() => {
                  onXBtnClick();
                  setCompletedGiwa(true);
                }}
                buttonText={"기와 등록하기"}
                style={{ width: "300px", height: "54px", marginBottom: "0" }}
              >
                기와 등록 하기
              </ButtonActDeact>
            </ExDiv>
          </>
        )}
      </ChooseBox>
    </Modal>
  );
};

export default GiwaModal;

const ChooseBox = styled.div`
  min-width: 1100px;
  width: 1100px;
  height: 660px;
  background-color: #fff;
  padding: 70px 80px 50px 80px;
  box-sizing: border-box;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const XBtnBox = styled.button`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 40px;
  top: 40px;
`;

const TitleField = styled.h2`
  width: 100%;
  padding-bottom: 14px;
  border-bottom: 1px solid #e0e0e0;
  font-family: var(--font-hunmin);
  font-size: 32px;
  color: #222;
  font-weight: 600;
  > span {
    color: #1748c1;
    text-align: center;
    font-family: var(--font-hunmin-saeron);
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
  }
`;

const ExDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  button {
    margin: 0;
  }
`;

const GoBackBox = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 11px;
  position: absolute;
  left: 0;
`;

const GoBackBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ededed;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    margin: 2px 0 0 -2px;
  }
`;

const GiwaBox = styled.div`
  width: 54px;
  height: 54px;
  background-color: #ededed;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 32px;
    font-weight: 400;
  }
`;
