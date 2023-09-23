import { useRef, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import speechBubble from "../../assets/main/speech_bubble.svg";
import { ReactComponent as GiwaPlus } from "../../assets/main/giwa_plus.svg";

const Speech = ({ setOpenModal }) => {
  const speechRef = useRef();

  useEffect(() => {
    gsap.to(speechRef.current.querySelectorAll("span"), .5, { stagger: .1, display: "inline", delay: .3, ease: "Power1.easeInOut" })
  }, []);

  return (
    <Container>
      {/* {
        // 집주인 : 기와 12개 미만일 때
        <p ref={speechRef}>
          <span>환</span>
          <span>영</span>
          <span>하</span>
          <span>오</span>
          <span>!</span>
        </p>
      } */}
      {/* {
        // 집주인 : 기와 12개 이상일 때
        <>
          <p ref={speechRef}>
            <span>기</span>
            <span>와</span>
            <span>는</span>
            <span className="space">내</span>
            <span>가</span>
            <span className="space">보</span>
            <span>관</span>
            <span>하</span>
            <span>고</span>
            <span className="space">있</span>
            <span>소</span>
          </p>
          <button className="giwa_number">
            <span>10</span>
          </button>
        </>
      } */}
      { // 방문자
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
      }
    </Container >
  );
};

export default Speech;

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
      top: -35%;
      right: 15%;
      margin: auto;
    }
    &.giwa_number {
      position: absolute;
      padding: 0 14px 3px;
      background-color: #6C5847;
      border-radius: 50px;
      right: 10%;
      top: -15%;
      span {
        color: #fff;
        font-family: var(--font-hunmin);
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.12px;
      }
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
`;
