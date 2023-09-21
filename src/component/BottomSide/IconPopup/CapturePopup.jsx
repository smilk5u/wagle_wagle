import Modal from "../../Modal/Modal"
import styled from 'styled-components';
import captureImg from "../../../assets/bottomSide/capture_img.png";
import { ReactComponent as CloseBtn } from "../../../assets/common/closeBtn.svg";
import { ReactComponent as Board } from "../../../assets/bottomSide/board_img_2.svg";
import { ReactComponent as SaveImg } from "../../../assets/bottomSide/save_img.svg";
import { ReactComponent as InstarLogo } from "../../../assets/bottomSide/instar_logo.svg";
import { ReactComponent as InstarStory } from "../../../assets/bottomSide/instar_story.svg";
import { ReactComponent as Kakao } from "../../../assets/bottomSide/kakao.svg";

const CaptruePopup = ({ setCapturePopBol }) => {
  return (
    <Modal>
      <Contain>
        <XBtnBox onClick={() => setCapturePopBol(false)}>
          <CloseBtn width={36} height={37} fill="black" />
        </XBtnBox>
        <BoradWrap>
          <strong>아주 멋진 풍경이군~</strong>
          <div>
            <Board />
            <img src={captureImg} alt="사진" />
          </div>
        </BoradWrap>
        <ul>
          <li>
            <button type="button">
              <SaveImg />
              <span>풍경 저장</span>
            </button>
          </li>
          <li>
            <button type="button">
              <InstarLogo />
              <span>인스타 공유</span>
            </button>
          </li>
          <li>
            <button type="button">
              <InstarStory />
              <span>스토리 공유</span>
            </button>
          </li>
          <li>
            <button type="button">
              <Kakao />
              <span>카톡 공유</span>
            </button>
          </li>
        </ul>
      </Contain>
    </Modal>
  );
};

export default CaptruePopup;

const Contain = styled.div`  
  position: relative;
  border-radius: 30px;  
  background-color: #fff;
  padding: 60px 60px 50px;
  box-sizing: border-box;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 35px;
  }
  li {
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    span {
      margin: 10px 0 0;
      color: #222;
      text-align: center;
      font-family: var(--font-hunmin-saeron);
      font-size: 18px;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

const BoradWrap = styled.div`
  strong {
    display: block;
    color: #222;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 32px;
    font-weight: 600;
    margin: 0 auto;
  }
  > div {
    position: relative;
    margin: 30px 0 50px;
    > img {
      display: block;
      position: absolute;
      left: 0; right: 0; 
      bottom: 0; top: 0;
      margin: auto; 
    }
  }
`;

const XBtnBox = styled.button`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 30px;
  top: 30px;  
  z-index: 1;
`;

