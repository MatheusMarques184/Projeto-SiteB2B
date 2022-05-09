import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../public/styles/styles";

export const CloseMenuLabel = styled.label`
  &:after {
    display: none;
    content: "☰";
    position: fixed;
    z-index: 2;
    top: 2rem;
    right: 2rem;
    color: var(--black-color);
    font-size: 5rem;
    line-height: 3rem;
    width: 5rem;
    height: 5rem;
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
  }

  ${media.lessThan("large")`
    &:after{
        display: block;
    }
  `}
`;

export const Menu = styled.aside`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10.2rem;
  z-index: 1;
  background-color: var(--white-color);
  ${media.lessThan("large")`
    display: none;
    border: none;
  `}
`;

export const Menu2= styled.aside`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  height: 10.2rem;
  background-color: var(--white-color);

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const CloseMenu = styled.input`
  display: none;

  ${media.lessThan("large")`
    &:checked ~ ${Menu} ~ ${Menu2} {
        display: block;
        bottom: 0;
        text-align: center;
    }
    &:checked ~ ${CloseMenuLabel}::after {
      content: "×";
      color: var(--black-color);
    }`}
`;

export const MenuContent = styled(S.MainContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-top: 2.1rem;
  ${media.lessThan("large")`
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const TitleMenu = styled.h1`
  font-weight: 900;
  font-size: 35px;
  line-height: 41px;
`;

export const LogoMenu = styled.a``;

export const UlMenuMobile = styled.ul`
  list-style: none;
  display: none;
  ${media.lessThan("large")`
    display: flex ;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const UlMenu = styled.ul`
  list-style: none;
  display: flex;
  ${media.lessThan("large")`
    display: none ;
  `}
`;
export const SignUpLi = styled.li`
  background-color:var(--primary-color);
  height: 4.1rem;
  margin-left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  &:hover {
    transition: 300ms ease-in-out;
    background-color: #337356;
  }
`

export const LinkLi = styled.li`
  height: 4.1rem;
  margin-left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  border-bottom: 5px solid var(--primary-color);
`

export const SignUpA = styled.a`
  font-weight: 800;
  font-size: 17px;
  line-height: 20px;
  color: var(--white-color);
  text-align: center;

`;

export const LinkA = styled.a`
  text-decoration: none ;
  font-weight: 800;
  font-size: 17px;
  line-height: 20px;
  color: var(--black-color);

  ${media.lessThan("large")`
    border: none;
  `}

  &:hover {
    transition: 300ms ease-in-out;
    color:var(--primary-color)
  }
`;

export const MenuSpacing = styled.div`
  height: 10.2rem;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const NavMenu = styled.nav`
  height: 8.4rem;
  padding-top: 1rem;
  display: flex ;
  justify-content: center;
  align-items: initial;
`;
