import React, { useState } from "react";
import styled from "styled-components";
import RightSide from "../../component/RightSide/RightSide";
import haetaeImg from "../../assets/main/haetae_img.png";
import mainHouse from "../../assets/main/giwa_house_indigo.png";

const MakeGiwaHouse = () => {
  const [giwaStyle, setGiwaStyle] = useState({
    giwaColor: "1",
    background: "1",
    friend: "1",
  });
  return (
    <ExDiv>
      <StyledMain>
        <HouseBox className="left">
          <CatImgDiv>
            <img src={haetaeImg} alt="해태" />
          </CatImgDiv>
        </HouseBox>
      </StyledMain>
      <RightSide openMakeup={true} updateFunction={setGiwaStyle}></RightSide>
    </ExDiv>
  );
};

export default MakeGiwaHouse;

const ExDiv = styled.div`
  width: 100vw;
  height: 100vh;
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
