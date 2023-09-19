import { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import IssueNews from "./IconPopup/IssueNews";
import Sharing from "./IconPopup/Sharing";
import KigImg from "../../assets/bottomSide/kig_img.png";
import { ReactComponent as VisitIcon } from "../../assets/common/visit_icon.svg";
import { ReactComponent as Board } from "../../assets/bottomSide/board_img.svg";
import { ReactComponent as SideBoard } from "../../assets/bottomSide/side_board_img.svg";
import { ReactComponent as ToggleInline } from "../../assets/bottomSide/toggle_icon_inline.svg";
import { ReactComponent as ToggleOutline } from "../../assets/bottomSide/toggle_icon_outline.svg";
import { ReactComponent as Issue } from "../../assets/bottomSide/bell_icon.svg";
import { ReactComponent as Capture } from "../../assets/bottomSide/capture_icon.svg";
import { ReactComponent as SharingIcon } from "../../assets/bottomSide/sharing_icon.svg";
import { ReactComponent as GiwaSetting } from "../../assets/bottomSide/giwa_setting_icon.svg";
import gsap from "gsap";

const MainAside = ({ openMakeup, openMakeupHouse, backgroundState }) => {
  const [iconIsOpen, setIconIsOpen] = useState(false);
  const ContainRef = useRef();

  useEffect(() => {
    openMakeup
      ? gsap.to(ContainRef.current, 1, { y: '100px', opacity: 0, display: 'none', ease: 'Power1.easeInOut' })
      : gsap.to(ContainRef.current, 1, { y: 0, opacity: 1, display: 'flex', ease: 'Power1.easeInOut' })
  }, [openMakeup])

  return (
    <Contain ref={ContainRef}>
      <History $bgState={backgroundState}>
        <img src={KigImg} alt="세종대왕 이미지" />
        <div>
          <strong>내가 아는 한글의 역사는 어디까지?</strong>
          <p>풀면서 배우는 한국 역사능력 고사</p>
        </div>
        <VisitLink href="https://hangeul.naver.com/hangeulmattteutquiz" target="_blank">
          <span>방문하기</span>
          <VisitIcon />
        </VisitLink>
      </History>
      <IconBar>
        <Name $isOpen={iconIsOpen} $bgState={backgroundState}>
          <SideBoard className="side1" />
          <div>
            <strong>
              {<span>홍길동</span>}
              의 집이오~
            </strong>
            <Board className="borad" />
          </div>
          <SideBoard className="side2" />
        </Name>
        <Various $isOpen={iconIsOpen} $bgState={backgroundState}>
          <li>
            <button onClick={() => alert('소식')}>
              <Issue />
            </button>
            {/* 소식통 start */}
            <IssueNews backgroundState={backgroundState} />
            {/* 소식통 end */}
          </li>
          <li><button onClick={() => alert('캡쳐화면')}><Capture /></button></li>
          <li>
            <button onClick={() => alert('공유')}>
              <SharingIcon />
            </button>
            {/* 공유하기 start */}
            <Sharing backgroundState={backgroundState} />
            {/* 공유하기 end */}
          </li>
          <li><button onClick={() => openMakeupHouse(true)}><GiwaSetting /></button></li>
        </Various>
        {
          <ToggleBtn onClick={() => setIconIsOpen(!iconIsOpen)} $bgState={backgroundState} $isOpen={iconIsOpen}>
            <ToggleInline className="inline" />
            <ToggleOutline />
          </ToggleBtn>
        }
      </IconBar>
    </Contain>
  );
};

export default MainAside;

const Contain = styled.div`
  width: 1250px;
  position: absolute; 
  bottom: 50px;
  left: 50%; 
  margin: auto;
  box-sizing: border-box;
  transform: translate(-50%,0);
  display: flex;
  justify-content: space-between;
  opacity: 1;
  z-index: 3;
`;

/* 히스토리 사이드 바 */
const History = styled.div`
  width: 582px; 
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 20px;
  box-sizing: border-box; 
  border: ${({ $bgState }) => $bgState === 'day' ? '1px solid #ECE0B9' : '1px solid #171A32'};
  box-shadow: ${({ $bgState }) => $bgState === 'day' ? '5px 5px 10px #ECE0B9' : '5px 5px 15px rgba(23, 26, 50, 0.478)'};
  > div {
    margin: 0 0 0 20px;
  }
  strong {
    color: #222;
    font-size: 18px; 
    font-weight: 700;
    line-height: 24px; 
  }
  p {
    margin: 5px 0 0;
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px; 
  }
  > a {
    &:hover {
      span {
        color: ${({ $bgState }) => $bgState === 'day' ? '#72543f' : '#080a16'};
      }
      svg {
        path {
          stroke: ${({ $bgState }) => $bgState === 'day' ? '#72543f' : '#080a16'};
        }
      }
    }
    span {
      color: ${({ $bgState }) => $bgState === 'day' ? '#8B715F' : '#171A32'};
    }
    svg {
      path {
        stroke: ${({ $bgState }) => $bgState === 'day' ? '#8B715F' : '#171A32'};
      }
    }
  }
`;

const VisitLink = styled.a`
  width: fit-content;
  height: fit-content;
  position: absolute; 
  right: 50px; 
  top: 0; 
  bottom: 0; 
  margin: auto;  
  padding: 0 17px 0 0;
  span {    
    font-family: var(--font-hunmin);
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;  
    transition: color, .2s;
  }
  &:hover {
    span {
      color: #72543f;
    }
    svg {
      transform: translate(5px,0);
      path {
        stroke: #72543f;
      }
    }
  }
  svg {
    width: 8px; height: 12px;
    content: "";
    display: block;
    margin: auto;
    position: absolute; 
    top: 0; bottom: 0; 
    right: 0;
    transition: transform, .2s;
    path {
      transition: stroke, .2s;
    }
  }
`;

/* 오른쪽 사이드 바 */
const IconBar = styled.div`
  width: 430px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Name = styled.div`
  width: ${(props) => props.$isOpen ? '1px' : '368px'};
  position: relative;
  transition: width, .4s ease-in;
  visibility: ${(props) => props.$isOpen ? 'hidden' : 'visible'};
  opacity: ${(props) => props.$isOpen ? '0' : '1'};
  > svg {
    position: absolute;
    top: 0; 
    bottom: 0; 
    margin: auto;
    z-index: 1;
    &.borad {
      position: static;
    }
    &.side1 {
      left:-10px;
    }
    &.side2 {
      right:-10px;
    }
  }
  > div {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }
  strong {
    width: 368px;
    position: absolute;
    text-align: center;
    color: #231F20;
    font-family: var(--font-hunmin);
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    padding: 0 12px;
    box-sizing: border-box;
    span {
      color: #E75852;
    }
  }
`;
const Various = styled.ul`
  height: min-content;
  gap: 30px;
  padding:0 0 0 40px;
  position: absolute;
  top: 0; bottom: 0; 
  margin: auto;
  display: flex;
  visibility: ${(props) => props.$isOpen ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$isOpen ? '1' : '0'};
  transition: width, .4s ease-in;  
  > li {
    position: relative;
    > button {
      width: 60px; 
      height: 60px;
      position: relative;
      border: ${(props) => props.$bgState === 'day' ? '1px solid #C09B73;' : '1px solid #fff'};
      border-radius: 60px;
      transition: background-color, .2s;
      &:hover {
        background-color: ${(props) => props.$bgState === 'day' ? '#AE8960' : '#171A32'};
        svg {
          path {
            stroke: #fff;
          }
        }
      }
      > svg {
        position: absolute; 
        margin: auto;
        top: 0; left: 0; right: 0; bottom: 0;
        path {
          transition: stroke, .2s;
          stroke: ${(props) => props.$bgState === 'day' ? '#AE8960' : '#fff'};
        }
      }
    }
  }

`;
const ToggleBtn = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  &:hover {
    svg {
      path {
        stroke: ${(props) => props.$bgState === 'day' ? '#FFEAC2' : '#fff'};
        fill: ${(props) => props.$bgState === 'day' ? '#BC9267' : '#171A32'};
      }
    }
  }
  svg {
    position: absolute; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    top: 0;
    margin:auto;
    path {
      transition: all, .2s;
      stroke: ${(props) => props.$bgState === 'day' ? '#BC9267' : '#fff'};
    }
    &.inline {
      left: ${(props) => props.$isOpen ? '2px' : '-1px'};
      /* top: -3px; */
      z-index: 1;
      transform: ${(props) => props.$isOpen ? 'rotate(0)' : 'rotate(180deg)'};
      /* transition: all, .2s; */
    }
  }
`;

