import styled from "styled-components";

export const StyledContactUsPageMainSection = styled.section`
	padding: 0 11.458vw;
	position: relative;
	@media only screen and (max-width: 600px) {
		padding: 0 4.267vw;
	}
`;

export const StyledContactUsPageMainSectionHeadline = styled.h2`
  position: relative;
  margin: 80px 0 30px 0;
  min-height: 68px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 49px;
  line-height: 68px;
  color: #333333;

  @media only screen and (max-width: 600px) {
    min-height: 165px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 40px;
    line-height: 55px;
  }
`;

export const StyledContactUsPageMainSectionLinkTitle = styled.p`
	position: relative;
	min-height: 33px;
	font-family: 'Nunito Sans', sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	color: #333333;
`;

export const StyledContactUsPageMainSectionLink = styled.a`
  min-height: 33px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #333333;
	
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;

export const StyledContactUsPageMainSectionLinks = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	gap: 300px;
	div {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 5px;
	}
  @media only screen and (max-width: 600px) {
    flex-direction: column;
	  gap: 20px;
  }
`;

export const StyledContactUsPageMainSectionListOfBlocks = styled.div`
	position: relative;
	max-width: 1110px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 30px;
	
	@media only screen and (max-width: 600px) {
		flex-wrap: nowrap;
		flex-direction: column;
	}
`;

export const StyledContactUsPageMainSectionBlock = styled.div`
	position: relative;
	padding: 54px 50px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #AEAEAE;
  border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 135px;
	flex-direction: row;
  height: 174px;
  width: 540px;
  @media only screen and (max-width: 600px) {
	  padding: 50px;
	  flex-direction: column;
	  align-items: flex-start;
	  gap: 48px;
    height: 289px;
    width: 91.467vw;
  }
  @media only screen and (max-width: 374px) {
	  padding: 13.333vw;
  }
`;

export const StyledContactUsPageMainSectionParagraph = styled.p`
  position: relative;
  min-width: 239px;
  min-height: 76px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: #333333;
	@media only screen and (max-width: 600px) {
		font-size: 25px;
		line-height: 33px;
	}
`;