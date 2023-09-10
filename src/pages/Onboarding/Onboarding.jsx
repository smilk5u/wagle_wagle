import { styled } from "styled-components";

const Onboarding = () => {
  const moveToLogin = () => {
    window.location.pathname = "/login";
  };
  return (
    <Section>
      <div>Onboarding</div>
      <button onClick={moveToLogin}>시작하기</button>
    </Section>
  );
};

export default Onboarding;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  > div {
    font-size: 50px;
  }
  > button {
    height: 64px;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    font-size: large;
    background-color: #e75852;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
