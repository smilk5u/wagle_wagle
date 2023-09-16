import React from 'react';
import styled from 'styled-components';
import SelectTitle from '../../SelectTitle/SelectTitle';
import { ReactComponent as Booklet } from "./../../../assets/booklet.svg";
import { ReactComponent as KigHat } from "./../../../assets/main/kigHat.svg"

const NameContain = () => {

  const goodWord = "멋진 이름을 가지고 있구려!";
  const errorWord = "한글로는 어떻게 불러야 하는가?";
  const koreanWord = "이 이름은 어떤가? 전에 있던 이름은 오해의 소지가 있어 보여 내가 바꿔보았다네";

  return (
    <NameWrap>
      <Text>
        <Booklet />
        <p>들어봐 밤이, <br />
          봄 밤이오래된 애인들과 어떻게이야기하는지꽃들이,<br />
          등 아래 핀 벚꽃들이서늘한 봄 비에 지면서도<br />
          얼마나 빛나는지 백석을 읽는 밤내일을 돌보지 않아도<br />
          푸근하고 아린이런 봄날, 봄밤발치에 조으는<br />
          짐승의 착한눈꺼풀과이불 아래 방바닥의 온기와 주전자서<br />
          끓는 구수한 보리차 냄새가지들 마른 울음<br />
          그치고 저리던 뿌리들도 축축히 잠드는이런 봄, 밤</p>
      </Text>
      <NameInput>
        <SelectTitle title={"어떤 호명으로 등록이 되고 싶은가? 최대 8글자만 사용 가능하다네."} fontSize="16px" weight={500} />
        <input />
        <TextNotification>
          <KigHat width={20} height={17} />
          {
            <span>멋진 이름을 가지고 있구려!</span>
          }
        </TextNotification>
      </NameInput>
    </NameWrap>
  );
};
export default NameContain;

const NameWrap = styled.div`
  display: flex;
  margin: 36px 0;
  gap: 35px;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  min-width: 578px;
  min-height: 357px;
  position: relative;
  padding: 50px 30px 50px 40px;
  box-sizing: border-box;
  svg {
    position: absolute;
    left: 0; top: 0;
  } 
  p {
    height: 250px;
    position: relative;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    font-family: var(--font-Inter);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px; 
      background-color: #e6d6b757;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%; 
      border-radius: 10px;
      background-color: #bb9266;
    }
  }
`;

const NameInput = styled.div`
  box-sizing: border-box;
  svg {
    min-width: 34px;
  }  
  input {
    width: 275px;
    border-radius: 6px;
    border: 1px solid #E6E6E6;
    background: #FAFAFA;
    color: #BDBDBD;
    font-family: var(--font-hunmin);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    padding: 11px 14px;
    line-height: 22px;
    letter-spacing: 0.64px;
    &:hover, &:focus {
      outline: none;
    }
  }
`;

const TextNotification = styled.div`
  margin: 15px 0 0;
  display: flex;
  align-items: center;  
  span {
    margin:0 0 0 5px;
    color: #909090;
    font-family: var(--font-hunmin);
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
  }
`;