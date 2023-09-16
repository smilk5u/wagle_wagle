import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root{
    --btn-main-color : #E75852; // 핑크
    --font-hunmin: "EBS Hunminjeongeum"; // 훈민정음
    --font-hunmin-saeron: "EBS HMJE Saeron"; // 훈민정음 새론
    --font-Inter: "Inter"; // Inter
  }
  a{
    text-decoration: none;
  } 
  button{
    all: unset;
    cursor: pointer;
  }
  body{
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyles;
