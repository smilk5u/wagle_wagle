import React, { useEffect } from "react";
import { styled } from "styled-components";
import SelectTitle from "../SelectTitle/SelectTitle";
import SelectItem from "../SelectItem/SelectItem";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as XIcon } from "../../assets/common/closeBtn.svg";
import { ReactComponent as ResetIcon } from "../../assets/common/reset_icon.svg";
import giwaIndigo from "../../assets/rightSide/giwa_indigo.png";
import giwaBlack from "../../assets/rightSide/giwa_black.png";
import giwaPink from "../../assets/rightSide/giwa_pink.png";
import daytime from "../../assets/rightSide/daytime.png";
import night from "../../assets/rightSide/night.png";
import haetaeFrame from "../../assets/rightSide/haetae_frame.png";
import { makeGiwaHouseApi } from "../../apis/giwa";
import { generateRandomString } from "../../utils/generateRandomString";
import { changeGiwaHouseStyle } from "../../redux/actions/giwaHouseActions";

const RightSide = ({
  openMakeup,
  xBtnClickHandler,
  updateFunction,
  btnText,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const username = useSelector((state) => state.userReducer.name);
  const isMakeGiwaHouse = location.pathname === "/makeGiwaHouse";
  const { giwaColor, background, friend } = useSelector(
    (state) => state.giwaHouseReducer
  );

  const handleChangeGiwaStyle = (e) => {
    const name = e.target.name;
    const value = Number(e.target.value);
    dispatch(
      changeGiwaHouseStyle({
        name,
        value,
      })
    );
  };

  const handleSubmit = () => {
    if (isMakeGiwaHouse) {
      makeGiwaHouseApi({
        version: "v1",
        title: "아무타이틀",
        broadStyle: {
          colorCode: giwaColor,
          backGroundCode: background,
          friendCode: friend,
        },
        url: generateRandomString(20),
      }).then((result) => {
        if (result.status === 200) {
          navigate("/main");
          return;
        }
      });
    }
  };

  return (
    <Container className={openMakeup ? "show" : null}>
      {isMakeGiwaHouse ? null : (
        <XBox>
          <XIcon
            width={"32px"}
            height={"32px"}
            fill="#212121"
            onClick={xBtnClickHandler}
          />
        </XBox>
      )}
      <div>
        <HeaderBox>
          <TextField>
            <span>{username}</span>님,
            <br />
            기와집을 꾸며보시오.
          </TextField>
        </HeaderBox>
        <SelectWrap>
          <SelectTitle title={"기와 색상 선택"} />
          <ItemLists>
            <SelectItem
              label="청색 기와"
              img={giwaIndigo}
              name={"giwaColor"}
              value={1}
              id={"giwaIndigo"}
              checked={giwaColor === 1}
              onChange={handleChangeGiwaStyle}
            />
            <SelectItem
              label="먹색 기와"
              img={giwaBlack}
              name={"giwaColor"}
              value={2}
              id={"giwaBlack"}
              checked={giwaColor === 2}
              onChange={handleChangeGiwaStyle}
            />
            <SelectItem
              label="적색 기와"
              img={giwaPink}
              name={"giwaColor"}
              value={3}
              id={"giwaPink"}
              checked={giwaColor === 3}
              onChange={handleChangeGiwaStyle}
            />
          </ItemLists>
          <SelectTitle title={"배경 선택"} />
          <ItemLists>
            <SelectItem
              label={"낮"}
              id="day"
              name="background"
              value={1}
              checked={background === 1}
              onChange={handleChangeGiwaStyle}
              img={daytime}
            />
            <SelectItem
              label={"밤"}
              id="night"
              name="background"
              value={2}
              checked={background === 2}
              onChange={handleChangeGiwaStyle}
              img={night}
            />
          </ItemLists>
          <SelectTitle title="친구 선택" />
          <ItemLists>
            <SelectItem label="해태" img={haetaeFrame} checked={friend === 1} />
          </ItemLists>
        </SelectWrap>
        <ButtonWrap>
          <Btn onClick={handleSubmit}>{btnText}</Btn>
          <ResetBox>
            <ResetIcon width={24} height={24} />
          </ResetBox>
        </ButtonWrap>
      </div>
    </Container>
  );
};

export default RightSide;

const Container = styled.aside`
  width: 680px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 50px 0px rgba(210, 201, 168, 0.5);
  border-radius: 50px 0px 0px 50px;
  position: absolute;
  right: -730px;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;
  box-sizing: border-box;
  padding: 60px 80px;
  z-index: 3;
  transition: all ease-in-out 1s;
  &.show {
    right: 0;
    opacity: 1;
  }
`;

const XBox = styled.button`
  position: absolute;
  top: 50px;
  right: 48px;
`;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectWrap = styled.div`
  margin: 40px 0 0;
`;

const TextField = styled.p`
  color: #222;
  font-family: var(--font-hunmin);
  font-size: 32px;
  font-weight: 600;
  line-height: 45px;
  > span {
    color: #e75852;
  }
`;

const ItemLists = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  position: relative;
  margin: 40px 0 0;
`;

const Btn = styled.button`
  width: 340px;
  display: block;
  height: 64px;
  text-align: center;
  margin: 0 auto;
  font-weight: 600;
  font-family: var(--font-hunmin);
  font-size: 20px;
  color: white;
  background-color: var(--btn-main-color);
  border-radius: 10px;
  &:disabled {
    color: #bbb;
    background-color: #f2f2f2;
  }
`;

const ResetBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border: 1px solid #ededed;
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: 0px 4px 16px rgba(13, 32, 57, 0.06);
  position: absolute;
  top: 0; 
  margin: auto;
  bottom: 0;
  right: 0;
  &:hover {
    svg {
      transform: rotate(-360deg);
    }
  }
  svg {
    transition: all, 0.4s ease-in-out;
  }
`;

