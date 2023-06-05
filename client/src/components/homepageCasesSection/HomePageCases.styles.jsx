import styled from "styled-components";

export const StyledHomePageCasesSection = styled.section`
	position: relative;
	min-height: 798px;
	width: 100vw;
	margin: 120px 0;
	padding: 0 11.458vw;
	
	@media only screen and (max-width: 600px) {
		min-height: 624px;
		padding: 0 4.267vw;
		margin: 80px 0;
	}
`;



export const StyledHomePageCasesHeadline = styled.h2`
  position: relative;
  width: 136px;
  min-height: 68px;
  font-weight: 600;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
	@media only screen and (max-width: 600px) {
    width: 109px;
    min-height: 55px;
    font-size: 40px;
    line-height: 55px;
	}
`;

export const StyledHomePageCasesArrow = styled.img`
  position: relative;
  width: 110px;
  height: 23px;
  left: 1000px;
	top: -22.5px;
	
	@media only screen and (max-width: 600px) {
		left: 141px;
		top: -35px;
	}
`;