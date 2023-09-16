import { useRef, useEffect } from 'react';
import { styled } from "styled-components";
import gsap from "gsap";
import onboardingBg from './../../assets/onBoarding/onboarding_img.jpg';
import house from './../../assets/onBoarding/house.png';
import layer1 from './../../assets/onBoarding/layer_1.png';
import layer2 from './../../assets/onBoarding/layer_2.png';
import layer3 from './../../assets/onBoarding/layer_3.png';

const Onboarding = () => {
  const houseRef = useRef(), layerRef1 = useRef(), layerRef2 = useRef(), layerRef3 = useRef();
  const titleRef = useRef(), buttonRef = useRef();
  const state = { y: 0, delay: -.6, opacity: 1 };

  const moveToLogin = () => {
    window.location.pathname = "/login";
  };

  useEffect(() => {
    const houseLayerTimeline = gsap.timeline({ repeatDelay: 1 });
    houseLayerTimeline.to(houseRef.current, .8, { y: 0, opacity: 1 })
      .to(layerRef3.current, .8, state)
      .to(layerRef2.current, .8, state)
      .to(layerRef1.current, .8, state)
  }, []);

  return (
    <OnboardingMain>
      <TitleContain>
        <Title ref={titleRef}>
          <strong>와글와글</strong>
          <p>
            기와의‘와’ 랑 한글의‘글’을 합쳐 와글와글이란 이름이 탄생했습니다! <br />
            사전적 의미는 ‘사람이 한곳에 많이 모여 잇따라 떠들거나<br />
            움직이는 소리 또는 그 모양’으로<br />
            이곳에서 많은 사람들이 한글날을 기억하며, ‘와글와글’떠들기 바랍니다.
          </p>
        </Title>
        <ButtonWrap>
          <button ref={buttonRef} type="button" onClick={moveToLogin}>와글와글 시작하기</button>
        </ButtonWrap>
        <HouseWrap>
          <img src={house} alt="기와집" ref={houseRef} />
          <img src={layer1} alt="레이어1" ref={layerRef1} />
          <img src={layer2} alt="레이어2" ref={layerRef2} />
          <img src={layer3} alt="레이어3" ref={layerRef3} />
        </HouseWrap>
      </TitleContain>
    </OnboardingMain>
  );
};
export default Onboarding;

const OnboardingMain = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: url(${onboardingBg}) 50% 50% no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Title = styled.div`
  /* opacity: 0; */
  /* transform: translate(0, 50px); */
  strong {
    font-family: var(--font-hunmin);
    font-size: 110px;
    font-weight: 600;
    color: #222222;
  }
  p {
    margin: 50px 0 0;
    font-family: var(--font-hunmin-saeron);
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1px;
    font-weight: 400;
    color:#424242;
  }
`

const TitleContain = styled.div`
  width: 1280px;
  position: relative;
  margin: 0 auto;
`

const ButtonWrap = styled.div`
  button {
    height: 64px;
    font-family: var(--font-hunmin);
    font-weight: 600; 
    padding: 21px 107px; 
    margin: 100px 0 0;
    box-sizing: border-box; 
    color: white;
    font-size: 20px;    
    border-radius: 6px;
    background-color: var(--btn-main-color);
    transition:all, .3s;
    /* opacity: 0; */
    /* transform: translate(0, 50px); */
    &:hover { background-color: #e24840; }
  }
`

const HouseWrap = styled.div`
  position: absolute; left: 770px; top: 250px;
  img {
    position: absolute; 
    opacity: 0;
    transform: translate(0, 50px);
    &:nth-of-type(1) { position: relative; }
    &:nth-of-type(2) { top: -497px; left: 296px; }
    &:nth-of-type(3) { top: -362px; left: 38px; }
    &:nth-of-type(4) { top: -25px; left: 226px; }
  }  
`