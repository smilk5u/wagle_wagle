import React from "react";
import styled from "styled-components";

const GiwaLuck = ({ giwaName }) => {
  return (
    <Wrap>
      <ImgContain>
        <div></div>
        <b>{giwaName}</b>
      </ImgContain>
      <LuckTxt>
        {giwaName} 에 대한 운입니다.. <br />
        이 기와는 연애운이 상승하는 기와입니다. <br />
        이성이 없는 사람에게는 새로운 만남이 생길 확률이  <br />
        높아집니다. 반대로 이미 짝이 있는 경우에는,  오히려 금술이 단단해져 결혼할 기회까지 오게 됩니다.
      </LuckTxt>
    </Wrap>
  );
};

export default GiwaLuck;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 30px 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; 
    border-radius: 10px;
    border:1px solid #e6e6e6;
  }
`
const ImgContain = styled.div`
  display: flex;
  align-items: end;
  > div {
    width:170px; 
    height:170px;
    background-color: #D9D9D9;  
  }
  > b {
    position: relative;
    color: #172F6C;
    font-family: var(--font-hunmin);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    padding:0 0 0 12px;
    margin:0 0 0 20px;
    &::before {
      width: 3px;
      height: 26px;
      content: "";
      display: block;
      position: absolute; 
      top:0; 
      left:0;
      background-color: #172F6C;
    }
  }
`

const LuckTxt = styled.p`
  margin: 26px 0 0;
  color: #757575;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
