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
  ${media.lessThan("medium")`
    height: 60rem;
  `}
`

export const PartnersContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PartnersTitle = styled(S.genericTitle)`
  font-size: 4.0rem;
  text-align: center;
  width: 50rem;
  line-height: 4.8rem;
  margin-bottom: 4rem;
  ${media.lessThan("medium")`
    width: 30rem;
    font-size: 3.0rem;
  `}
`

export const PartnersLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`

export const PartnersLogo = styled.img`
 margin: 2rem;
`
