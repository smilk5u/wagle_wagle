import { styled, css } from "styled-components";

// 공통 style
const ButtonCommon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 10px;
  box-sizing: border-box;
  font-family: var(--font-hunmin);
  font-size: 20px;
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: 12px;
  margin-top: 40px;
  box-sizing: border-box;
  transition: all ease-in-out 0.3s;

  color: white;
  background-color: #e75852;
  border: 1px solid #e75852;
  cursor: pointer;

  // props.color 적용
  ${(props) =>
    props.color && //color 가 존재할 경우
    css`
      color: #e75852;
      background-color: white;
    `
  }
`;

// 기본 버튼 style
const ButtonBasic = styled(ButtonCommon)`
  &:hover {
    font-size: 26px;
  }
  &:active{
    background-color: "#D24640";
  }
`;

// Disabled 기능 들어간 버튼 style
const ButtonActDeact = styled(ButtonCommon)`

  // props.disabled 적용
  ${(props) => (props.disabled)
    ? (css`
      color: #bbbbbb;
      background-color: #f2f2f2;
      border: 0px;
      cursor: default;  // 어떤 차이??
    `)
    : (css`
      &:hover {
        font-size: 26px;
      }
      &:active{
        background-color: "#D24640";
      }
    `)
  }
`;


export {ButtonBasic as default, ButtonActDeact};