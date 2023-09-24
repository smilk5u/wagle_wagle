import React from "react";
import { styled } from "styled-components";

const SelectItem = ({ label, id, name, value, onChange, img, checked }) => {
  return (
    <Container htmlFor={id}>
      <Item $img={img} $checked={checked}>
        <span>
          <div></div>
        </span>
      </Item>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </Container>
  );
};

export default SelectItem;

const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  > input {
    display: none;
  }
  > span {
    font-size: 14px;
    color: #424242;
  }
`;

const Item = styled.button`
  width: 160px;
  height: 110px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 2px solid ${({ $checked }) => ($checked ? "#E75852" : "#e4e4e4")};
  pointer-events: none;
  background: ${(props) => `url( ${props.$img}) 50%, 50% no-repeat;`};
  background-size: cover;
  position: relative;
  overflow: hidden;
  > span {
    display: ${({ $checked }) => ($checked ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    background-color: rgba(231, 88, 82, 0.3);
  }

  div {
    width: 30px;
    height: 30px;
    background-color: rgba(231, 88, 82, 1);
    border-radius: 50%;
    color: white;
  }
`;
