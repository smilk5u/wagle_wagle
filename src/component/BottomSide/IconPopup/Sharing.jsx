import styled from "styled-components";
import { ReactComponent as SharingIcon } from "../../../assets/bottomSide/out_sharing_icon.svg";

const Sharing = ({ bg }) => {
  return (
    <Contain bg={bg}>
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
  left: -220px;
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: ${({ bg }) => bg === 'day' ? '1px solid #ECE0B9' : '1px solid #171A32'};
  box-shadow: ${({ bg }) => bg === 'day' ? '5px 5px 15px #ECE0B9' : '5px 5px 15px rgba(23, 26, 50, 0.377)'};
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
    border: ${({ bg }) => bg === 'day' ? '1px solid #AE8960' : '1px solid #171A32'};
    border-radius: 100%;
    transition: background-color, .2s;
    &:hover { 
      background-color: ${({ bg }) => bg === 'day' ? '#AE8960' : '#171A32'};
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
        stroke: ${({ bg }) => bg === 'day' ? '#AE8960' : '#171A32'};
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