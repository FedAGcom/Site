import styled from "styled-components";

export const StyledHeroTextOfMainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;

  position: absolute;
  width: 635px;
  height: 358px;
  left: 165px;
  top: 234px;

  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    height: 239px;
    left: 4.267vw;
    top: 225px;
  }
`;

export const StyledTextOfMainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;

  width: 635px;
  height: 266px;

  flex: none;
  order: 0;
  flex-grow: 0;

  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    height: 239px;
  }
`;

export const StyledFrameOfMainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 635px;
  height: 266px;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    height: 239px;
  }
`;

export const StyledHeadlineOfMainSection = styled.h1`
  width: 635px;
  height: 164px;

  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 82px;

  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    height: 165px;
    font-size: 40px;
    line-height: 55px;
  }
`;

export const StyledParagraphOfMainSection = styled.p`
  width: 540px;
  height: 82px;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.35em;

  color: #FFFFFF;

  flex: none;
  order: 1;
  flex-grow: 0;

  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    height: 54px;
    font-size: 20px;
  }
`;