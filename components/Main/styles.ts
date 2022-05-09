import styled from "styled-components";

export const Background = styled.main`
  background-image: url(${props => props.img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 9rem;
`

export default Background;
