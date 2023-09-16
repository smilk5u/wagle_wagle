import React from "react";
import { styled } from "styled-components";

const SelectItem = ({ label, id, name, value, onChange }) => {
  return (
    <Container htmlFor={id}>
      <Item />
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
  > input {
    display: none;
  }
  > span {
    font-size: 14px;
    color: #424242;
  }
`;

const Item = styled.div`
  width: 176px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid #e4e4e4;
  background-color: #d9d9d9; //임시로 지정
`;
