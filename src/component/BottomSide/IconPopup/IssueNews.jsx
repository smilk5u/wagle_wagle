import React, { useState } from "react";
import styled from "styled-components";
import giwaNews from "../../../assets/bottomSide/giwa_news.png";

const newsData = [
  {
    id: 1,
    img: "../../../assets/main/giwa_news.png",
    title: "1 10월 한글날",
    description: "1 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
  },
  {
    id: 2,
    img: "",
    title: "기와가 도착했오",
    description: "심청님이 ‘사랑’기와를 남기고 가셨소 ",
  },
  {
    id: 3,
    img: "",
    title: "기와가 도착했오",
    description: "심청님123456이 ‘사랑’기와를 남기고 가...",
  },
  {
    id: 4,
    img: "",
    title: "4 10월 한글날",
    description: "4 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
  },
  {
    id: 5,
    img: "",
    title: "5 10월 한글날",
    description: "5 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
  },
]

const IssueNews = ({ backgroundState }) => {
  const [news, setNews] = useState(newsData);

  return (
    <IssueWrap $bgState={backgroundState}>
      <strong>소식통</strong>
      <ul>
        {
          news.map(news => (
            <NewsTxt key={news.id}>
              <div>
                <img src={giwaNews} alt={news.title} />
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
  width: 350px;
  position: absolute; 
  bottom: 85px;
  border: ${({ $bgState }) => $bgState === 'day' ? '1px solid #ECE0B9' : '1px solid #171A32'};
  padding: 27px 15px 27px 20px;  
  border-radius: 20px;
  overflow: hidden; 
  left: -30px; 
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, .6);
  box-shadow: ${({ $bgState }) => $bgState === 'day' ? '5px 5px 15px #ECE0B9' : '5px 5px 15px rgba(23, 26, 50, 0.377)'};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  ul {
    height: 270px;
    overflow-y: auto;
    padding: 0 5px 0 0;
    &::-webkit-scrollbar {
      width: 6px; 
      background-color: #faf8f8d3;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%; 
      border-radius: 10px;
      background-color: #cecece56;
    }
  }
  li {
    background-color: #fff;
    margin: 0 0 6px;
    border: 1px solid #EEEEEE;
    padding: 18px;
    box-sizing: border-box;
    border-radius: 10px;
    &:last-of-type { margin: 0; }
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
    width: 36px;
    height: 36px;
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