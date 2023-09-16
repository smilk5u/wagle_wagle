import React from "react";
import { styled } from "styled-components";

const Modal = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Modal;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(32, 32, 32, 0.6);
  z-index: 500;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
`;
