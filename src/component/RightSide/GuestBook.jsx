import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import SelectTitle from "../SelectTitle/SelectTitle";
import { ReactComponent as XIcon } from "../../assets/common/closeBtn.svg";
import { ReactComponent as Board } from "../../assets/main/board_img_3.svg";
import { ReactComponent as GiwaMeaning } from "../../assets/main/giwa_mean_1.svg";
import { getGiwaDetailApi } from "../../apis/giwa";
import { fontColor, textSort } from "../../data/giwaData";
import { koreaDate } from "../../utils/koreaDate";

const GuestBook = ({ openGusetBook, xBtnClickHandler, selectedGiwa }) => {
  const [giwa, setGiwa] = useState({});
  useEffect(() => {
    if (!selectedGiwa) return;
    getGiwaDetailApi(selectedGiwa).then((result) => {
      if (result.status === 200) {
        setGiwa(result.data);
      }
    });
  }, [selectedGiwa]);
  // const giwaFontColor = fontColor[giwa.postStyle.fontColorCode - 1];
  // const giwaTextSort = textSort[giwa.postStyle.sortCode - 1];
  const giwaCreatedDate = koreaDate(giwa.createdTime);
  console.log(giwaCreatedDate);
  return (
    <Container className={openGusetBook ? "show" : null}>
      <XBox>
        <XIcon
          width={"40px"}
          height={"40px"}
          fill="#212121"
          onClick={xBtnClickHandler}
        />
      </XBox>
      <Wrap>
        <strong>
          <span>홍길동</span>님에게
        </strong>
        <Title>
          <GiwaImg>
            <GiwaMeaning />
          </GiwaImg>
          <GiwaText>
            <b>기와의 뜻</b>
            <p>
              Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus
              mattis etiam.
            </p>
          </GiwaText>
        </Title>
        <GuestBookWrap>
          <Text
          // $fontColor={giwaFontColor}
          // $sort={giwaTextSort}
          >
            <Board />
            <p>
              {giwa.message}
              {/* 들어봐 밤이, <br />
              봄 밤이오래된 애인들과 어떻게이야기하는지꽃들이,
              <br />
              등 아래 핀 벚꽃들이서늘한 봄 비에 지면서도
              <br />
              얼마나 빛나는지 백석을 읽는 밤내일을 돌보지 않아도
              <br />
              푸근하고 아린이런 봄날, 봄밤발치에 조으는
              <br />
              짐승의 착한눈꺼풀과이불 아래 방바닥의 온기와 주전자서
              <br />
              끓는 구수한 보리차 냄새가지들 마른 울음
              <br />
              봄 밤이오래된 애인들과 어떻게이야기하는지꽃들이,
              <br />
              등 아래 핀 벚꽃들이서늘한 봄 비에 지면서도
              <br />
              얼마나 빛나는지 백석을 읽는 밤내일을 돌보지 않아도
              <br />
              푸근하고 아린이런 봄날, 봄밤발치에 조으는
              <br />
              짐승의 착한눈꺼풀과이불 아래 방바닥의 온기와 주전자서
              <br />
              끓는 구수한 보리차 냄새가지들 마른 울음
              <br />
              봄 밤이오래된 애인들과 어떻게이야기하는지꽃들이,
              <br />
              등 아래 핀 벚꽃들이서늘한 봄 비에 지면서도
              <br />
              얼마나 빛나는지 백석을 읽는 밤내일을 돌보지 않아도
              <br />
              푸근하고 아린이런 봄날, 봄밤발치에 조으는
              <br />
              짐승의 착한눈꺼풀과이불 아래 방바닥의 온기와 주전자서
              <br />
              끓는 구수한 보리차 냄새가지들 마른 울음
              <br />
              그치고 저리던 뿌리들도 축축히 잠드는이런 봄, 밤 */}
            </p>
          </Text>
          <div>
            <span>
              <em>{giwaCreatedDate.year}</em>년<em>{giwaCreatedDate.month}</em>
              월<em>{giwaCreatedDate.day}</em>일
            </span>
            <b>
              <span>{giwa.nickName}</span>
            </b>
          </div>
        </GuestBookWrap>
      </Wrap>
    </Container>
  );
};

export default GuestBook;

const Container = styled.aside`
  width: 680px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 50px 0px rgba(210, 201, 168, 0.5);
  border-radius: 50px 0px 0px 50px; 
  position: fixed;
  right: -730px;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;
  box-sizing: border-box;
  padding: 60px 80px;
  z-index: 105;
  transition: all ease-in-out 1s;
  &.show {
    right: 0;
    opacity: 1;
  }
`;

const XBox = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
`;

const Wrap = styled.div`
  > strong {
    display: block;
    padding: 0 10px 0 0;
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 33px;
    line-height: 37px;
    font-weight: 600;
    span {
      color: #e75852;
    }
  }
`;

const Title = styled.div`
  margin: 40px 0 10px;
  display: flex;
  gap: 23px;
  > svg {
    background-color: red;
  }
`;

const GiwaImg = styled.div`
  min-width: 110px;
  min-height: 110px;
  position: relative;
  border-radius: 20px;
  background-color: #122961;
  svg {
    width: 80%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
`;

const GiwaText = styled.div`
  padding: 5px 0 0;
  b {
    display: block;
    margin: 0 0 10px;
    color: #212121;
    font-family: var(--font-hunmin-saeron);
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.2px;
  }
  p {
    color: #616161;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.2px;
  }
`;

const GuestBookWrap = styled.div`
  > div {
    margin: 5px 0 0;
    float: right;
    > span {
      color: #222;
      text-align: right;
      font-family: var(--font-hunmin);
      font-size: 26px;
      font-weight: 600;
      display: block;
      > em {
        margin: 0 0 0 10px;
      }
    }
    b {
      float: right;
      margin: 14px 0 0;
      color: #222;
      text-align: right;
      font-family: var(--font-hunmin);
      font-size: 33px;
      line-height: 37px;
      font-weight: 600;
    }
  }
`;

const Text = styled.div`
  width: 100%;
  position: relative;
  svg {
    width: 100%;
  }
  p {
    width: 88%;
    height: 74%;
    position: absolute;
    top: 13%;
    padding: 0 2% 0 0;
    box-sizing: border-box;
    left: 0;
    right: 0;
    margin: auto;
    text-align: ${(props) => props.$sort};
    color: ${(props) => props.$fontColor};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    font-family: var(--font-Inter);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #e6d6b757;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 10px;
      background-color: #bb9266;
    }
  }
`;
