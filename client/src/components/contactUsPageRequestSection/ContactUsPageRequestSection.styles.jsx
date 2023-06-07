import styled from "styled-components";

export const StyledContactUsPageRequestSection = styled.section`
	position: relative;
	margin: 80px 0;
	padding: 0 11.458vw;
	display: flex;
	align-items: center;
	flex-direction: row;
	
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		padding: 0 4.267vw;
   	height: 1065px;
	}
`;
export const StyledContactUsPageRequestSectionImage = styled.img`
	position: relative;
  min-width: 445px;
  height: 511px;
  border-radius: 20px;
	z-index: 1;
	
  @media only screen and (max-width: 600px) {
    min-width: 285px;
    height: 293px;
  }
`;
export const StyledContactUsPageRequestSectionForm = styled.form`
  position: relative;
  min-width: 817px;
  height: 674px;
  background: #F2F2F2;
  border-radius: 20px;
	left: -152px;
  padding: 50px 6.597vw 50px 12.639vw;
	
  @media only screen and (max-width: 600px) {
		left: 0;
	  top: -130px;
	  min-width: 100vw;
    min-height: 902px;
    padding: 50px 4.267vw 50px 6.933vw;
  }
`;
export const StyledContactUsPageRequestSectionHeadline = styled.p`
	position: relative;
  width: 333px;
  min-height: 136px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
  @media only screen and (max-width: 600px) {
    top: 100px;
    width: 88.8vw;
    min-height: 110px;
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
  }
`;
export const StyledContactUsPageRequestSectionParagraph = styled.p`
  position: relative;
  width: 318px;
  min-height: 54px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #333333;
  @media only screen and (max-width: 600px) {
    top: 110px;
    width: 84.8vw;
    height: 50px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const StyledContactUsPageRequestSectionListOfInputs = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  padding: 0;
	gap:15px;
	top: 30px;
  @media only screen and (max-width: 600px) {
  	top: 110px
  }
`;

export const StyledContactUsPageRequestSectionElementOfInputList = styled.li`
  &:nth-child(1), &:nth-child(3) {
	  margin-right: 15px;
    @media only screen and (max-width: 600px) {
	    margin-right: 0;
    }
  }
`;

export const StyledContactUsPageRequestSectionLabel = styled.label`
  display: flex;
  color: black;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 2px;
`;

export const StyledContactUsPageRequestSectionInput = styled.input`
  height: 40px;
  padding: 10px 10px;
  width: ${({ naming }) => naming === "true" ? "255px" : "350px"};
	border: none;
	outline: none;
  @media only screen and (max-width: 600px) {
    width: 91.333vw;
  }
`;

export const StyledContactUsPageRequestSectionTextArea = styled.textarea`
  width: 540px;
	height: 80px;
	padding: 10px 10px;
  background: #FFFFFF;
  border-radius: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
	outline: none;
	border: none;
	
	@media only screen and (max-width: 600px) {
    width: 91.333vw;
	}
`;