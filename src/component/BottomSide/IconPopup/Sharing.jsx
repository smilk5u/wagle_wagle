import styled from "styled-components";
import { ReactComponent as SharingIcon } from "../../../assets/main/out_sharing_icon.svg";

const Sharing = () => {
  return (
    <Contain>
      <p>
        기와집을 널리 알리면, <br />
        기와를 더 받을수 있다네
      </p>
      <button type="button">
        <SharingIcon />
      </button>
    </Contain>
  );
};

export default Sharing;

const Contain = styled.div`
  width: max-content;
  padding: 30px 35px;
  position: absolute; 
  bottom: 85px;
  left: -65px;
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .8);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #ECE0B9;
  border-radius: 20px;
  &:after {
    content: "";
    display: block;
  }
  > button {
    width: 60px;
    height: 60px;
    position: relative;
    margin: 0 0 0 34px;
    border: 1px solid #AE8960;
    border-radius: 100%;
    transition: background-color, .2s;
    &:hover { 
      background-color: #AE8960;
      svg {
        path {
          stroke: #FFFFFF;
        }
      }
    }
    svg {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0; 
      margin: auto;
      path {
        transition: stroke, .2s;
      }
    }
  }
  > p {
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
  }
`;