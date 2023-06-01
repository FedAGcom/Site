import styled from "styled-components";

export const StyledHomePageCasesSection = styled.section`
	position: absolute;
	height: 798px;
	width: 100vw;
	top: 2420px;
	padding: 0 165px;
	
	@media only screen and (max-width: 600px) {
		height: 624px;
		padding: 0 16px;
		top: 2710px
	}
`;



export const StyledHomePageCasesHeadline = styled.h2`
  position: absolute;
  width: 136px;
  height: 68px;
  top: 0;

  font-weight: 600;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
	
	@media only screen and (max-width: 600px) {
    position: absolute;
    width: 109px;
    height: 55px;
		
    font-size: 40px;
    line-height: 55px;
	}
`;

export const StyledHomePageCasesArrow = styled.img`
  position: absolute;
  width: 110px;
  height: 23px;
  left: 1165px;
	top: 22px;
	
	@media only screen and (max-width: 600px) {
		left: 141px;
	}
`;