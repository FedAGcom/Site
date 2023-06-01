import styled from "styled-components";

export const StyledHomePageSliderSection = styled.section`
	margin-top: 120px;
	position: absolute;
	top: 4787px;
	padding: 0 165px;
	height: 518px; 
	width: 100vw;
	
	@media only screen and (max-width: 600px) {
		width: 100vw;
		height: 552px;
		margin-top: 80px;
		top: 6158px;
		padding: 0 4px;
	}
`;

export const StyledHomePageSliderSectionHeadline = styled.p`
  position: absolute;
  width: 848px;
  height: 68px;
  left: 296px;
	top: 1px;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
	
	@media only screen and (max-width: 600px) {
    width: 91.467vw;
    height: 110px;
    left: 4.267vw;
		
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    color: #000000;
	}
`;
