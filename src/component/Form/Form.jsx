import styled from "styled-components";
import CheckBox from "../CheckBox/CheckBox";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Form({
  getUserInfo,
  onSubmit,
  joinUserInfo,
  validUserInfo,
}) {
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

  // dummy ftn
  const handleIsValidHopae = (newData) => {
    console.log(newData);
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
        handleIsValidHopae={handleIsValidHopae}   // dummy
      />
      <Input
        icon="Password"
        type="password"
        placeholder="비밀번호를 적어주세요."
        name="password"
        updateForm={updateForm}
        validUserInfo={validUserInfo}
        handleIsValidHopae={handleIsValidHopae}   // dummy
      />
      {location === "/login" && (
        <LoginCheckDiv>
          <CheckBox labelName="이메일, 비밀번호 저장" />
          <LinkItem to="/findPwd">비밀번호 찾기</LinkItem>
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
          handleIsValidHopae={handleIsValidHopae}   // dummy
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


function FormMakeHopae({
  validUserInfo,
}) {

  const location = useLocation().pathname;

  const [form, setForm] = useState({
    userId: "",
    password: "",
    checkPassword: "",
  });

  const updateForm = useCallback(
    (name, value) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const linkToJoin = () => {
    window.location.pathname = "/join";
  };

  // 호패만들기 '기와집 만들러 가기' 버튼 비활성화 위한 변수
  const [isValidHopae, setIsValidHopae] = useState(true);

  const handleIsValidHopae = (newData) => {
    setIsValidHopae(newData);
  };

  return (
    <FormComponent2>
      <Input
        icon="User"
        type="text"
        placeholder="호명을 적어주시오."
        name="hopae"
        updateForm={updateForm}
        validUserInfo={validUserInfo}
        handleIsValidHopae={handleIsValidHopae}
      />
  
      <Button 
        buttonText="기와집 만들러 가기" 
        location={location} 
        onClick={linkToJoin}
        disabled={isValidHopae}
      />

    </FormComponent2>
  );
}

function FormFindPwd({
  validUserInfo,
  onClickBtn,
}) {

  const location = useLocation().pathname;

  const [form, setForm] = useState({
    userId: "",
    password: "",
    checkPassword: "",
  });

  const updateForm = useCallback(
    (name, value) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  // '메일 보내기' 버튼 비활성화 위한 변수
  const [isValidFindPwd, setIsValidFindPwd] = useState(true);

  const handleIsValidFindPwd = (newData) => {
    setIsValidFindPwd(newData);
  };

  // '메일 보내기' 확인 modal 창 띄우기
  const onClick = ()=>{
    onClickBtn(true);
  }

  return (
    <FormComponent2>
      <Input
        icon="User"
        type="text"
        placeholder="이메일을 적어주세요."
        name="findPwd"
        updateForm={updateForm}
        validUserInfo={validUserInfo}
        handleIsValidHopae={handleIsValidFindPwd}
      />
  
      <Button 
        buttonText="메일 보내기" 
        location={location} 
        onClick={onClick}
        disabled={isValidFindPwd}
      />

    </FormComponent2>
  );
}

export { Form as default, FormMakeHopae, FormFindPwd };


const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.location === "/login" ? "40px" : "20px")};
`;

const FormComponent2 = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
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
