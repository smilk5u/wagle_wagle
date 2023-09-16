import { styled } from "styled-components";

export default function Button({
  onClick,
  buttonText,
  color,
  location,
  disabled = false,
  ...rest
}) {
  const onClickBtn = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <ButtonComponent
      onClick={onClickBtn}
      color={color}
      location={location}
      disabled={disabled}
      {...rest}
    >
      {buttonText}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 10px;
  box-sizing: border-box;
  font-family: var(--font-hunmin);
  font-size: 20px;
  font-weight: 600;
  border: ${(props) => (props.disabled ? null : "1px solid #e75852")};
  border-radius: 6px;
  /* 
    버튼이 여러군데 사용되었는데 아래 처럼 location 나누게되면 조건이 너무 많아져서..
    해당 컴포넌트에서 작업하는걸로 변경하겠습니다
  */
  /* margin-bottom: 12px; */
  /* margin-top: ${(props) => (props.location === "/join" ? "40px" : null)}; */
  /* margin-top: ${(props) => (props.location === "/makeHopae" ? "40px" : null)}; */
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: ${(props) => (props.color ? "#e75852" : "white")};
  color: ${(props) => (props.disabled ? "#bbbbbb" : null)};
  background-color: ${(props) => (props.color ? "white" : "#e75852")};
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : null)};
  transition: all ease-in-out 0.3s;
  &:hover {
    /* 화이트 버튼 경우 조건문 추가해서 작성 */
    background-color: ${(props) => {
    let bgColor;
    if (props.color) {
      props.disabled ? bgColor = null : bgColor = "#FFF1F1";
    } else {
      props.disabled ? bgColor = null : bgColor = "#D24640";
    }
    return bgColor
  }};
  }
`;
