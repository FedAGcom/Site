import styled from "styled-components";
import portfolioBg from '../../assets/homepage/homePagePortfolioBg.png'

export const StyledMainSectionPortfolio = styled.div`
  position: relative;
  overflow: hidden;
  padding: 36px 25px 0 25px;
  width: 602px;
  height: 366px;
  background: url(${portfolioBg});
  border-radius: 32px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    background: #B81034;
  }
`

export const StyledMainSectionPortfolioHeadline = styled.p`
  font-size: 70px;
  font-weight: 900;
  line-height: 55px;
  color: #FFFFFF;

  @media only screen and (max-width: 700px) {
    font-size: 40px;
    line-height: 40px;
  }
`

export const StyledMainSectionPortfolioSubHeadline = styled.p`
  font-size: 70px;
  font-weight: 900;
  line-height: 55px;
  color: #B81034;
  text-shadow:
    -1px -1px 0 #FFFF,  
    1px -1px 0 #FFFF,
    -1px 1px 0 #FFFF,
    1px 1px 0 #FFFF;
  margin-left: 91px;

  @media only screen and (max-width: 700px) {
    font-size: 40px;
    line-height: 40px;
  }
`
export const StyledMainSectionPortfolioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledPortfolioArrowWrapper = styled.div`
  width: 88px;
  height: 88px;
`

export const StyledPortfolioImgWrapper = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0
`

export const StyledPortfolioBtnWrapperDesktop = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;

  @media only screen and (max-width: 600px) {
    display: none
  }
`;

export const StyledPortfolioBtnWrapperMobile = styled.div`
  position: relative;
  display: none;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    display: block
  }
`;

export const StyledPortfolioEmptyEl = styled.div`
  position: absolute;
  width: 320px;
  height: 104px;
  background: #FFFF;
  bottom: 0;
  right: 0;
  z-index: 5;
  border-radius: 64px 0 0 0;

  @media only screen and (max-width: 600px) {
    display: none
  }
`


