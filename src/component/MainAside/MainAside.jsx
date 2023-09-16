import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import KigImg from "../../assets/main/kig_img.png";
import { ReactComponent as VisitIcon } from "../../assets/main/visit_icon.svg";
import { ReactComponent as Board } from "../../assets/main/board_img.svg";
import { ReactComponent as SideBoard } from "../../assets/main/side_board_img.svg";
import { ReactComponent as ToggleInline } from "../../assets/main/toggle_icon_inline.svg";
import { ReactComponent as ToggleOutline } from "../../assets/main/toggle_icon_outline.svg";
import { ReactComponent as Bell } from "../../assets/main/bell_icon.svg";
import { ReactComponent as Capture } from "../../assets/main/capture_icon.svg";
import { ReactComponent as Sharing } from "../../assets/main/sharing_icon.svg";
import { ReactComponent as GiwaSetting } from "../../assets/main/giwa_setting_icon.svg";

const MainAside = ({openMakeup}) => {
  const [iconIsOpen, setIconIsOpen] = useState(false);
  console.log(openMakeup)

  return (
    <Contain className={openMakeup ? "hidden" : null}>
      <History>
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
        <Name isOpen={iconIsOpen}>
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
        <Various isOpen={iconIsOpen}>
          <li><button><Bell /></button></li>
          <li><button><Capture /></button></li>
          <li><button><Sharing /></button></li>
          <li><button><GiwaSetting /></button></li>
        </Various>
        {
          <ToggleBtn onClick={() => setIconIsOpen(!iconIsOpen)}>
            <ToggleInline className="inline" />
            <ToggleOutline />
          </ToggleBtn>
        }
      </IconBar>
    </Contain >
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
  transition: all ease-in-out 1s;
  opacity: 1;
  &.hidden {
    bottom: 0;
    opacity: 0;
  }
`;

/* 히스토리 사이드 바 */
const History = styled.div`
  width: 582px; 
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px 30px;
  border: 1px solid #ECE0B9;
  border-radius: 20px;
  box-shadow: 5px 5px 10px #ECE0B9;
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
    color: #8B715F;
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
  width: 368px;
  width: ${(props) => props.isOpen ? '1px' : '368px'};
  position: relative;
  transition: width, .4s ease-in;
  visibility: ${(props) => props.isOpen ? 'hidden' : 'visible'};
  opacity: ${(props) => props.isOpen ? '0' : '1'};
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
  visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${(props) => props.isOpen ? '1' : '0'};
  transition: width, .4s ease-in;
  button {
    width: 60px; 
    height: 60px;
    position: relative;
    border: 1px solid #C09B73;
    border-radius: 60px;
    transition: background-color, .2s;
    &:hover {
      background-color: #AE8960;
      svg {
        path {
          stroke: #fff;
        }
      }
    }
  }
  svg {
    position: absolute; 
    margin: auto;
    top: 0; left: 0; right: 0; bottom: 0;
    path {
      transition: stroke, .2s;
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
        stroke: #FFEAC2;
        fill: #BC9267;
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
    }
    &.inline {
      left: 7px;
      top: -3px;
      z-index: 1;
    }
  }
`;

