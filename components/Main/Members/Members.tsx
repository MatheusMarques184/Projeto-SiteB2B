import React, { useState } from "react";
import * as S from "./styles"

export default function Members(): JSX.Element {
  const [msgSubmit, setMsgSubimit] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e: HTMLFormElement):void {
    e.preventDefault();
    setMsgSubimit("Thanks! Email received.");
    setEmail("");
    setInterval(() => {
      setMsgSubimit("");
    }, 3000);
  }

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
              <S.MembersEmail action="#" method="post" onSubmit={(e) => handleSubmit(e)}>
                <S.MembersEmailInput type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <S.MsgSubmitMobile>{msgSubmit}</S.MsgSubmitMobile>
                <S.MembersEmailSubmit type="submit" value="JOIN OUR LIST"/>
              </S.MembersEmail>
              <S.MsgSubmit>{msgSubmit}</S.MsgSubmit>
            </S.MembersText>
          </S.MembersContent>
        </S.Members>
  )
}
