import { keyframes, styled } from "styled-components";
import { ReactComponent as GnbFooter } from "../../assets/gnb-footer.svg";
import { ReactComponent as MenuBtn } from "../../assets/ic_baseline_menu.svg";
import { ReactComponent as ArrowBtn } from "../../assets/Feather Icon.svg";
import { ReactComponent as MenuXBtn } from "../../assets/x-menu.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userCheckReducer } from "../../redux/reducers/userReducer";
import { logout } from "../../redux/actions/userActions";

export default function NavBar({ isShowing = true }) {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // 임시코드(로그인된 유저정보를 로컬스토리지에서 불러옴)
  // const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  // const userName = !(userInfo === null) ? userInfo.name : "";
  // 위 코드를 리덕스로 바꾼 부분이 아래부분입니다.
  const userInfo = useSelector((state) => state.userCheckReducer.User);
  const userName = userInfo.name;

  const menuBtnClick = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  // 임시코드(로그아웃/로컬스토리지에 저장되어있는 로그인정보를 지움)
  const logoutBtnClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    setIsLogin(false);
  };

  useEffect(() => {
    setIsLogin(userInfo.loggedIn);
  }, []);

  useEffect(() => {
    if (!isShowing) {
      setMenuOpen(false);
    }
  }, [isShowing]);

  return (
    <Nav className={isShowing ? null : "no-showing"}>
      <NavLogo>와글와글</NavLogo>
      <NavMenu>
        <NavMenuTop>
          {menuOpen ? (
            <StyledMenuXBtn
              onClick={menuBtnClick}
              fill="white"
              width={42}
              height={42}
            />
          ) : (
            <StyledMenuBtn onClick={menuBtnClick} />
          )}
        </NavMenuTop>
        <NavMenuMiddle menuOpen={menuOpen} $isLogin={isLogin}>
          <MyInfo>
            <MyInfoItemFirst>
              {isLogin ? (
                <p>
                  안녕하신가
                  <br />
                  <span>{userName}</span>님.
                </p>
              ) : (
                <Link to="/login">
                  로그인하세요
                  <ArrowBtn />
                </Link>
              )}
            </MyInfoItemFirst>
            <MyInfoItem>
              <LinkMypage $isLogin={isLogin}>마이페이지</LinkMypage>
              <StyledLink>사그업에 대하여</StyledLink>
              <StyledLink>문의하기</StyledLink>
            </MyInfoItem>
            {isLogin && (
              <MyInfoItem>
                <LogoutBtn onClick={logoutBtnClick}>로그아웃</LogoutBtn>
              </MyInfoItem>
            )}
          </MyInfo>
        </NavMenuMiddle>
        <NavMenuBottom>
          <GnbFooter />
        </NavMenuBottom>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  /* padding-left: 19vw; */
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 100;
  transition: all ease-in-out 1s;
  &.no-showing {
    top: -150px;
    opacity: 0;
  }
`;

const NavLogo = styled.p`
  width: 180px;
  height: 55px;
  font-size: 36px;
  text-align: center;
  font-family: var(--font-hunmin);
  line-height: 55px;
  position: absolute;
  left: 19vw;
  font-weight: 600;
`;

const NavMenu = styled.div`
  z-index: 300;
  position: absolute;
  top: 0;
  right: 19vw;
  width: 180px;
  height: auto;
`;

const NavMenuTop = styled.div`
  width: 100%;
  height: 120px;
  background-color: #071b34;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMenuXBtn = styled(MenuXBtn)`
  cursor: pointer;
`;

const StyledMenuBtn = styled(MenuBtn)`
  cursor: pointer;
`;

const NavMenuMiddle = styled.div`
  width: 100%;
  height: ${(props) =>
    props.menuOpen ? (props.isLogin ? "320px" : "230px") : "0px"};
  background-color: #071b34;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
`;

const MyInfo = styled.ul`
  width: 100%;
  height: auto;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const MyInfoItem = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 20px 10px;
  box-sizing: border-box;
  border-top: 1px solid #304055;
`;

const MyInfoItemFirst = styled(MyInfoItem)`
  font-family: var(--font-hunmin);
  > p {
    color: #fff;
    line-height: 26px;
    font-size: 22px;
    padding-left: 0;
    > span {
      color: #e75852;
    }
  }
  > a {
    display: flex;
    align-items: center;
    line-height: 26px;
    color: #fff;
    font-weight: 400;
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px; /* 150% */
`;

const LinkMypage = styled(StyledLink)`
  color: ${(props) => (props.isLogin ? "#fff" : "#455263")};
`;

const LogoutBtn = styled.button`
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px; /* 150% */
`;

const NavMenuBottom = styled.div`
  width: 100%;
  height: 48px;
`;
