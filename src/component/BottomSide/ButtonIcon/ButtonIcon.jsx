import React, { useState } from 'react';
import styled from 'styled-components';
import Sharing from "../IconPopup/Sharing";
import IssueNews from "../IconPopup/IssueNews";
import { ReactComponent as Issue } from "../../../assets/bottomSide/bell_icon.svg";
import { ReactComponent as Capture } from "../../../assets/bottomSide/capture_icon.svg";
import { ReactComponent as SharingIcon } from "../../../assets/bottomSide/sharing_icon.svg";
import { ReactComponent as GiwaSetting } from "../../../assets/bottomSide/giwa_setting_icon.svg";
import { useBgColor } from "../../../contexts/BackgroundColor";

const ButtonIcon = ({ type, openMakeupHouse }) => {
  const { bgColor } = useBgColor(); // BG Color context

  return (
    <Li $bgColor={bgColor} type={type}>
      {
        type === "issue" && (
          <>
            <button><Issue width={23} height={25} /></button>
            <IssueNews />
          </>
        )
      }
      {
        type === "capture" && (
          <button><Capture width={29} height={30} /></button>
        )
      }
      {
        type === "sharing" && (
          <>
            <button><SharingIcon width={29} height={30} /></button>
            <Sharing />
          </>
        )
      }
      {
        type === "giwaMade" && (
          <button onClick={() => openMakeupHouse(true)}><GiwaSetting width={29} height={30} /></button>
        )
      }
    </Li>
  );
};

export default ButtonIcon;

const Li = styled.li`
  position: relative;
  > button {
    width: 60px; 
    height: 60px;
    position: relative;
    border: ${({ $bgColor }) => $bgColor ? '1px solid #C09B73;' : '1px solid #fff'};
    border-radius: 60px;
    transition: background-color, .2s;
    &:hover {
      background-color: ${({ $bgColor }) => $bgColor ? '#AE8960' : '#171A32'};
      svg {
        path {
          stroke: #fff;
        }
      }
    }
    > svg {
      position: absolute; 
      margin: auto;
      top: 0;  
      left: ${({ type }) => type === 'sharing' ? '-1px' : '0'};
      right: 0; 
      bottom: 0;
      path {
        transition: stroke, .2s;
        stroke: ${({ $bgColor }) => $bgColor ? '#AE8960' : '#fff'};
      }
    }
  }
`;