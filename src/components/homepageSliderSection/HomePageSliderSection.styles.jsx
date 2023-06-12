import styled from "styled-components";

export const StyledHomePageSliderSection = styled.section`
	margin: 120px 0;
	position: relative;
	padding: 0 11.458vw;
	min-height: 518px; 
	width: 100vw;
	@media only screen and (max-width: 600px) {
    min-height: 512px;
		margin: 80px 0;
		padding: 0 1.267vw;
	}
`;

export const StyledHomePageSliderSectionHeadline = styled.p`
  position: relative;
	text-align: center;
  min-width: 848px;
  min-height: 68px;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
	
	@media only screen and (max-width: 600px) {
    min-width: 91.467vw;
    min-height: 110px;
    font-weight: 600;
    font-size: 30px;
    line-height: 50px;
    color: #000000;
	}
  @media only screen and (max-width: 350px) {
	  font-size: 27px;
	  line-height: 45px;
  }
`;
