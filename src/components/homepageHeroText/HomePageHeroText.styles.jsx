import styled from "styled-components";

export const StyledHeroTextOfMainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // position: relative;
  width: 635px;
  min-height: 100px;
	// left: 11.458vw;
  // top: 200px;

  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    // left: 4.267vw;
    // top: 211px;
  }
`;

export const StyledFrameOfMainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 635px;
	min-height: 100px;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    width: 91.467vw;
  }
`;

export const StyledHeadlineOfMainSection = styled.h1`
  width: 635px;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 82px;
  color: #FFFFFF;
	margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    font-size: 40px;
    line-height: 55px;
  }
	
  @media only screen and (max-width: 360px) {
    font-size: 35px;
	  line-height: 45px;
  }
`;

export const StyledParagraphOfMainSection = styled.p`
  width: 540px;
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
    font-size: 20px;
  }
`;