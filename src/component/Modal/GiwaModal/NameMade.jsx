import React, { useState } from "react";
import styled from "styled-components";
import SelectTitle from "../../SelectTitle/SelectTitle";
import { ReactComponent as Booklet } from "./../../../assets/modal/booklet.svg";
import { ReactComponent as Hat } from "./../../../assets/main/kigHat.svg";
import { englishRegex, profanity } from "./WriteGuestText";
import { useDispatch } from "react-redux";
import { writeNickName } from "../../../redux/actions/giwaActions";

const NameContain = ({ text }) => {
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const checkProfanity = (text) => {
    let censoredText = text;
    profanity.forEach((item) => {
      censoredText = censoredText.replace(item, "아리랑");
    });
    if (text !== censoredText) {
      dispatch(writeNickName(censoredText));
      setNickName(censoredText);
      setIsChecked(
        <span className="profanity">
          이 이름은 어떤가?
          <br />
          전에 있던 이름은 오해의 소지가 있어
          <br />
          보여 내가 바꿔보았다네
        </span>
      );
    }
    return censoredText;
  };

  const handleNickNameBlur = () => {
    if (englishRegex.test(nickName)) {
      dispatch(writeNickName(nickName));
      setIsChecked(
        <span className="english">한글로는 어떻게 불러야 하는가?</span>
      );
      return;
    }
    const censoredText = checkProfanity(nickName);
    if (censoredText === nickName) {
      dispatch(writeNickName(nickName));
      setIsChecked(<span>멋진 이름을 가지고 있구려!</span>);
      return;
    }
  };
  return (
    <NameWrap>
      <Text>
        <Booklet />
        <p>{text}</p>
      </Text>
      <NameInput>
        <SelectTitle
          title={
            "어떤 호명으로 등록이 되고 싶은가? 최대 8글자만 사용 가능하다네."
          }
          fontSize="16px"
          weight={500}
        />
        <input
          type="text"
          value={nickName}
          onChange={(e) => {
            setIsChecked(false);
            if (e.target.value.length > 8) {
              return;
            }
            setNickName(e.target.value);
          }}
          onBlur={handleNickNameBlur}
        />
        <TextNotification>
          <Hat width={21} height={19} />
          <div>{isChecked ? isChecked : <span>이름이 무엇인가?</span>}</div>
        </TextNotification>
      </NameInput>
    </NameWrap>
  );
};
export default NameContain;

const NameWrap = styled.div`
  display: flex;
  margin: 36px 0 45px;
  gap: 35px;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 573px;
  min-width: 573px;
  min-height: 357px;
  position: relative;
  padding: 50px 30px 50px 40px;
  box-sizing: border-box;
  svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  p {
    height: 250px;
    position: relative;
    padding: 0 10px 0 0;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    font-family: var(--font-Inter);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #e6d6b757;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 10px;
      background-color: #bb9266;
    }
  }
`;

const NameInput = styled.div`
  box-sizing: border-box;
  padding: 92px 0 0;
  svg {
    min-width: 34px;
  }
  input {
    width: 275px;
    border-radius: 6px;
    border: 1px solid #e6e6e6;
    background-color: #fafafa;
    color: #bdbdbd;
    font-family: var(--font-hunmin);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    padding: 11px 14px;
    line-height: 22px;
    letter-spacing: 0.64px;
    &:hover,
    &:focus {
      outline: none;
      border-color: #e6e6e6;
      background-color: #fff;
    }
  }
`;

const TextNotification = styled.div`
  margin: 20px 0 0;
  display: flex;
  align-items: start;
  > div {
    margin: 0 0 0 3px;
  }
  span {
    color: #909090;
    font-family: var(--font-hunmin);
    font-size: 15px;
    line-height: 23px;
    font-weight: 300;
    &.english {
      color: var(--btn-main-color);
    }
    &.profanity {
      color: #1748c0;
    }
  }
`;
