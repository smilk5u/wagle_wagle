import { styled } from "styled-components";

export default function Title({ title }) {
  return <TitleComponent>{title}</TitleComponent>;
}

const TitleComponent = styled.h1`
  // width: 180px;
  height: 50px;
  text-align: center;
  font-size: 46px;
  line-height: normal;
  font-family: var(--font-hunmin);
`;
