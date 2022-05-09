import React from "react";
import * as S from "./styles"

export default function Campaigns(): JSX.Element {
  return (
    <S.Campaigns>
          <S.CampaignsContent>
            <S.CampaignCard>
              <S.CampaignCardImage src="/images/newPhotopng.png" alt="Image for campaign one"/>
              <S.CampaignCardDescription>Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</S.CampaignCardDescription>
              <S.CampaignCardLink href="#"/>
            </S.CampaignCard>
            <S.CampaignCard>
              <S.CampaignCardImage src="/images/newPhoto2.png" alt="Image for campaign two"/>
              <S.CampaignCardDescription>Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.</S.CampaignCardDescription>
              <S.CampaignCardLink href="#"/>
            </S.CampaignCard>
            <S.CampaignsText>
              <S.CampaignsTitle>The source for proven, engaging email campaigns</S.CampaignsTitle>
              <S.Paragraph>Whether you’re a startup, small business, e-commerce store, or want to promote your app, Ninja Mail has the feature set tailored for your business. </S.Paragraph>
            </S.CampaignsText>
          </S.CampaignsContent>
        </S.Campaigns>
  )
}
