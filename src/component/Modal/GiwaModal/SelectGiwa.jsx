import React from "react";
import styled from "styled-components";
import { ReactComponent as Hat } from "../../../assets/Group 2852.svg";
import selectedGiwaPath from "../../../assets/selected_giwa.svg";
import SelectTitle from "../../SelectTitle/SelectTitle";
import GiwaLuck from "./GiwaLuck";
import { useDispatch, useSelector } from "react-redux";
import { selectGiwa } from "../../../redux/actions/giwaActions";

const SelectGiwa = () => {
  const dispatch = useDispatch();
  const selectedGiwa = useSelector((state) => state.giwaReducer);
  const giwaPatternItems = [
    {
      id: 1,
      giwaName: "사랑",
      imgSrc: "",
    },
    {
      id: 2,
      giwaName: "우정",
      imgSrc: "",
    },
    {
      id: 3,
      giwaName: "용기",
      imgSrc: "",
    },
    {
      id: 4,
      giwaName: "기쁨",
      imgSrc: "",
    },
    {
      id: 5,
      giwaName: "슬픔",
      imgSrc: "",
    },
    {
      id: 6,
      giwaName: "우애",
      imgSrc: "",
    },
    {
      id: 7,
      giwaName: "글자",
      imgSrc: "",
    },
    {
      id: 8,
      giwaName: "머머",
      imgSrc: "",
    },
  ];

  const handleSelectGiwa = (id) => {
    dispatch(selectGiwa(id));
  };

  const objectSelectedGiwa = giwaPatternItems.find(
    (item) => item.id === selectedGiwa.number
  );

  return (
    <Container>
      <LeftBox>
        {selectedGiwa.number ? (
          <GiwaLuck giwaName={objectSelectedGiwa.giwaName}/>
        ) : (
          <>
            <Hat />
            <Text>
              기와 무늬에는 의미가 있오.
              <br />
              옆에 기와를 선택해 보시오!
            </Text>
          </>
        )}
      </LeftBox>
      <RightBox>
        <SelectTitle title={"기와무늬"} fontSize="18px" />
        <PatternBox>
          <div>
            {giwaPatternItems.map((item) => {
              return (
                <GiwaItemBox
                  key={item.giwaName}
                  onClick={() => {
                    handleSelectGiwa(item.id);
                  }}
                  $isClicked={item.id === selectedGiwa.number}
                >
                  {item.id === selectedGiwa.number ? (
                    <ClickedBox></ClickedBox>
                  ) : null}
                </GiwaItemBox>
              );
            })}
          </div>
        </PatternBox>
      </RightBox>
    </Container>
  );
};

export default SelectGiwa;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 36px 13px;
  display: flex;
  gap: 20px;
  justify-content: space-between;  
`;

const LeftBox = styled.div`
  width: 50%;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
`;

const RightBox = styled.div`
  width: 440px;
  height: 365px;
`;

const Text = styled.p`
  color: #bbb;
  text-align: center;
  font-family: var(--font-hunmin);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
`;

const PatternBox = styled.div`
  width: 100%;
  height: 310px;
  border-radius: 20px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 30px 12px 0 30px;
  > div {
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    box-sizing: border-box;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    /* 수직 스크롤바 스타일 */
    &::-webkit-scrollbar {
      box-sizing: border-box;
      width: 8px; /* 스크롤바 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #fff; /* 스크롤바 색상 */
      border-radius: 4px; /* 스크롤바 모서리 둥글게 */
      border: 1px solid rgba(170, 170, 170, 0.1);
      /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* 마우스 호버 시 스크롤바 색상 변경 */
    }
    /* Firefox에서도 스크롤바 스타일 적용 */
    /* 수직 스크롤바 스타일 */
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }
`;

const GiwaItemBox = styled.button`
  width: 110px;
  height: 110px;
  border-radius: 6px;
  background-color: #f4f4f4;
  overflow: hidden;
`;

const ClickedBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  background: url(${selectedGiwaPath}) no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
