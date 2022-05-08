import React, { useState } from "react";
import Image from 'next/image';
import Logo from '../../public/images/NinjaMailLogo.png'
import * as S from "./styles";

export default function Header(): JSX.Element{
  const [state, setState] = useState(false)

  const checked = () => {
    const check = !state;
    setState(check);
  };

  return (
    <>
      <S.CloseMenu id="closeMenu" type="checkbox" aria-label="CloseMenu" role="button" checked={state}
      onChange={checked} />
      <S.CloseMenuLabel htmlFor="closeMenu" title="closeMenu" />
      <S.Menu/>
      <S.Menu2>
      <S.MenuContent>
        <S.LogoMenu href="#home"><Image src={Logo} alt="Logo NinjaMail"/></S.LogoMenu>
        <S.NavMenu>
          <S.UlMenu>
            <S.LinkLi><S.LinkA href="#">FEATURES</S.LinkA></S.LinkLi>
            <S.LinkLi><S.LinkA href="#">PRICING</S.LinkA></S.LinkLi>
            <S.LinkLi><S.LinkA href="#">SERVICES</S.LinkA></S.LinkLi>
            <S.LinkLi><S.LinkA href="#">PARTNERS</S.LinkA></S.LinkLi>
            <S.SignUpLi><S.SignUpA href="#">SIGN UP FREE</S.SignUpA></S.SignUpLi>
          </S.UlMenu>
          <S.UlMenuMobile onClick={checked}>
            <li><S.LinkA href="#">FEATURES</S.LinkA></li>
            <li><S.LinkA href="#">PRICING</S.LinkA></li>
            <li><S.LinkA href="#">SERVICES</S.LinkA></li>
            <li><S.LinkA href="#">PARTNERS</S.LinkA></li>
            <li><S.SignUpA href="#">SIGN UP FREE</S.SignUpA></li>
          </S.UlMenuMobile>
        </S.NavMenu>
      </S.MenuContent>
    </S.Menu2>
    </>
  )
}
