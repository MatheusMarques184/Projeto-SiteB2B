import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../public/styles/styles";

export const MoreCustomers = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 94.4rem;
  height: 53.1rem;
  background-image: url(${props => props.img});
  margin-bottom: 10rem;
`
export const MoreCustomersContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20rem;
`
export const MoreCustomersTitle = styled(S.genericTitle)`
  color: var(--white-color);
`

export const MoreCustomersLink = styled(S.Link)`
 color: var(--primary-color);
 background-color: var(--white-color);
`
