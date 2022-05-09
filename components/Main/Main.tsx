import React from "react";
import HeaderSpacing from "../header/HeaderSpacing";
import Campaigns from "./Campaigns/Campaigns";
import Home from "./Home/Home";
import Members from "./Members/Members";
import MoreCustomers from "./MoreCustomers/MoreCustomers";
import * as S from './styles'


export default function Main():JSX.Element {
  return (
    <>
      <HeaderSpacing />
      <S.Background id="home" img="/images/BG.png">
        <Home/>
        <MoreCustomers/>
        <Campaigns/>
        <Members/>
      </S.Background>
    </>
  )
}
