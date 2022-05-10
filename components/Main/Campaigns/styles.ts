import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../public/styles/styles";

export const Campaigns = styled.section`
  display: flex;
  flex-direction: row;
  width: 109.8rem;
  height: 53.3rem;
  margin-bottom: 10rem;

  ${media.lessThan("large")`
    width: 90vw;
  `}

  ${media.lessThan("medium")`
    height: 95rem;
    flex-direction: column;
  `}
`
export const CampaignsText = styled.div`
  align-self: center;
  width: 39rem;
  height: 44.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.lessThan("large")`
    width: 25rem;
  `}
`

export const Paragraph = styled.p``

export const CampaignsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
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

  ${media.lessThan("large")`
    width: 19rem;
    height: 31rem;
  `}

  ${media.lessThan("medium")`
    &:nth-child(2){
      margin: 1.8rem 0;
    }
  `}
`
export const CampaignCardImage = styled.img`
  height: 27.2rem;

  ${media.lessThan("large")`
    height: 16rem;
  `}
`

export const CampaignCardDescription = styled(Paragraph)`
  font-size: 1.6rem;
  padding: 0rem 2.5rem;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    padding: 0rem 1rem;
  `}
`

export const CampaignCardLink = styled(S.Link)`
  background-color: transparent;
  height: 2.5rem;
  justify-content: left;
  padding: 0rem 2.5rem 2.5rem 2.5rem;

  &::after {
    content: "Learn More >";
    color: var(--primary-color);
  }

  ${media.lessThan("large")`
    padding: 0rem 1rem 1rem 1rem;
  `}
`

export const CampaignsTitle = styled(S.genericTitle)`
  font-weight: 900;
  font-size: 4.0rem;
  line-height: 4.8rem;
  padding-bottom: 2.4rem;

  ${media.lessThan("medium")`
    font-size: 2.8rem;
    line-height: 3.1rem;
  `}
`
