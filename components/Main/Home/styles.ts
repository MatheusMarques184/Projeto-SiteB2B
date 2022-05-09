import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../public/styles/styles";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 108.6rem;
  height: 38.3rem;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: right top;
  margin-bottom: 20rem;
`

export const HomeContent = styled.div`
  width: 48.9rem;
  height: 31.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HomeTitle = styled(S.genericTitle)`
  width: 49rem;
`

export const Paragraph = styled.p``

export const HomeLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomeText = styled.div``

export const LinkTry = styled(S.Link)`
 color: var(--white-color);
 background-color: var(--primary-color);
`

export const LinkDemo = styled(S.Link)`
 color: var(--primary-color);
 background-color: var(--white-color);
 border: 3px solid var(--primary-color);
`

export const HomeImage = styled.img`
  width: 68rem;
  height: 38.3rem;
  z-index: 1;
`;
