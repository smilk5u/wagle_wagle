import styled from "styled-components";
import CheckBox from "../CheckBox/CheckBox";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

/* 회원가입 form */
function Form({ getUserInfo, onSubmit, joinUserInfo, validUserInfo, }) {
  const location = useLocation().pathname;
  const [form, setForm] = useState({
    userId: "",
    password: "",
    checkPassword: "",
  });

  useEffect(() => {
    // 로그인 페이지일때 데이터를 로그인으로 아니면 회원가입으로...
    // 폼과, 로케이션, 겟유저인포, 조인유저인포가 업데이트 되었을때 동작 됨!
    location === "/login" ? getUserInfo(form) : joinUserInfo(form);
  }, [form, location, getUserInfo, joinUserInfo]);

  const updateForm = useCallback((name, value) => {
    setForm({ ...form, [name]: value });
  }, [form]);

  // const onClick = (e) => {
  //   e.preventDefault();
  //   onSubmit();
  // };

  const linkToJoin = () => {
    window.location.pathname = "/join";
  };

  return (
    <FormComponent location={location}>
      <Input
        icon="User"
        type="email"
        placeholder="이메일을 적어주세요."
        name="userId"
        updateForm={updateForm}
        validUserInfo={validUserInfo}
      />
      <Input
        icon="Password"
        type="password"
        placeholder="비밀번호를 적어주세요."
        name="password"
        updateForm={updateForm}
        validUserInfo={validUserInfo}
      />
      {location === "/login" && (
        <LoginCheckDiv>
          <CheckBox labelName="이메일, 비밀번호 저장" />
          <LinkItem to="/find_password">비밀번호 찾기</LinkItem>
        </LoginCheckDiv>
      )}
      {location !== "/login" && (
        <Input
          icon="Password"
          type="password"
          placeholder="비밀번호를 한번 더 적어주세요."
          name="checkPassword"
          password={form.password}
          updateForm={updateForm}
          validUserInfo={validUserInfo}
        />
      )}
      <Button
        buttonText={location === "/login" ? "로그인" : "회원가입"}
        onClick={onSubmit}
        location={location}
      />
      {location === "/login" && (
        <Button buttonText="회원가입" onClick={linkToJoin} color="white" />
      )}
    </FormComponent>
  );
}


/* 호패만들기 form */
function FormMakeHopae({ getUserInfo, onSubmit, joinUserInfo, validUserInfo, }) {
  const location = useLocation().pathname;
  const [form, setForm] = useState({
    userId: "",
    password: "",
    checkPassword: "",
  });

  useEffect(() => {
    location === "/login" ? getUserInfo(form) : joinUserInfo(form);
  }, [form, location, getUserInfo, joinUserInfo]);

  const updateForm = useCallback(
    (name, value) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  // const onClick = (e) => {
  //   e.preventDefault();
  //   onSubmit();
  // };

  const linkToJoin = () => {
    window.location.pathname = "/join";
  };

  return (
    <FormComponent location={location}>
      <Input
        icon="User"
        type="text"
        placeholder="호명을 적어주세요."
        name="hopae"
        updateForm={updateForm}
        validUserInfo={validUserInfo}
      />

      <Button buttonText="기와집 만들러 가기" location={location} onClick={linkToJoin} />

    </FormComponent>
  );
}

export { Form as default, FormMakeHopae };


const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.location === "/login" ? "40px" : "20px")};
`;

const LoginCheckDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const LinkItem = styled(Link)`
  color: #9e9e9e;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  text-decoration-line: none;
  padding-bottom: 1px;
  border-bottom: 1px solid #9e9e9e;
`;
