import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SelectTitle from "./../../SelectTitle/SelectTitle";
import FontsArrow from "./../../../assets/fonts_arrow.svg"
import { ReactComponent as KigHat } from "./../../../assets/main/kigHat.svg"

// 기본 데이터
const fontColorDefault = ['#EA7E00', '#8B76C1', '#2BBDA3', '#82C317', '#1F6448', '#000000'];
const rangeData = ['왼쪽 정렬', '중앙 정렬', '오른쪽 정렬'];

// 사용자 선택 데이터 
let selectData = {
  font: 'Noto Sans KR',
  range: '왼쪽 정렬',
  color: '#6A8AF7'
}

const WriteGuestText = () => {
  const [showOptions, setShowOptions] = useState(false); // 셀렉트
  const [select, setSelect] = useState(selectData);

  /* 폰트 변경 */
  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setSelect({
      ...select,
      font: innerText
    })
  };

  /* 폰트 컬러 변경 */
  const fontColorChange = (color) => {
    setSelect({
      ...select,
      color: color.color,
    })
  }

  /* 폰트 정렬 변경 */
  const rangeChange = (range) => {
    setSelect({
      ...select,
      range: range.range,
    })
  }

  return (
    <Container>
      <GuestBook>
        <TextContain>
          <TextArea placeholder="진심을 다해 방명록을 남기면&#13;&#10;주인장이 즐거워 할걸세!" />          
          <p>{select.font}, {select.color}, {select.range}</p>
        </TextContain>
        <div>
          <Fonts>
            <SelectTitle title={"글꼴선택"} fontSize="18px" weight={500} />
            <SelectBox onClick={() => setShowOptions((prev) => !prev)} show={showOptions}>
              <Label>{select.font}</Label>
              <SelectOptions show={showOptions}>
                <Option onClick={handleOnChangeSelectValue}>Noto Sans KR</Option>
                <Option onClick={handleOnChangeSelectValue}>value1</Option>
                <Option onClick={handleOnChangeSelectValue}>value2</Option>
                <Option onClick={handleOnChangeSelectValue}>value3</Option>
                <Option onClick={handleOnChangeSelectValue}>value4</Option>
                <Option onClick={handleOnChangeSelectValue}>value5</Option>
                <Option onClick={handleOnChangeSelectValue}>value6</Option>
                <Option onClick={handleOnChangeSelectValue}>value7</Option>
                <Option onClick={handleOnChangeSelectValue}>value8</Option>
              </SelectOptions>
            </SelectBox>
          </Fonts>
          <Range>
            <SelectTitle title={"정렬"} fontSize="18px" weight={500} />
            <ul>
              {
                rangeData.map(range => <li><button onClick={() => rangeChange({ range })}>{range}</button></li>)
              }
            </ul>
          </Range>
          <Color>
            <SelectTitle title={"글자색상"} fontSize="18px" weight={500} />
            <ul>
              {
                fontColorDefault.map(color => <li><button style={{ backgroundColor: color }} onClick={() => fontColorChange({ color })}></button></li>)
              }
            </ul>
          </Color>
        </div>
      </GuestBook>
      <TextNotification>
        <KigHat />
        {
          <span>한글을 굉장히 잘쓰시는 구려.</span>
        }
      </TextNotification>
    </Container>
  );
};
export default WriteGuestText;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 36px 0 38px;
`;
const GuestBook = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;   
`;
const TextContain = styled.div`
  min-width: 616px;
  height: 324px;  
  border-radius: 10px;
  border: 1px solid #D9D9D9;
  background: rgba(245, 245, 245, 0.20);
  padding: 30px;
  box-sizing: border-box;
`;

const TextNotification = styled.div`
  margin: 15px 0 0;
  display: flex;
  align-items: center;  
  span {
    margin:0 0 0 10px;
    color: #909090;
    font-family: var(--font-hunmin);
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
  }
`;
const TextArea = styled.textarea`
  width:100%;
  height: 100%;
  resize: none;
  font-family: var(--font-Inter);
  border: none;
  color: #000;
  outline: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  &::placeholder {
    color: #BBB;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
  }
  &::-webkit-scrollbar {
    width: 4px; 
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; 
    border-radius: 4px;
    background-color: #DADADA;
  }
  &:hover, &:focus { border: none; } 
`;
const Fonts = styled.div`
  h2 { margin:0 0 15px; }
`;
const Range = styled.div`
  h2 { margin: 15px 0; }
  ul {
    display: flex;
    gap: 9px;
    flex-wrap: wrap;
  }
  button { 
    padding: 10px 12px 11px;
    border: 1px solid #1748C1;
    color: #1748C1;
    border-radius: 6px;
    background: #FFF;
    font-size: 16px;
    font-weight: 500;
  }
`;
const Color = styled.div`
  h2 { margin: 15px 0; }
  ul {
    display: flex;
    gap: 6px;
    flex-wrap: wrap; 
  }  
  button { 
    width: 45px;
    height: 45px;
    background-color: #368c8f;
    border: 1px solid #E6E6E6;
    border-radius: 6px;
    box-sizing: border-box;
  }
`;

/* 셀렉트 박스 */
const SelectBox = styled.div`
  position: relative;
  width: 100%;
  padding: 15px 19px;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  border:1px solid #E6E6E6;
  border-color: ${(props) => (props.show ? "#1748C1" : "#E6E6E6")};
  background-color: ${(props) => (props.show ? "#fff" : "#FAFAFA")};
  label { 
    color: ${(props) => (props.show ? "#1748C1" : "#BDBDBD")};
  }
  &::before {
    width: 14px;
    height: 9px;
    content: "";
    position: absolute;
    top: 0;
    bottom:0;
    margin:auto;
    right: 19px;
    background: url(${FontsArrow}) 50% 50% no-repeat;
    transition: transform, .2s;
    transform: ${(props) => (props.show ? "rotate(180deg)" : "rotate(0)")};;
  }
`;
const Label = styled.label`
  font-size: 16px;  
  text-align: center;    
  font-weight: 500;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 50px;
  left: 0;
  width: 100%;
  overflow: hidden;  
  height: 200px;
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 0;     
  box-sizing: border-box;
  z-index: 2;  
  overflow-y: auto;
  border-radius: 6px;
  background-color: #fff;
  border:1px solid #1748C1;
  &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; 
    border-radius: 10px;
    border:1px solid #e6e6e6;
  }
`;
const Option = styled.li`
  padding: 15px 19px;
  color:#BDBDBD;
  font-weight: 500;
  font-size: 16px;
  transition: color, .2s ease-in;
  position: relative;
  &:after {
    width: 90%; 
    height: 1px;
    content: "";
    display: block;
    bottom:0; 
    position: absolute;
    margin: auto;
    left:0; 
    right:0;
    background-color: #E8E8E8;
  }
  &:hover {
    color: #1748C1;
  }
`;
