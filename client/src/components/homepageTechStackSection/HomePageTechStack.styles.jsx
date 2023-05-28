import styled from "styled-components";

export const StyledTechStackSection = styled.section`
  margin: 120px 0 120px 0;
	padding: 0 165px 0 165px;
	width: 100vw;
	height: 473px;
	position: absolute;
	top: 879px;
	
	@media only screen and (max-width: 800px) {
		margin-top: 80px;
		height: 433px;
    padding: 0 16px 0 16px;
		top: 827px;
		margin-bottom: 80px;
	}
`;

export const StyledHeadlineOfTechStackSection = styled.h1`
  width: 394px;
  height: 68px;

  font-weight: 600;
  font-size: 50px;
  line-height: 68px;

  color: #333333;
	margin-bottom: 10px;

  @media only screen and (max-width: 800px) {
    width: 92%;
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

  @media only screen and (max-width: 800px) {
    position: absolute;
    width: 343px;
    height: 108px;
    left: 16px;
    top: 77px;
    font-size: 20px;
    line-height: 27px;
  }
`;
