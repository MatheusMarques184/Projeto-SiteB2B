import styled from "styled-components";
import media from "styled-media-query";

export const Footer = styled.section`
  width: 100vW;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
  height: 36.6rem;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 94.4rem;
  height: 100%;
  justify-content: space-between;
  padding: 1rem;
  width: 50%;
  ${media.lessThan("medium")`
    width: 70%;
  `}
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: center;
  `}
`

export const FooterTopLeft = styled.div`
  margin-right: 5rem;
`

export const FooterLogo = styled.img`
  width: 19.7rem;
  height: 6rem;
`

export const FooterTopRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: start;
    height: 20rem;
  `}
`

export const FooterColumnLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem 2rem 2rem;
  ${media.lessThan("medium")`
    margin: 0;
  `}
`

export const FooterLink = styled.a`
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--black-color);
  width: min-content;
  &:hover{
    color:var(--primary-color)
  }

  ${media.lessThan("medium")`
    font-size: 1.2rem;
  `}
`

export const FooterBack = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid 2px #DBDBDB;
  padding-top: 3rem;
  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: left;
  `}
`

export const FooterCopywrite = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  word-break: break-word;
  ${media.lessThan("medium")`
    font-size: 0.9rem;
  `}
`


const link = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: var(--black-color);
  &:hover{
    color:var(--primary-color)
  }
  ${media.lessThan("medium")`
    justify-content: start;
    padding-top: 2rem;
    font-size: 0.9rem;
  `}
`

export const FooterTerms = styled(link)``

export const FooterPolicy = styled(link)`
  ${media.lessThan("medium")`
    padding-bottom: 5rem;
  `}
`
