import React from "react";
import { styled } from "styled-components";

const SelectItem = ({ label, id, name, value, onChange, img }) => {
  return (
    <Container htmlFor={id}>
      <Item $img={img} />
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
  border: 1px solid #e4e4e4;
  pointer-events: none;
  background: ${(props) => `url( ${props.$img}) 50%, 50% no-repeat;`};
  background-size: cover;
`;
