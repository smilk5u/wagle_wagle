import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import styled, { keyframes } from "styled-components";
import speechBubble from "../../assets/main/speech_bubble.svg";
import { ReactComponent as GiwaPlus } from "../../assets/main/giwa_plus.svg";

const Speech = ({ setOpenModal, url, giwaLength }) => {
  const speechRef = useRef();
  useEffect(() => {
    gsap.to(speechRef.current.querySelectorAll("span"), 0.5, {
      stagger: 0.1,
      display: "inline",
      delay: 0.3,
      ease: "Power1.easeInOut",
    });
  }, [giwaLength]);

  return (
    <Container>
      <>
        <p ref={speechRef}>
          <span>기</span>
          <span>와</span>
          <span>를</span>
          <span className="space">남</span>
          <span>겨</span>
          <span>주</span>
          <span>시</span>
          <span>오</span>
          <span>!</span>
        </p>
        <button className="giwa_plus" onClick={() => setOpenModal(true)}>
          <GiwaPlus />
        </button>
      </>
    </Container>
    // <Container>
    //   {url ? (
    //     // 방문자
    //     <>
    //       <p ref={speechRef}>
    //         <span>기</span>
    //         <span>와</span>
    //         <span>를</span>
    //         <span className="space">남</span>
    //         <span>겨</span>
    //         <span>주</span>
    //         <span>시</span>
    //         <span>오</span>
    //         <span>!</span>
    //       </p>
    //       <button className="giwa_plus" onClick={() => setOpenModal(true)}>
    //         <GiwaPlus />
    //       </button>
    //     </>
    //   ) : giwaLength < 12 ? (
    //     // 기와 12개 미만일때
    //     <p ref={speechRef}>
    //       <span>환</span>
    //       <span>영</span>
    //       <span>하</span>
    //       <span>오</span>
    //       <span>!</span>
    //     </p>
    //   ) : (
    //     // 기와 12개 이상일때
    //     <>
    //       <Link to="/StorageGiwa" ref={speechRef} className="storage" title="내 기와 보관함 바로가기">
    //         <p>
    //           <span>기</span>
    //           <span>와</span>
    //           <span>는</span>
    //           <span className="space">내</span>
    //           <span>가</span>
    //           <span className="space">보</span>
    //           <span>관</span>
    //           <span>하</span>
    //           <span>고</span>
    //           <span className="space">있</span>
    //           <span>소</span>
    //         </p>
    //       </Link>
    //       <div className="giwa_number">
    //         <span>{giwaLength}</span>
    //       </div>
    //     </>
    //   )}
    // </Container>
  );
};

export default Speech;

const animation = keyframes`
  0% { transform: translateY(0px); }
  100% { transform: translateY(5px); }
`;

const Container = styled.div`
  width: 242px;
  height: 64px;
  background-color: red;
  position: absolute;
  z-index: 2;
  right: 25%;
  top: 4%;
  background: url(${speechBubble}) 50% 50% no-repeat;
  background-size: cover;
  text-align: center;
  > button {     
    &.giwa_plus {
      position: absolute;
      right: 15%;
      top: -35%;
      margin: auto;      
      animation: ${animation} 1s ease-in-out alternate infinite;
    }
  }
  > p {
    margin: 9% 0 0;
    display: inline-block;
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.16px;
    span {
      display: none;
      &.space {
        margin: 0 0 0 5px;
      }
    }
  }
  .storage {
    width: 100%;
    height: 100%;
    display: inline-block;
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.16px;
    transition: color, .2s ease-in-out;
    &:hover {
      color: #18306d;
    }
    p {
      margin: 9% 0 0;
    }
    span {
      display: none;
      &.space {
        margin: 0 0 0 5px;
      }
    }
  }
  .giwa_number {
    position: absolute;
    padding: 0 14px 3px;
    background-color: #6c5847;
    border-radius: 50px;
    right: 10%;
    top: -15%;
    pointer-events: none;
    span {
      color: #fff;
      font-family: var(--font-hunmin);
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.12px;
    }
  }
`;