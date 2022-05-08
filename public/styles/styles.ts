import styled from "styled-components";

export const MainContent = styled.div`
  width: 90vW;
  margin: 0 auto;
`;

export const MainBg = styled.section`
  background: ${(props) => props.theme.gradiantBackground};
  color: var(--white-color);
  min-height: 100vh;
`;

export const WhiteBg = styled.section`
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.colorText};
  min-height: 100vh;
`;

export const genericTitleH2 = styled.h2`
  font-family: 'Playfair Display';
  line-height: 2.6rem;
  font-weight: 500;
  font-size: 6rem;
`
export const genericTitleH3 = styled.h3`
  font-family: 'Playfair Display';
  line-height: 2.6rem;
  font-weight: 500;
  font-size: 4.4rem;
`
