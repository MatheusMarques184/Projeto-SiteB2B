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
  height: 70%;
  justify-content: space-between;
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

export const FooterTopLeft = styled.div``

export const FooterLogo = styled.img`
  width: 19.7rem;
  height: 6rem;
`

export const FooterTopRight = styled.div`
  display: flex;
  flex-direction: row;
  width:50rem;
  justify-content: space-between;
`

export const FooterColumnLink = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLink = styled.a`
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--black-color);

  &:hover{
    color:var(--primary-color)
  }
`

export const FooterBack = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid 2px #DBDBDB;
  padding-top: 3rem;
`

export const FooterCopywrite = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
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
`

export const FooterTerms = styled(link)``

export const FooterPolicy = styled(link)``
