import { styled } from "styled-components";
import useInput from "../../hooks/useInput";
import { ReactComponent as UserIcon } from "../../assets/login/octicon-person-24.svg";
import { ReactComponent as PasswordIcon } from "../../assets/login/icons-8-lock-2.svg";
import { ReactComponent as ClosedEyeIcon } from "../../assets/login/humbleicons-eye-close.svg";
import { ReactComponent as OpendEyeIcon } from "../../assets/login/fluent-eye-12-filled.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// InputText
function InputText({
  placeholder,
  dataName,
  updateData,
  onEmailCheck,
  isValid
}) {

  const location = useLocation().pathname;
  const [input, setInput] = useInput("");
  const [isFocus, setIsFocus] = useState(false);
  const onFocusChange = () => {
    setIsFocus(true);
  };
  const onBlurChange = () => {
    input === "" && setIsFocus(false);
  };

  useEffect(() => {
    updateData(dataName, input);
  }, [dataName, input]);

  return (
    // Overlap
    <InputDiv $location={location} $isFocus={isFocus}>
      {/* 이메일 중복확인 버튼 start */}
      {
        (location === "/join" && isValid.isEmail) ? (
          (!isValid.isEmeilCheck)
            ? (<button className="check" onClick={(e) => onEmailCheck(e)}>중복확인</button>)
            : (<button className="check available" onClick={(e) => onEmailCheck(e)}>사용가능</button>)
        ) : null
      }
      {/* 이메일 중복확인 버튼 end */}

      {/* icon */}
      <UserIcon fill={isFocus ? "#E75852" : "#BDBDBD"} />

      {/* input */}
      <input
        type="text"
        value={input}
        placeholder={placeholder}
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        onChange={setInput}
        autoComplete="off"
        required
      />

    </InputDiv >
  );
}

// InputPwd
function InputPwd({
  placeholder,
  dataName,
  updateData
}) {

  const location = useLocation().pathname;
  const [input, setInput] = useInput("");
  const [isFocus, setIsFocus] = useState(false);
  const [passwordShowing, setPasswordShowing] = useState(false);

  const onFocusChange = () => {
    setIsFocus(true);
  };
  const onBlurChange = () => {
    input === "" && setIsFocus(false);
  };

  useEffect(() => {
    updateData(dataName, input);
  }, [dataName, input]);

  return (

    // Overlap
    <InputDiv $location={location} $isFocus={isFocus}>

      {/* icon */}
      <PasswordIcon fill={isFocus ? "#E75852" : "#BDBDBD"} />

      {/* input */}
      <input
        type={passwordShowing ? "text" : "password"}
        value={input}
        placeholder={placeholder}
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        onChange={setInput}
        autoComplete="off"
        required
      />

      {/* EyeIconBtn */}
      {location === "/join" ? (
        <EyeIconBtn
          onClick={() =>
            setPasswordShowing((passwordShowing) => !passwordShowing)
          }
        >
          {passwordShowing ? <OpendEyeIcon /> : <ClosedEyeIcon />}
        </EyeIconBtn>
      ) : null}

    </InputDiv>
  );
}

const Container = styled.div``;

const InputDiv = styled.div`
  width: 438px;
  height: 64px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.$location === "/join" ? "20px" : null)};
  margin-bottom: ${(props) => (props.$location === "/login" ? "5px" : null)};
  position: relative;
  ${(props) =>
    props.$isFocus
      ? `border: 1px solid #e75852;
    background-color: #fff;`
      : null}
  > input {
    width: 100%;
    font-size: 18px;
    height: fit-content;
    border: none;
    background: none;
    margin-left: 10px;
    color: #222;
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.64px;
    &::placeholder {
      color: #bdbdbd;
    }
    &:focus {
      outline: none;
      color: #222;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.64px;
      &::placeholder {
        color: #e75852;
      }
    }
  }
  .check {
    width: fit-content;
    display: block;
    position: absolute; 
    right: 20px; 
    padding: 8px 13px;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    margin: auto;
    font-weight: 700;
    background-color: var(--btn-main-color);    
    transition: all ease-in-out 0.3s;
    &:hover {
      background-color: #D24640;
    }
    &.available {
      background-color: #FDEFEE;
      color: var(--btn-main-color); 
      cursor: initial;
    }
  }
`;

const EyeIconBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`;


export { InputText, InputPwd };