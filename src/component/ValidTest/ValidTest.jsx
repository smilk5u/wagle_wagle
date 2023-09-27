import { useEffect, useState } from "react";
import { styled } from "styled-components";


// 이메일 판별
const validEmail = (value) => {

  let output = false;

  // 비어있지 않음
  if (value !== ""){

    // 판별식
    const regex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;

    output = regex.test(value);
  }

  // 출력
  return output;
}

// 비밀번호 판별
const validPwd = (value) => {

  let output = false;

  // 비어있지 않음
  if (value !== ""){

    // 판별식
    const regex = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{6,16}$/;

    output = regex.test(value);
  }

  // 출력
  return output;
}

// 호패 판별
const validHopae = (value) => {

  let output = false;

  // 비어있지 않음
  if (value !== ""){

    // 한글 유효성 검사 기호 정의
    const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    // 한 글자씩 분해
    // 한글과 영문이 섞인 호패도 유효하지 않게 분류 위함.
    let validBool = true;
    for(let val of value){
      
      // 한 글자씩 한글 유효성 검사
      // 한글이 아닌 경우
      if (!regex.test(val)){
        validBool = false;
        break;
      }
    }

    // 출력
    output = validBool;
  }

  // 출력
  return output;
}

const Container = styled.div``;

const IsTrue = styled.span`
  color: green;
  font-size: 0px;
  margin-top: 5px;
  display: block;
`;

const IsFalse = styled.span`
  color: red;
  font-size: 16px;
  margin-top: 5px;
  display: block;
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


export {
  validEmail, validPwd, validHopae, 
  IsTrue, IsFalse, CheckInfo
};