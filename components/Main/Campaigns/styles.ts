import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../public/styles/styles";

export const Campaigns = styled.section`
  display: flex;
  flex-direction: row;
  width: 109.8rem;
  height: 53.3rem;
  margin-bottom: 10rem;
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

export const Paragraph = styled.p``

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

export const CampaignCardLink = styled(S.Link)`
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
