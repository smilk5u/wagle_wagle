import React from 'react';
import Modal from "../Modal/Modal";
import styled from 'styled-components';
import { ReactComponent as CloseBtn } from "../../assets/common/closeBtn.svg";
import Haetae from "../../assets/popup/popup_haetae_img.png";
import Pattern from "../../assets/popup/pattern.png";
import ButtonBasic from '../Button/Button';

const CopyLink = ({ setCopyLinkPop }) => {

  return (
    <Modal>
      <Contain>
        <XBtnBox onClick={() => setCopyLinkPop(false)}>
          <CloseBtn width={36} height={37} fill="black" />
        </XBtnBox>
        <Wrap>
          <strong>기와집을 만들었소!</strong>
          <p>이제 기와집 주소를 널리 알려서 기와를 받으시오.</p>
          <img className="haetae_img" src={Haetae} alt="해태" />
          <ButtonBasic>
            널리 알리기
          </ButtonBasic>
        </Wrap>
      </Contain>
    </Modal>
  );
};

export default CopyLink;

const Contain = styled.div`  
  border-radius: 30px;  
  background-color: #fff;
  position: relative;
  text-align: center;
  strong {
    display: block;
    font-family: var(--font-hunmin);
    color: #000;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }
  p {
    margin: 15px 0 0;
    color: #000;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
  }
  img {
    position: absolute;
    left: 0; right: 0; margin: auto;
  }
  .haetae_img {
    top: -121px; 
    left: 25px;
  }
`;

const Wrap = styled.div`
  position: relative;
  text-align: center;
  padding: 120px 77px 80px;
  > svg {
    position: absolute; bottom: -42px; 
    left: 0; right: 0; margin: auto;
  }
  > button {
    width: 382px;
    margin: 37px 0 0;
    display: inline-block;
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

