import { styled, css } from "styled-components";

// 기본 버튼 style
const ButtonBasic = styled.button`
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
  
  &:hover {
    background-color: #D24640;
  }
  color: white;
  background-color: #e75852;
  border: 1px solid #e75852;
  cursor: pointer;

  // props 적용
  ${(props) =>
    
    // color 가 존재할 경우
    // 하얀 바탕 버튼
    (props.color &&
      (css`
        color: #e75852;
        background-color: white;
        &:hover {
          background-color: #FFF1F1;
        }
      `)
    )
  }
`;


// Disabled 기능 들어간 버튼 style
const ButtonActDeact = styled(ButtonBasic)`

  ${(props) => 
    
    // props.disabled 적용
    (props.disabled)

      // 비활성화
      ? (css`
        color: #bbbbbb;
        background-color: #f2f2f2;
        border: 0px;
        cursor: default;  // 어떤 차이??
        &:hover {
          background-color: #f2f2f2;
        }
      `)

      // 활성화
      // 기본값 사용
      : null
  }
`;


export {ButtonBasic as default, ButtonActDeact};