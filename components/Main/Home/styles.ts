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
  margin-bottom: 10rem;

  ${media.lessThan("large")`
    width: 90vw;
  `}

  ${media.lessThan("medium")`
    min-width: 31rem;
    background-position: center;
    background-size: cover;
  `}
`

export const HomeContent = styled.div`
  width: 48.9rem;
  width: 49rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.lessThan("large")`
    width: 40rem;
  `}

  ${media.lessThan("medium")`
    width: 30rem;
  `}
`

export const HomeTitle = styled(S.genericTitle)``

export const Paragraph = styled.p`
  margin-bottom: 3.5rem;
`

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
