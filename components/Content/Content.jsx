import React from "react";
import HeaderSpacing from "../header/HeaderSpacing";
import * as S from './styles'


export default function Content() {
  return (
    <>
      <HeaderSpacing />
      <S.Background id="home" img="/images/BG.png">
        <S.Home img="/images/photohero.png">
            <S.HomeContent>
              <S.HomeText>
                <S.HomeTitle>Create Stunning Email Campaigns</S.HomeTitle>
                <S.Paragraph>Create and lauch email campaigns that captivate your customers in just a few clicks</S.Paragraph>
              </S.HomeText>
              <S.HomeLinks>
                <S.LinkTry href="#">TRY NOW</S.LinkTry>
                <S.LinkDemo href="#">GET A DEMO</S.LinkDemo>
              </S.HomeLinks>
            </S.HomeContent>
        </S.Home>
        <S.MoreCustomers img="/images/morecustomers.png">
          <S.MoreCustomersContent>
            <S.MoreCustomersTitle>Reach More Customers</S.MoreCustomersTitle>
            <S.MoreCustomersLink href="#">LEARN NOW</S.MoreCustomersLink>
          </S.MoreCustomersContent>
        </S.MoreCustomers>
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
      </S.Background>

    </>
  )
}
