import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../public/styles/styles";

export const Background = styled.main`
  background-image: url(${props => props.img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 9rem;
`
export const Paragraph = styled.p``

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 108.6rem;
  height: 38.3rem;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: right top;
`

export const HomeContent = styled.div`
  width: 48.9rem;
  height: 31.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HomeTitle = styled(S.genericTitle)`
  font-weight: 900;
  font-size: 4.9rem;
  line-height: 7.1rem;
`

const Link = styled.a`
  width: 20rem;
  height: 6rem;
  font-weight: 900;
  font-size: 2.1rem;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: 0.105rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomeText = styled.div``

export const LinkTry = styled(Link)`
 color: var(--white-color);
 background-color: var(--primary-color);
`

export const LinkDemo = styled(Link)`
 color: var(--primary-color);
 background-color: var(--white-color);
 border: 3px solid var(--primary-color);
`

export const HomeImage = styled.img`
  width: 68rem;
  height: 38.3rem;
  z-index: 1;
`;

export const MoreCustomers = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 94.4rem;
  height: 53.1rem;
  background-image: url(${props => props.img});
`
export const MoreCustomersContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20rem;
`
export const MoreCustomersTitle = styled(S.genericTitle)`
  font-weight: 900;
  font-size: 5.0rem;
  line-height: 8.0rem;
  color: var(--white-color);
  width: 65.5rem;
`

export const MoreCustomersLink = styled(Link)`
 color: var(--primary-color);
 background-color: var(--white-color);
`

export const Campaigns = styled.section`
  display: flex;
  flex-direction: row;
  width: 109.8rem;
  height: 53.3rem;
`
export const CampaignsText = styled.div`
  align-self: center;
  width: 39rem;
  height: 44.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CampaignsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const CampaignCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
  height: 44.9rem;
  justify-content: space-between;
  background-color: var(--white-color);
  &:nth-child(2){
    align-self: flex-end;
  }
`
export const CampaignCardImage = styled.img`
  height: 27.2rem;
`

export const CampaignCardDescription = styled(Paragraph)`
  font-size: 1.6rem;
  padding: 0rem 2.5rem;
`

export const CampaignCardLink = styled(Link)`
  background-color: transparent;
  height: 2.5rem;
  justify-content: left;
  padding: 0rem 2.5rem 2.5rem 2.5rem;
  &::after {
    content: "Learn More >";
    color: var(--primary-color);
  }
`

export const CampaignsTitle = styled(S.genericTitle)`
  font-weight: 900;
  font-size: 4.0rem;
  line-height: 4.8rem;
  padding-bottom: 2.4rem;
`
