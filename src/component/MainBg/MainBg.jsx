import { styled } from "styled-components";
import gsap from "gsap";
import { useBgColor } from "../../contexts/BackgroundColor";
import pineTreeLeft from "../../assets/main/pine_tree_left.png";
import pineTreeRight from "../../assets/main/pine_tree_right.png";
import cloudLeft from "../../assets/main/cloud_1.png";
import cloudCenter from "../../assets/main/cloud_2.png";
import cloudRight from "../../assets/main/cloud_3.png";
import cloudNightLeft from "../../assets/main/cloud_night_1.png";
import cloudNightCenter from "../../assets/main/cloud_night_2.png";
import cloudNightRight from "../../assets/main/cloud_night_3.png";
import moon from "../../assets/main/moon.png";

const MainBg = ({ openMakeup, openGusetBook }) => {
  const { bgColor } = useBgColor();
  return (
    <BgContainer className={
      openMakeup || openGusetBook ? 'left' : null
    }>
      {!bgColor && <img src={moon} alt="달" />}
      <CloudWrap>
        <img src={bgColor ? cloudLeft : cloudNightLeft} alt="왼쪽 구름" />
        <img src={bgColor ? cloudCenter : cloudNightCenter} alt="센터 구름" />
        <img src={bgColor ? cloudRight : cloudNightRight} alt="오른쪽 구름" />
      </CloudWrap>
      <Tree>
        <img src={pineTreeLeft} alt="왼쪽 소나무" />
        <img src={pineTreeRight} alt="오른쪽 소나무" />
      </Tree>
    </BgContainer>
  );
};

export default MainBg;

const BgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all ease-in-out 1s;
  &.left {
    > img {
      left: -60px;
    }
    > div {
      &:nth-of-type(1) {
        left: calc(50% - 310px);
      }
      &:nth-of-type(2) {
        img {
          &:nth-of-type(1) {
            left: -13%;
          }
        }
      }
    }
  }
  > img {
    position: absolute;
    left: -1px;
    top: -110px;
    z-index: 1;
    transition: all ease-in-out 1s;
  }
`;

const CloudWrap = styled.div`
  width: 100%;
  min-width: 1920px;
  height: 100%;
  position: absolute;
  left: 50%;  
  top: 0;
  transform: translate(-50%,0);
  transition: all ease-in-out 1s;
  img {
    position: absolute;
    top: 0; 
    bottom: 0;
    margin: auto;
    &:nth-of-type(1) {
      left: 1%; 
      top: -55%;
    }
    &:nth-of-type(2) {
      top: -65%;
      left: -1%;
      right: 0;       
    }
    &:nth-of-type(3) {
       right: -60px;
       top: -50%;
    }
  }
`;

const Tree = styled.div`
  min-width: 1800px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;  
  top: 0;
  z-index: 2;
  transform: translate(-50%,0);
  pointer-events: none;
  > img {    
    position: absolute;
    transition: all ease-in-out 1s;
    &:nth-of-type(1) {
      left: -50px;
      bottom: -10%;
      position: absolute;
    }
    &:nth-of-type(2) {
      right: -70px;
      top: 20%;
      z-index: -1;
    }
  }
`;
