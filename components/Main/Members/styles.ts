import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../public/styles/styles";

export const Members = styled.section`
  width: 108.9rem;
  //width: 90%;
  height: 53rem;
`

export const MembersContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const MembersCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Member = styled.div`
  background-image: url(${props => props.img});
  filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.160784));
  width: 34.2rem;
  height: 23.9rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 2rem;
`

export const MemberName = styled.h3`
  font-weight: 900;
  font-size: 3.4rem;
  line-height: 4rem;
  color: var(--white-color);
  align-items: baseline;
`

export const MemberSince = styled.p`
  color: var(--white-color);
`

export const MembersText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MembersTitle = styled(S.genericTitle)`
  width: 90rem;
  font-size: 4.0rem;
  text-align: center;
  line-height: 4.8rem;
  padding-top: 4rem;
`

export const MembersEmail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`

export const MembersEmailInput = styled.input`
  width: 42rem;
  height: 6.5rem;
  border: 1px solid #9F9F9F;
  border-radius: 5px;
  padding: 1rem;
  font-size: 2.1rem;
  letter-spacing: 0.105rem;
  color: var(--black-color);
  line-height: 25px;
  margin-right: 1rem;
`

export const MembersEmailSubmit = styled.input`
  width: 22.1rem;
  height: 6.5rem;
  background-color: var(--primary-color);
  font-weight: 900;
  font-size: 2.1rem;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: 0.105rem;
  color: var(--white-color);
  margin-left: 1rem;
`

export const MsgSubmit = styled.p`
  color: var(--primary-color);
`
