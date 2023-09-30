import styled from "styled-components";
import { useBgColor } from "../../contexts/BackgroundColor";

const Warning = ({ testActive }) => {
  const { bgColor } = useBgColor(); // BG Color context

  return (
    <WarningConain $bgColor={bgColor} className={testActive ? "active" : null}>
      {
        <p>
          <em>❌</em>다른 사람이 받은 기와는 볼 수 없다네.
        </p>
      }
      {/* {
        <p>작성한 글은 잠시 저장되었으니 <br />나가지만 않는다면 이어서 작성할 수 있다네.</p>
      } */}
    </WarningConain>
  );
};

export default Warning;

const WarningConain = styled.div`
  position: absolute;
  top: -13%;
  left: -20%;
  right: 0;
  margin: auto;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px 30px;
  border: ${({ $bgColor }) =>
    $bgColor ? "1px solid #ECE0B9" : "1px solid #171A32 "};
  box-shadow: ${({ $bgColor }) =>
    $bgColor ? "5px 5px 15px #ECE0B9" : "5px 5px 15px rgba(23, 26, 50, 0.377)"};
  border-radius: 10px;
  transition: all, 1s, ease-in-out;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
  p {
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 16px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.16px;
    em {
      margin: 0 5px 0 0;
      font-size: 14px;
    }
  }
`;
