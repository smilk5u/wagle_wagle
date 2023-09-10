import { styled } from "styled-components";

export default function Button({ onClick, buttonText, color, location }) {
  const onClickBtn = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <ButtonComponent onClick={onClickBtn} color={color} location={location}>
      {buttonText}
      {
        
      }
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
  border: 1px solid #e75852;
  border-radius: 6px;
  margin-bottom: 12px;
  margin-top: ${(props) => (props.location === "/join" ? "40px" : null)};
  margin-top: ${(props) => (props.location === "/makeHopae" ? "40px" : null)};
  box-sizing: border-box;
  cursor: pointer;
  color: ${(props) => (props.color ? "#e75852" : "white")};
  background-color: ${(props) => (props.color ? "white" : "#e75852")};
  transition: all ease-in-out 0.3s;
  &:hover {
    font-size: 26px;
  }
`;
