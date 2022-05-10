import styled from "styled-components";
import media from "styled-media-query";

export const MainContent = styled.div`
  width: 90vW;
  margin: 0 auto;
`;


export const genericTitle = styled.h2`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 900;
  font-size: 5.0rem;
  line-height: 8.0rem;
  color: var(--black-color);

  ${media.lessThan("large")`
    font-size: 3.5rem;
    line-height: 4.6rem;
  `}
`
export const Link = styled.a`
  width: 20rem;
  height: 6rem;
  font-weight: 900;
  font-size: 2.1rem;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: 0.105rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("large")`
    width: 13rem;
    height: 4.2rem;
    font-size: 1.3rem;
  `}
`
