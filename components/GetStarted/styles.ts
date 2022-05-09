import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../public/styles/styles";

export const GetStarted = styled.section`
width: 100vW;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--primary-color);
height: 36.6rem;
`

export const GetStartedContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 94.4rem;
height: 70%;
`

export const GetStartedTitle = styled(S.genericTitle)`
text-align: center;
color: var(--white-color);
padding-bottom: 2rem;
`

export const GetStartedLink = styled(S.Link)`
  background-color: var(--white-color);
  color: var(--primary-color);
`
