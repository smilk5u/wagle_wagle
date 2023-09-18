import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import { useState } from "react";
import giwaFrame from "../../assets/stroage/giwa_frame_img.png";
import { ReactComponent as VisitIcon } from "../../assets/common/visit_icon.svg";
import { ReactComponent as Badge } from "../../assets/stroage/latest_badge.svg";
import { ReactComponent as FontsArrow } from "../../assets/common/fonts_arrow.svg";

const giwaData = [
  { id: 1, name: "홍길동1", date: "23년 10월 9일", img: "" },
  { id: 2, name: "홍길동2", date: "23년 10월 9일", img: "" },
  { id: 3, name: "홍길동3", date: "23년 10월 9일", img: "" },
  { id: 4, name: "홍길동4", date: "23년 10월 9일", img: "" },
  { id: 5, name: "홍길동5", date: "23년 10월 9일", img: "" },
  { id: 6, name: "홍길동6", date: "23년 10월 9일", img: "" },
  { id: 7, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 8, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 9, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 10, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 11, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 12, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 13, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 14, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 15, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 16, name: "홍길동7", date: "23년 10월 9일", img: "" },
  { id: 17, name: "홍길동7", date: "23년 10월 9일", img: "" },
]

// 사용자 선택 데이터 
let selectData = ['기와 목록 최신순', '기와 목록 과거순'];

const StorageGiwa = () => {
  const [giwaStorate, setGiwaStorate] = useState(giwaData);
  const [showOptions, setShowOptions] = useState(false); // 셀렉트
  const [select, setSelect] = useState(selectData[0]);

  /* 폰트 변경 */
  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setSelect({
      ...select,
      font: innerText
    })
  };

  return (
    <>
      <NavBar />
      <Container>
        <AsideTtile>
          <Title>
            <span>홍길동</span>님, <br />
            기와를 이만큼 <br />
            받았다오.
          </Title>
          <p>총 <em>{giwaStorate.length}</em>개를 받았소.</p>
        </AsideTtile>
        <StorageContain>
          <Nav>
            <div>
              <Link to="/MyPage">마이페이지</Link>
              <VisitIcon />
              <b>보관함</b>
            </div>
            <SelectBox onClick={() => setShowOptions((prev) => !prev)} show={showOptions}>
              <Label>
                {select.font}
              </Label>
              <SelectOptions show={showOptions}>
                {
                  selectData.map(item => <Option onClick={handleOnChangeSelectValue}>{item}</Option>)
                }
              </SelectOptions>
            </SelectBox>
          </Nav>
          <GiwaWrap>
            {
              giwaStorate.map(item => (
                <GiwaLi key={item.id}>
                  <button type="button">
                    <img src={giwaFrame} alt="" />
                    <span>{item.date}</span>
                    <em><Badge /></em>
                  </button>
                </GiwaLi>
              ))
            }
          </GiwaWrap>
        </StorageContain>
      </Container>
    </>
  );
};

export default StorageGiwa;

const Container = styled.div`
  max-width: 980px;
  margin: 240px auto 0;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;
const AsideTtile = styled.div`
  width: 38%;
  float: left;
  p {
    color: #424242;
    font-family: var(--font-hunmin);
    font-size: 22px;
    font-weight: 400;
    margin: 45px 0 0;
    em {
      color: #E75852;
      font-family: var(--font-hunmin-saeron);
      font-weight: 600;
    }
  }
`;
const Title = styled.strong`
  color: #222;
  font-family: var(--font-hunmin);
  font-size: 40px;
  font-weight: 600;
  line-height: 53px;
  span {
    color: #E75852;
  }
`;
const StorageContain = styled.div`
  width: 60%;
  float: right;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px;
  > div {
    display: flex;
    align-items: center;
    > a,b {
      color: #616161;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.2px;
    }
    b {
      font-weight: 500;
    }
    > svg {
      margin: 0 17px;
      path {
        stroke: #616161;
      }
    }
  }
`;

/* 셀렉트 박스 */
const SelectBox = styled.div`
  width: 198px;
  position: relative;
  padding: 15px 19px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #E6E6E6;
  border-radius: ${(props) => (props.show ? "6px 6px 0 0" : "6px")};
  border-color: ${(props) => (props.show ? "#1748C1" : "#E6E6E6")};
  background-color: ${(props) => (props.show ? "#fff" : "#FAFAFA")};
  label { 
    color: ${(props) => (props.show ? "#1748C1" : "#BDBDBD")};
    svg {
      transform: ${(props) => (props.show ? "rotate(180deg)" : "rotate(0)")};
      path {
        stroke: ${(props) => (props.show ? "#1748C1" : "#858585")};
      }
    }
  }
  ul {
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;
const Label = styled.label`
  font-size: 16px;  
  text-align: center;    
  font-weight: 500;
  > svg {
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
    path {
      transition: stroke, .2s;
    }
  }
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 46px;
  left: -1px;
  overflow: hidden;    
  padding: 0;     
  box-sizing: border-box;
  z-index: 2;  
  overflow-y: auto;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
  border:1px solid #1748C1;
  border-top:0;
  &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; 
    border-radius: 10px;
    border:1px solid #e6e6e6;
  }
  &::before {
    width: 14px;
    height: 9px;
    content: "";
    position: absolute;
    top: 20px;
    margin:auto;
    right: 19px;
    background: url(${FontsArrow}) 50% 50% no-repeat;
    transition: transform, .2s;
    transform: ${(props) => (props.show ? "rotate(180deg)" : "rotate(0)")};;
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
    top: 0; 
    position: absolute;
    margin: auto;
    left: 0; 
    right: 0;
    background-color: #E8E8E8;
  }
  &:hover {
    color: #1748C1;
  }
`;

const GiwaWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5.6122%;
`;
const GiwaLi = styled.li`
  width: 29.5918%; 
  margin: 0 0 5.6122%;
  position: relative;
  button {
    > span {
      margin: 5% 0 0;
      float: right;
      color: #757575;
      text-align: right;
      font-family: var(--font-hunmin-saeron);
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.2px;
    }
    > em {
      width: 30px;
      height: 30px;
      background-color: #E75852;
      position: absolute; left: 12px; top: 12px;
      border-radius: 30px;
      svg {
        position: absolute;
        margin: auto;
        left: 0;
        top: 0; right: 0;
        bottom: 0;
      }
    }
  }
  img {
    width: 100%;
  }  
`;
