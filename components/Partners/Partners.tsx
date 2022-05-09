import React from "react";
import * as S from './styles'

export default function Partners(): JSX.Element {
  return (
    <S.Partners>
      <S.PartnersContent>
        <S.PartnersTitle>All the best brands already use us.</S.PartnersTitle>
        <S.PartnersLogos>
          <S.PartnersLogo src="/images/Logo1.png"/>
          <S.PartnersLogo src="/images/Logo2.png"/>
          <S.PartnersLogo src="/images/Logo3.png"/>
          <S.PartnersLogo src="/images/Logo4.png"/>
          <S.PartnersLogo src="/images/Logo5.png"/>
        </S.PartnersLogos>
      </S.PartnersContent>
    </S.Partners>
  )
}
