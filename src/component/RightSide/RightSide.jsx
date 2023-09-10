import React from "react";
import { styled } from "styled-components";

const RightSide = ({ openMakeup }) => {
  return <Container className={openMakeup ? "show" : null}></Container>;
};

export default RightSide;

const Container = styled.aside`
  width: 728px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 50px 0px rgba(210, 201, 168, 0.5);
  border-radius: 50px 0px 0px 50px;
  position: absolute;
  right: -730px;
  top: 0;
  opacity: 0;
  box-sizing: border-box;
  padding: 60px 60px;
  transition: all ease-in-out 1s;
  &.show {
    right: 0;
    opacity: 1;
  }
`;
