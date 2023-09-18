import React from 'react';
import Modal from "../Modal/Modal";
import styled from 'styled-components';
import { ReactComponent as CloseBtn } from "../../assets/common/closeBtn.svg";
import Haetae from "../../assets/popup/popup_haetae_img.png";
import Pattern from "../../assets/popup/pattern.png"; 
 
const Completed = () => {
  const existMouseOver = (e) => {
    e.target.parentNode.classList.add('first');
    e.target.parentNode.classList.remove('two');
  }
  const okayMouseOver = (e) => {
    e.target.parentNode.classList.add('two');
    e.target.parentNode.classList.remove('first');
  }
  const mouseOut = (e) => {
    e.target.parentNode.classList.remove('first');
    e.target.parentNode.classList.remove('two');
  }

  return (
    <Modal>
      <Contain>
        <XBtnBox>
          <CloseBtn width={36} height={37} fill="black" />
        </XBtnBox>
        <Wrap>
          <p>기와 등록이 성공적으로 완료 되었소!</p>
          <strong>당신의 기와집을 <br />만들러 가보겠나?</strong>
          <img className="koreanCaracter" src={Haetae} alt="" />
          <img className="partten" src={Pattern} alt="" />
        </Wrap>
        <Button className="minju">
          <button type="button" onMouseOver={existMouseOver} onMouseLeave={mouseOut} >이미 있습니다</button>
          <button type="button" onMouseOver={okayMouseOver} onMouseLeave={mouseOut}>좋습니다!</button>
        </Button>
      </Contain>
    </Modal>
  );
};

export default Completed;

const Contain = styled.div`  
  border-radius: 30px;  
  background-color: #fff;
  position: relative;
  p {
    color: #767676;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
  }
  strong {
    margin: 26px 0 0;
    display: block;
    color: #222;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 34px;
    font-weight: 600;
    line-height: 43px; 
  }
  img {
    position: absolute;
    left: 0; right: 0; margin: auto;
  }
  .koreanCaracter {
    top: -121px; 
    left: 25px;
  }
  .partten {
    bottom: -40px; 
  }
`;

const Wrap = styled.div`
  position: relative;
  text-align: center;
  padding: 100px 95px 80px;
  > svg {
    position: absolute; bottom: -42px; 
    left: 0; right: 0; margin: auto;
  }
`;

const XBtnBox = styled.button`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 26px;
  top: 25px;  
  z-index: 1;
`;

const Button = styled.div`
  display: flex;
  position: relative; 
  z-index: 1;
  border-top: 2px solid #F0EEEB;
  overflow: hidden;
  border-radius: 0 0 30px 30px;  
  background-color: #fff;
  &.first {
    background-color: #18316F;
    button {
      &:nth-of-type(1) { color:#fff; }
      &:nth-of-type(2) { color:rgba(255, 255, 255, .3); }
      &:after { background-color: rgba(208, 215, 232, .2); }
    }
  }
  &.two {
    background-color: #E75852;
    button {
      &:nth-of-type(1) { color:rgba(255, 255, 255, .3); }
      &:nth-of-type(2) { color:#fff; }
      &:after { background-color: rgba(208, 215, 232, .2); }
    }
  }
  button {
    width: 50%;
    padding: 30px 0;
    text-align: center;   
    position: relative; 
    color: #424242;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px; 
    transition: background-color, .2s;
    &:nth-of-type(1) { &:after { display: none; } }
    &:after {
      width: 2px; height: 50px;
      content: "";
      display: block;
      background-color: #F0EEEB;
      position: absolute; 
      left:0; top:0;
      bottom: 0; margin: auto;
    }
  }
`;