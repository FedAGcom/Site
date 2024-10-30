import styled from "styled-components";

export const StyledTechStackSection = styled.section`
  margin: 120px 0;
	padding: 0 165px 0 165px;
	width: 100vw;
	min-height: 438px;
	position: relative;
  display: flex;
  justify-content: center;
	
	@media only screen and (max-width: 600px) {
    display: block;
		margin: 80px 0;
		min-height: 483px;
    padding: 0 4.267vw;
	}
`;

export const StyledHeadlineOfTechStackSection = styled.h1`
  position: relative;
  min-height: 68px;
  font-weight: 600;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
	margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    min-height: 55px;
    font-size: 40px;
    line-height: 55px;
  }
  @media only screen and (max-width: 350px) {
	  font-size: 35px;
	  line-height: 50px;
  }
`;

export const StyledParagraphOfTechStackSection = styled.p`
  position: relative;
  width: 540px;
  min-height: 99px;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #333333;
	margin-bottom: 15px;
  @media only screen and (max-width: 600px) {
    position: relative;
    width: 95vw;
    min-height: 108px;
    font-size: 20px;
    line-height: 27px;
  }
`;
