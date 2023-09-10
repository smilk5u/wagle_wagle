import { styled } from "styled-components";

export default function CheckBox({ labelName }) {
  return (
    <CheckBoxDiv>
      <input type="checkbox" id="checkbox_input" />
      <label htmlFor="checkbox_input">{labelName}</label>
    </CheckBoxDiv>
  );
}

const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
  > input {
    width: 20px;
    height: 20px;
  }
  > label {
    color: #9e9e9e;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;
