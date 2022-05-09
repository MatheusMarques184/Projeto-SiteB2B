import React from "react";
import * as S from "./styles"

export default function Home(): JSX.Element {
  return  (
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
  )
}
