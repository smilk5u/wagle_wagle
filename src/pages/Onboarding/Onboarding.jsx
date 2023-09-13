import { styled } from "styled-components";

const Onboarding = () => {
  const moveToLogin = () => {
    window.location.pathname = "/login";
  };
  return (
    <OnboardingMain>
      <div>
        <strong>와글와글</strong>
        <p>
          기와의‘와’ 랑 한글의‘글’을 합쳐 와글와글이란 이름이 탄생했습니다! <br />
          사전적 의미는 ‘사람이 한곳에 많이 모여 잇따라 떠들거나<br />
          움직이는 소리 또는 그 모양’으로<br />
          이곳에서 많은 사람들이 한글날을 기억하며, ‘와글와글’떠들기 바랍니다.
        </p>
        <button type="button" onClick={moveToLogin}>와글와글 시작하기</button>
      </div>
    </OnboardingMain>
  );
};

export default Onboarding;
 
const OnboardingMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  > div {
    width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }
  strong {
    font-family: var(--font-hunmin);
    font-size: 110px;
    font-weight: 400;
  }
  p {
    margin: 50px 0 0;
    font-family: var(--font-hunmin-saeron);
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1px;
  }
  
  button {
    font-family: var(--font-hunmin);
    font-weight: 400;
    height: 64px;
    padding: 21px 107px;
    margin: 100px 0 0;
    box-sizing: border-box;
    color: white;
    font-size: 20px;    
    background-color: var(--btn-main-color);
    border-radius: 6px;
    transition: all, .4s;
    &:hover { background-color: #e24840; }
  }
`;
