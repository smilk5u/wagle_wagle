import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function ValidTest({ name, value, password, validUserInfo, handleIsValidHopae }) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isHopae, setIsHopae] = useState(false);
  const [isHopaeWarn, setIsHopaeWarn] = useState("");

  // input값이 비어있는지 아닌지를 판단
  useEffect(() => {
    const emptyDelay = setTimeout(() => {
      if (value === "") {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
    }, 500);

    return () => {
      clearTimeout(emptyDelay);
    };
  }, [value]);

  // 유효성 검사를 통한 문구 출력
  useEffect(() => {
    const valid = setTimeout(() => {
      // email 유효성 검사
      if (name === "userId") {
        const emailRegex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
        emailRegex.test(value) ? setIsEmail(true) : setIsEmail(false);
        return;
      }

      // password 유효성 검사
      if (name === "password") {
        const passwordRegex =
          /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{6,16}$/;
        // 입력한 password가 정규식에 만족하는지 확인
        passwordRegex.test(value) ? setIsPassword(true) : setIsPassword(false);
        return;
      }

      if (name === "checkPassword" && !(password === "")) {
        value === password
          ? setIsPasswordConfirm(true)
          : setIsPasswordConfirm(false);
        return;
      }

      // hopae 유효성 검사
      if (name === "hopae") {

        // 빈 문자열인 경우
        if (value == ""){
          setIsHopae(false);
        }

        // 비어있지 않은 경우
        else{

          // 최대 8자 이하로 작성해 주세요.
          if (value.length > 8){
            setIsHopae(false);
            setIsHopaeWarn("최대 8자 이하로 작성해 주세요.");
          }

          // 호명이 8자 이하인 경우
          else{
            
            // 한글 유효성 검사 기호 정의
            const hopaeRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  
            // 한 글자씩 분해
            // 한글과 영문이 섞인 호패도 유효하지 않게 분류 위함.
            let validBool = true;
            for(let val of value){
              
              // 한 글자씩 한글 유효성 검사
              // 한글이 아닌 경우
              if (!hopaeRegex.test(val)){
                validBool = false;
                break;
              }
            }

            // 모든 글자가 한글일 때 유효성 확인
            if (validBool){
              setIsHopae(true);
            } 
            
            // 호명에 영문이 섞인 경우
            else{
              setIsHopae(false);
              setIsHopaeWarn("호명은 한글만 사용할 수 있습니다.");
            }
          }
        }
        
        return;
      }

      return;
    }, 300);
    return () => {
      clearTimeout(valid);
    };
  }, [name, value, password]);

  // 유효성 검사가 통과하면 해당 결과를 valid함수에 추가
  useEffect(() => {
    if (isEmail) validUserInfo("isEmail", isEmail);
    if (isPassword) validUserInfo("isPassword", isPassword);
    if (isPasswordConfirm)
      validUserInfo("isPasswordConfirm", isPasswordConfirm);
    if (isHopae) validUserInfo("isHopae", isHopae);

    return;
  }, [isEmail, isPassword, isPasswordConfirm, isHopae]);


  // 호패만들기 페이지 '기와 만들러 가기' 버튼 활성화/비활성화
  if (name === "hopae"){
    handleIsValidHopae(!isHopae);
  }

  return (
    <Container>
      {/* 삼항연산자를 사용했는데 다른 방법이 있는지 찾와봐야할듯 */}
      {/* email 부분 */}
      {name === "userId" ? (
        !isEmpty ? (
          isEmail ? (
            <IsTrue>유효한 이메일입니다.</IsTrue>
          ) : (
            <IsFalse>유효하지 않은 이메일입니다.</IsFalse>
          )
        ) : null
      ) : null}
      {/* password부분 */}
      {name === "password" ? (
        !isEmpty ? (
          isPassword ? (
            <IsTrue>유효한 비밀번호입니다.</IsTrue>
          ) : (
            <IsFalse>유효하지 않은 비밀번호입니다.</IsFalse>
          )
        ) : (
          <CheckInfo>
            <span>* </span>
            6~16자, 영문 대.소문자, 숫자, 특수문자 중 2개 이상 사용하세요.
          </CheckInfo>
        )
      ) : null}
      {/* password 비교 부분 */}
      {name === "checkPassword" ? (
        !isEmpty ? (
          isPasswordConfirm ? (
            <IsTrue>비밀번호가 일치합니다.</IsTrue>
          ) : (
            <IsFalse>비밀번호가 일치하지 않습니다.</IsFalse>
          )
        ) : null
      ) : null}

      {/* hopae 유효성 검사 */}
      {name === "hopae" ? (
        !isEmpty ? (
          isHopae ? (
            <IsTrue>유효한 호패입니다.</IsTrue>
          ) : (
            <IsFalse>{isHopaeWarn}</IsFalse>
          )
        ) : (
          <CheckInfo>
            <span>* </span>
            호명은 한글만 사용 가능해요.
          </CheckInfo>
        )
      ) : null}
    </Container>
  );
}

const Container = styled.div``;

const IsTrue = styled.span`
  color: green;
  font-size: 16px;
`;

const IsFalse = styled.span`
  color: red;
  font-size: 16px;
`;

const CheckInfo = styled.span`
  display: block;
  color: #9e9e9e;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 5px;
  > span {
    color: #e75852;
  }
`;
