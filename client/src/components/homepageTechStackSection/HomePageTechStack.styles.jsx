import styled from "styled-components";

export const StyledTechStackSection = styled.section`
  margin: 120px 0 120px 0;
	padding: 0 165px 0 165px;
	width: 100vw;
	height: 473px;
	position: absolute;
	top: 879px;
	
	@media only screen and (max-width: 600px) {
		margin-top: 80px;
		height: 483px;
    padding: 0 4.267vw;
		top: 827px;
		margin-bottom: 80px;
	}
  @media only screen and (max-width: 320px) {
	  padding: 0 1.267vw;
  }
`;

export const StyledHeadlineOfTechStackSection = styled.h1`
  width: 394px;
  height: 68px;
	white-space: nowrap;

  font-weight: 600;
  font-size: 50px;
  line-height: 68px;

  color: #333333;
	margin-bottom: 10px;

  @media only screen and (max-width: 600px) {
    width: 85vw;
    height: 55px;
    font-size: 40px;
    line-height: 55px;
  }
`;

export const StyledParagraphOfTechStackSection = styled.p`
  position: absolute;
  width: 540px;
  height: 99px;
  top: 78px;

  font-weight: 400;
  font-size: 24px;
  line-height: 33px;

  color: #333333;
	margin-bottom: 15px;

  @media only screen and (max-width: 600px) {
    position: absolute;
    width: 95vw;
    height: 108px;
    left: 4.267vw;
    top: 77px;
    font-size: 20px;
    line-height: 27px;
  }
  @media only screen and (max-width: 349px) {
	  width: 95vw;
	  top: 50px;
  }
`;
