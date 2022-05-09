import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../public/styles/styles";

export const Partners = styled.section`
width: 90vW;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
height: 36.6rem;
`

export const PartnersContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 94.4rem;
height: 70%;
`

export const PartnersTitle = styled(S.genericTitle)`
font-size: 4.0rem;
text-align: center;
width: 50rem;
line-height: 4.8rem;
margin-bottom: 4rem;
`

export const PartnersLogos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const PartnersLogo = styled.img``
