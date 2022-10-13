import styled from "styled-components";
import img from "../../assets/images/cardBackground.jpg"

export const BoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
`
export const HeaderStyled = styled.header`
    margin-top: 5rem;
    font-weight: 800;
    font-size: 1rem;
    transition: all 0.5s ease;
  @media ${(props) => props.theme.device.mobileM} {
    font-weight: 800;
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.device.mobileL} {
    font-weight: 800;
    font-size: 1.8rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-weight: 900;
    font-size: 2.5rem;
  }
  @media ${(props) => props.theme.device.laptop} {
    font-weight: 900;
    font-size: 3rem;
  }
`
export const WrapperMemo = styled.main`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  padding: 3rem;
  border-radius: 5px;
  background-image: url(${img});
  background-size: cover;
  box-shadow: 5px 5px 20px;
`
export const FooterStyled = styled.footer`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`