import React from "react";
import * as S from './styles'


export default function Footer():JSX.Element {

  return(
    <S.Footer>
      <S.FooterContent>
        <S.FooterTop>
          <S.FooterTopLeft>
            <S.FooterLogo src="/images/NinjaMailLogo.png"/>
          </S.FooterTopLeft>
          <S.FooterTopRight>
            <S.FooterColumnLink>
              <S.FooterLink href="#">Features</S.FooterLink>
              <S.FooterLink href="#">Pricing</S.FooterLink>
              <S.FooterLink href="#">Services</S.FooterLink>
              <S.FooterLink href="#">Partners</S.FooterLink>
            </S.FooterColumnLink>
            <S.FooterColumnLink>
              <S.FooterLink href="#">About Us</S.FooterLink>
              <S.FooterLink href="#">Tutorials</S.FooterLink>
              <S.FooterLink href="#">Resources</S.FooterLink>
              <S.FooterLink href="#">Help Center</S.FooterLink>
              <S.FooterLink href="#">Templates</S.FooterLink>
              <S.FooterLink href="#">Case studies</S.FooterLink>
            </S.FooterColumnLink>
            <S.FooterColumnLink>
              <S.FooterLink href="#">Medium</S.FooterLink>
              <S.FooterLink href="#">Twitter</S.FooterLink>
              <S.FooterLink href="#">Facebook</S.FooterLink>
              <S.FooterLink href="#">Instagram</S.FooterLink>
              <S.FooterLink href="#">Linkedin</S.FooterLink>
            </S.FooterColumnLink>
            <S.FooterColumnLink>
              <S.FooterLink href="#">Contact Us</S.FooterLink>
              <S.FooterLink href="#">Slack</S.FooterLink>
              <S.FooterLink href="#">Jobs</S.FooterLink>
            </S.FooterColumnLink>
          </S.FooterTopRight>
        </S.FooterTop>
        <S.FooterBack>
          <S.FooterCopywrite>NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.</S.FooterCopywrite>
          <S.FooterTerms href="#">Terms & Conditions</S.FooterTerms>
          <S.FooterPolicy href="#">Privacy Policy</S.FooterPolicy>
        </S.FooterBack>
      </S.FooterContent>
    </S.Footer>
  )
}
