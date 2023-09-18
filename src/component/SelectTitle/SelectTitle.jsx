import React from "react";
import { styled } from "styled-components";
import { ReactComponent as TitleIcon } from "../../assets/common/ic_select_title.svg";

const SelectTitle = ({ title, fontSize = "20px", weight = 600 }) => {
  return (
    <Container $fontSize={fontSize} weight={weight}> 
      <TitleIcon width={34} height={36} />
      <span>{title}</span>
    </Container>
  );
};

export default SelectTitle;

const Container = styled.h2`
  color: #222;
  font-size: ${(props) => props.$fontSize};
  font-style: normal;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin: 0 0 8px 0;
  > span { 
    margin:0 0 5px 5px; 
    color: #222;
    font-size: 18px;
    font-weight: ${(props) => props.weight};
    line-height: 28px; 
    letter-spacing: 0.2px;
  }
`;
