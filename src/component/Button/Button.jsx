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
  font-weight: 400;
  border: ${(props) => (props.disabled ? null : "1px solid #e75852")};
  border-radius: 6px;
  margin-bottom: 12px;
  margin-top: ${(props) => (props.location === "/join" ? "40px" : null)};
  margin-top: ${(props) => (props.location === "/makeHopae" ? "40px" : null)};
  box-sizing: border-box;
  cursor: pointer;
  color: ${(props) => (props.color ? "#e75852" : "white")};
  color: ${(props) => (props.disabled ? "#bbbbbb" : null)};
  background-color: ${(props) => (props.color ? "white" : "#e75852")};
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : null)};
  transition: all ease-in-out 0.3s;
  &:hover {
    // 비활성화 시, 버튼 위에 마우스 올렸을 때 글자 확대 안 되도록
    font-size: ${(props) => (props.disabled ? null : "26px")};
  }
`;
