import React, { useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as XIcon } from "../../assets/x-menu.svg";
import { ReactComponent as ResetIcon } from "../../assets/system-uicons_reset.svg";
import SelectTitle from "../SelectTitle/SelectTitle";
import SelectItem from "../SelectItem/SelectItem";
import Button from "../Button/Button";

const RightSide = ({ openMakeup, xBtnClickHandler, setBackground }) => {
  return (
    <Container className={openMakeup ? "show" : null}>
      <XBox>
        <XIcon
          width={"40px"}
          height={"40px"}
          fill="#212121"
          onClick={xBtnClickHandler}
        />
      </XBox>
      <HeaderBox>
        <TextField>
          <span>홍길동</span>님, 환영하오.
          <br />
          기와집을 만들어 보시오.
        </TextField>
        <ResetBox>
          <ResetIcon />
        </ResetBox>
      </HeaderBox>
      <SelectTitle title={"기와 색상 선택"} />
      <ItemLists>
        <SelectItem label={"청색 기와"} />
        <SelectItem label={"적색 기와"} />
        <SelectItem label={"흑색 기와"} />
      </ItemLists>
      <SelectTitle title={"배경 선택"} />
      <ItemLists>
        <SelectItem
          label={"낮"}
          id="day"
          name="backGround"
          value="day"
          onChange={setBackground}
        />
        <SelectItem
          label={"밤"}
          id="night"
          name="backGround"
          value="night"
          onChange={setBackground}
        />
      </ItemLists>
      <SelectTitle title={"친구 선택"} />
      <ItemLists>
        <SelectItem label={"청색 기와"} />
        <SelectItem label={"적색 기와"} />
        <SelectItem label={"흑색 기와"} />
      </ItemLists>
      <Btn>모두 선택해 주시오.</Btn>
    </Container>
  );
};

export default RightSide;

const Container = styled.aside`
  display: flex;
  flex-direction: column;
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
  overflow-y: scroll;
  &.show {
    right: 0;
    opacity: 1;
  }
`;

const XBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

const TextField = styled.p`
  font-family: var(--font-hunmin);
  line-height: 26px;
  font-size: 36px;
  padding-left: 0;
  line-height: normal;
  > span {
    color: #e75852;
  }
`;

const ResetBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border: 1px solid #ededed;
  border-radius: 50%;
  box-shadow: 0px 4px 16px rgba(13, 32, 57, 0.06);
`;

const ItemLists = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 372px;
  height: 64px;
  font-family: var(--font-hunmin);
  font-size: 20px;
  color: #bbb;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-top: 10px;
`;
