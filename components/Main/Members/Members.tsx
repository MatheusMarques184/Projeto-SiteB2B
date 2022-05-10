import React, { useState } from "react";
import * as S from "./styles"

export default function Members(): JSX.Element {
  const [msgSubmit, setMsgSubimit] = useState("")

  return(
    <S.Members>
          <S.MembersContent>
            <S.MembersCards>
              <S.Member img="/images/photo3.png">
                <S.MemberName>Frankie</S.MemberName>
                <S.MemberSince>Member since 2016</S.MemberSince>
              </S.Member>
              <S.Member img="/images/photo4.png">
                <S.MemberName>Camile</S.MemberName>
                <S.MemberSince>Member since 2012</S.MemberSince>
              </S.Member>
              <S.Member img="/images/photo5.png">
                <S.MemberName>Elayne</S.MemberName>
                <S.MemberSince>Member since 2018</S.MemberSince>
              </S.Member>
            </S.MembersCards>
            <S.MembersText>
              <S.MembersTitle>Learn how others are reaching their audience easier than ever before.</S.MembersTitle>
              <S.MembersEmail>
                <S.MembersEmailInput type="email" placeholder="Enter your email"/>
                <S.MsgSubmitMobile>{msgSubmit}</S.MsgSubmitMobile>
                <S.MembersEmailSubmit type="submit" value="JOIN OUR LIST" onClick={() => setMsgSubimit("Thanks! Email received.")}/>
              </S.MembersEmail>
              <S.MsgSubmit>{msgSubmit}</S.MsgSubmit>
            </S.MembersText>
          </S.MembersContent>
        </S.Members>
  )
}
