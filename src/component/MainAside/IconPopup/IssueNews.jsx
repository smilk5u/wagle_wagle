import React, { useState } from 'react';
import styled from 'styled-components';
const newsData = [
  {
    img: "#",
    title: "1 10월 한글날",
    description: "1 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
  },
  {
    img: "",
    title: "2 10월 한글날",
    description: "2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
  },
  {
    img: "",
    title: "3 10월 한글날",
    description: "3 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
  },
  {
    img: "", 
    title: "4 10월 한글날",
    description: "4 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
  },
  {
    img: "",
    title: "5 10월 한글날",
    description: "5 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
  },
]

const IssueNews = () => {
  const [news, setNews] = useState(newsData);

  return (
    <IssueWrap>
      <strong>소식통</strong>
      <ul>
        {
          news.map(news => (
            <NewsTxt>
              <div>
                <img src={news.img} alt={news.title} />
              </div>
              <dl>
                <dt>{news.title}</dt>
                <dd>{news.description}</dd>
              </dl>
            </NewsTxt>
          ))
        }
      </ul>
    </IssueWrap>
  );
};

export default IssueNews;

const IssueWrap = styled.div`
  width: 300px;
  height: 312px;
  position: absolute; 
  bottom: 85px;
  border: 1px solid #ECE0B9;
  padding: 27px 20px;  
  border-radius: 20px;
  overflow: hidden;
  left: -30px; 
  &:after {
    width: 100%; 
    height: 100%;
    position: absolute; 
    top: 0; left: 0;
    content: "";
    display: block;
    z-index: -1;
    background-color: rgba(255, 255, 255, .6);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
  ul {
    height: 300px;
    overflow-y: auto;
  }
  li {
    background-color: #fff;
    margin: 0 0 6px;
    border: 1px solid #EEEEEE;
    padding: 18px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  > strong {
    display: block;
    margin: 0 0 16px;
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 22px;
    font-weight: 600;
  }
`;

const NewsTxt = styled.li`
  display: flex;
  align-items: center;
  > div {
    min-width: 36px;
    height: 36px;
    background-color: #222;
    border-radius: 100%;
    margin: 0 10px 0 0;
    > img {
      height: 100%;
      object-fit: cover;
    }
  }
  dt {
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 16px;
    font-weight: 500;
  }
  dd {
    padding: 4px 0 0;
    color: #222;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    display: -webkit-box; 
    word-wrap: break-word; 
    -webkit-line-clamp:1; 
    -webkit-box-orient: vertical; 
    overflow: hidden; 
    text-overflow: ellipsis;
  }
`;