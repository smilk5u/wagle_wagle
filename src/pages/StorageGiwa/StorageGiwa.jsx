import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import GuestBook from "../../component/RightSide/GuestBook";
import giwaFrame from "../../assets/common/giwa_frame_img.jpg";
import { ReactComponent as VisitIcon } from "../../assets/common/visit_icon.svg";
import { ReactComponent as Badge } from "../../assets/storage/latest_badge.svg";
import { ReactComponent as ToggleArrow } from "../../assets/common/toggle_arrow.svg";
import giwaData from "../../data/giwaStorage";

/* 비교데이터 */
let data = ['기와 목록 최신순', '기와 목록 과거순'];

const StorageGiwa = () => {
  const [giwaStorage, setGiwaStorage] = useState(giwaData); // 기와 보관함 데이터
  const [showOptions, setShowOptions] = useState(false); // 셀렉트 boolean
  const [openGusetBook, setOpenGusetBook] = useState(false); // 방명록 모달창
  const [selectData, setSelectData] = useState({
    select: '기와 목록 최신순',
    option: '기와 목록 과거순'
  });


  const openGusetBookModal = () => {
    setOpenGusetBook(true);
  };
  const closeGusetBookModal = () => {
    setOpenGusetBook(false);
  };

  /* 셀렉트 선택 */
  const handleOnChangeSelectValue = (e) => {
    if (!showOptions) return
    const { innerText } = e.target;
    setSelectData({
      select: data.filter(item => item === innerText),
      option: data.filter(item => item !== innerText)
    })
  };

  return (
    <>
      <NavBar />
      <Container open={openGusetBook}>
        <AsideTitle>
          <Title>
            <span>홍길동</span>님, <br />
            기와를 이만큼 <br />
            받았다오.
          </Title>
          <p>총 <em>{giwaStorage.length}</em>개를 받았소.</p>
        </AsideTitle>
        <StorageContain>
          <Nav>
            <NavCont>
              <Link to="/MyPage">마이페이지</Link>
              <VisitIcon />
              <b>보관함</b>
            </NavCont>
            <Select onClick={() => setShowOptions((boolean) => !boolean)} $show={showOptions}>
              <ul>
                <li onClick={handleOnChangeSelectValue}><button>{selectData.select}<ToggleArrow /></button></li>
                <li onClick={handleOnChangeSelectValue}><button>{selectData.option}</button></li>
              </ul>
            </Select>
          </Nav>
          <GiwaWrap>
            {
              giwaStorage.map(item => (
                <GiwaLi key={item.id}>
                  <button type="button" onClick={openGusetBookModal}>
                    {/* 기와 이미지 */}
                    <img src={item.img} alt="" />
                    {/* 뱃지 */}
                    {item.id < 13 && <em><Badge /></em>} 
                  </button>
                  <span>{item.date}</span>
                </GiwaLi>
              ))
            }
          </GiwaWrap>
        </StorageContain>
      </Container>

      {/* 방명록 start */}
      <GuestBook
        openGusetBook={openGusetBook}
        xBtnClickHandler={closeGusetBookModal}
      ></GuestBook>
      {/* 방명록 end */}

      <Dimmed open={openGusetBook}></Dimmed>
    </>
  );
};

export default StorageGiwa;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 240px 0 0 50px;
  position: relative;
  transition: all ease-in-out 1s;
  left: ${({ open }) => open ? '-350px' : '0'};
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const AsideTitle = styled.div`
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
`;

const NavCont = styled.div`
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
`;

const Select = styled.div`
  width: 198px; height: 50px;
  position: relative;
  margin: 0 -3% 0 0;
  /* z-index: 104; // test 후 삭제하기 */
  &:before {
      width: 73%;
      height: 1px;
      display: block;
      position: absolute;
      content: "";
      bottom: -2px; left: 0;
      margin: auto;
      right: 0;
      background-color: #E8E8E8;
    }
  ul {
    overflow: hidden;
    height:${({ $show }) => $show ? 'auto' : '50px'}; 
    position: absolute;
    width: 100%;
    top: 0; left: 0;
    background-color: #fff;
    z-index: 1;    
    border-radius: 14px;
    box-shadow: ${({ $show }) => $show ? '3px 3px 10px #e4e1e15a' : 'none'}; 
    box-sizing: border-box;
    border: ${({ $show }) => $show ? '1px solid #EAEAEA' : '1px solid transparent'}; 
  }
  li {    
    height: 50px;
    padding: 0 0 0 30px; 
    position: relative;
    display: flex;
    align-items: center;
    &:nth-of-type(1) {
      &:before {
        display: none;
      }
    }
    &:before {
      width: 73%;
      height: 1px;
      display: block;
      position: absolute;
      content: "";
      top: 0; left: 0;
      margin: auto;
      right: 0;
      background-color: #E8E8E8;
    }
    > button {
      width: 100%;
      height: 100%;
      display: block;
      color: ${({ $show }) => $show ? '#B3B3B3' : 'B3B3B3'}; 
      font-size: 14px;
      font-weight: 400;
      line-height: 28px; 
      letter-spacing: 0.2px;
      svg {
        position: absolute; right: 17%; 
        margin: auto; bottom: 0; top: 0;
        /* transition: transform, all .25s ease-in-out; */
        transform: ${({ $show }) => $show ? 'rotate(0)' : 'rotate(-180deg)'}; 
      }
      &:hover {
        color: #535353;
      }
    }
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
  /* z-index: 103; // 테스트 후 지우기 */
  &.active {
    > span {
      color: #fff;
    }
    button {
      &:hover {
        &:after {        
          background-color: transparent;
        }
      }
    }
  }
  > span {
    color: red;
    margin: 5% 0 0;
    float: right;
    color: #757575;
    text-align: right;
    font-family: var(--font-hunmin-saeron);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
  }  
  button {
    position: relative;
    overflow: hidden;
    border-radius: 15px;    
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0; left: 0;
      background-color: transparent;
      transition: background-color, .3s ease-in-out;
      pointer-events: none;
    }
    &:hover {
      &:after {        
        background-color: rgba(231, 88, 82, .7);
      }
    } 
    > svg {
      position: absolute;
      width: 38%;
      left: 12%;
      top: 26%; 
      bottom: 0;
      right: 0;
      margin: auto;
    }
    > em {
      width: 30px;
      height: 30px;
      background-color: #E75852;
      position: absolute; left: 12px; top: 12px;
      border-radius: 30px;
      > svg {
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

const Dimmed = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 32, 32, 0.6);
  transition: all ease-in-out 1s;
  /* display: ${({ open }) => open ? 'block' : 'none'}; */
  opacity: ${({ open }) => open ? '1' : '0'};
  z-index: ${({ open }) => open ? '100' : '-1'};
  top: 0;
  left: 0;
`;