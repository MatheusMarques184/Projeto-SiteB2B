import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../public/styles/styles";

export const Members = styled.section`
  width: 108.9rem;
  height: 53rem;

  ${media.lessThan("large")`
    width: 90vw;
  `}

  ${media.lessThan("medium")`
    height: 110rem;
  `}
`

export const MembersContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media.lessThan("medium")`
    justify-content: start;
  `}
`
export const MembersCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const Member = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.160784));
  width: 34.2rem;
  height: 23.9rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 2rem;

  ${media.lessThan("large")`
    width: 22.3rem;
    height: 15.7rem;
  `}

  ${media.lessThan("medium")`
    width: 25rem;
    margin-bottom: 2rem;
  `}
`

export const MemberName = styled.h3`
  font-weight: 900;
  font-size: 3.4rem;
  font-weight: 900;
  line-height: 4rem;
  color: var(--white-color);
  align-items: baseline;

  ${media.lessThan("medium")`
  font-size: 2.2rem;
  line-height: 2rem;
  `}
`

export const MemberSince = styled.p`
  color: var(--white-color);
  font-weight: 700;

  ${media.lessThan("medium")`
  font-size: 1.2rem;
  `}
`

export const MembersText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MembersTitle = styled(S.genericTitle)`
  font-size: 4.0rem;
  text-align: center;
  line-height: 4.8rem;
  padding-top: 4rem;

  ${media.lessThan("medium")`
    width: 30rem;
    font-size: 3.0rem;
  `}
`

export const MembersEmail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
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

  ${media.lessThan("medium")`
    width: 28rem;
    height: 5rem;
    margin-bottom: 1rem;
  `}
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

  ${media.lessThan("medium")`
    width: 12rem;
    height: 5rem;
    margin-left: 0;
    font-size: 1.2rem;
  `}
`

export const MsgSubmit = styled.p`
  color: var(--primary-color);
  ${media.lessThan("medium")`
    display: none;
  `}
`

export const MsgSubmitMobile = styled(MsgSubmit)`
  display:none;
  ${media.lessThan("medium")`
    margin-bottom: 1rem;
    display: block;
  `}
`
