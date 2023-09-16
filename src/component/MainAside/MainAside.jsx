import React from 'react';
import styled from 'styled-components';

const MainAside = () => {
  return (
    <Contain>
      <History>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <strong></strong>
          <p></p>
        </div>
        <a href="">방문하기</a>
      </History>
      <div>
        <div>
          
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <button>
        <span>알림</span>
      </button>
    </Contain>
  );
};

export default MainAside;

const Contain = styled.div`
  width: 1200px;
  height: 80px;
  background-color: red;
  position: absolute; bottom: 80px;
  left: 0; right: 0; margin: auto;
`;

const History = styled.div`
  
`;