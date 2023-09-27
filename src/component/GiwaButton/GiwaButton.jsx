import React from "react";
import styled from "styled-components";
import giwaData from "../../data/giwaPath";

const GiwaButton = ({
  setOpen,
  changeGiwa,
  giwaList,
  url,
  setIsVisitorClick,
}) => {
  return (
    <GiwaContainer>
      <GiwaSvg viewBox="0 0 770 679" x="0px" y="0px">
        {giwaList.map((giwa, index) => (
          <path
            key={giwa.id}
            onClick={() => {
              if (url) {
                setIsVisitorClick(true);
              } else {
                changeGiwa(giwa.id);
                setOpen();
              }
            }}
            d={giwaData[index].data}
          />
        ))}
      </GiwaSvg>
      <GiwaName>
        {giwaList.map((giwa) => {
          return (
            <li key={giwa.id}>{giwaData[giwa.postStyle.shapeCode - 1].svg}</li>
          );
        })}
      </GiwaName>
    </GiwaContainer>
  );
};

export default GiwaButton;

const GiwaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const GiwaSvg = styled.svg`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  > path {
    fill: transparent;
    stroke-miterlimit: 10;
    cursor: pointer;
    transition: fill, 0.4s ease-in-out;
    &:hover {
      fill: #cccccc2d;
    }
  }
`;
const GiwaName = styled.ul`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  li {
    width: 9%;
    height: 10%;
    position: absolute;
    top: 0;
    z-index: -1;
    /* transform: rotate(35deg); */
    /* background-color: green; */
    &:nth-of-type(1) {
      left: 17%;
      top: 8%;
    }
    &:nth-of-type(2) {
      left: 26%;
      top: 13.6%;
    }
    &:nth-of-type(3) {
      left: 36.2%;
      top: 19.6%;
    }
    &:nth-of-type(4) {
      left: 46%;
      top: 25.5%;
    }
    &:nth-of-type(5) {
      left: 11%;
      top: 17.5%;
    }
    &:nth-of-type(6) {
      left: 20%;
      top: 24%;
    }
    &:nth-of-type(7) {
      left: 30%;
      top: 30.5%;
    }
    &:nth-of-type(8) {
      left: 39.5%;
      top: 37%;
    }
    &:nth-of-type(9) {
      left: 3.7%;
      top: 24.8%;
    }
    &:nth-of-type(10) {
      left: 13.5%;
      top: 32.5%;
    }
    &:nth-of-type(11) {
      left: 24.5%;
      top: 40.5%;
    }
    &:nth-of-type(12) {
      left: 36%;
      top: 48%;
    }
    svg {
      position: absolute;
      width: 100%;
      height: auto;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
`;
