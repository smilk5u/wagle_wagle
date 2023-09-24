import React, { useState } from "react";
import styled from "styled-components";
import RightSide from "../../component/RightSide/RightSide";
import haetaeImg from "../../assets/main/haetae_img.png";
import mainHouseIndigo from "../../assets/main/giwa_house_indigo.png";
import mainHouseBlack from "../../assets/main/giwa_house_black.png";
import mainHousePink from "../../assets/main/giwa_house_pink.png";
import pineTreeLeft from "../../assets/main/pine_tree_left.png";
import { useSelector } from "react-redux";
import { ExDiv } from "../Main/Main";
import { Tree } from "../../component/MainBg/MainBg";

const MakeGiwaHouse = () => {
  const giwaHouseStyle = useSelector((state) => state.giwaHouseReducer);

  const mainHousePath = () => {
    switch (giwaHouseStyle.giwaColor) {
      case 1:
        return mainHouseIndigo;
      case 2:
        return mainHouseBlack;
      case 3:
        return mainHousePink;
      default:
        break;
    }
  };
  return (
    // 배경이 추가 될 것을 감안한다면 true, false 보다는 값을 주는게 더 좋아보입니다!
    // 일단 지금은 2개밖에 없으니 true, false로 처리할게요
    <ExDiv $bgColor={giwaHouseStyle.background === 1 ? true : false}>
      <StyledMain>
        <HouseBox className="left" $houseImg={mainHousePath()}>
          <CatImgDiv>
            <img src={haetaeImg} alt="해태" />
          </CatImgDiv>
        </HouseBox>
      </StyledMain>
      <RightSide openMakeup={true}></RightSide>
      {/* <TreeCustom>
        <img src={pineTreeLeft} alt="왼쪽 소나무" />
      </TreeCustom> */}
    </ExDiv>
  );
};

export default MakeGiwaHouse;

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
  background-image: ${({ $houseImg }) => `url(${$houseImg})`};
  background-size: 800px 700px;
  position: absolute;
  left: calc(50% - 300px);
  top: 200px;
  transition: all ease-in-out 1s;
  > img {
    position: absolute;
    left: -105px;
    top: 123px;
  }
  &.left {
    left: 285px;
  }
`;

const CatImgDiv = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 83px;
  left: 381px;
  img {
    width: 100%;
    height: 100%;
  }
`;

// const TreeCustom = styled(Tree)`
//   > img {
//     &:nth-of-type(1) {
//       left: -160px;
//     }
//   }
// `;
