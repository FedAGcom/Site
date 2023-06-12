import styled from "styled-components";

import placeholder from '../../assets/career/placeHolder.png';
import mobilePlaceholder from '../../assets/career/mobilePlaceholder.png';

export const StyledCareerPageMainPartSection = styled.section`
	position: relative;
	margin: 120px 0;
	padding: 0 11.458vw;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	
	.career-first-block {
		display: flex;
		align-items: center;
		justify-content: space-between;
    .career-main-part-text {
      margin-right: 2.083vw;
    }
	}
	@media only screen and (max-width: 600px) {
    margin: 35px 0 74px 0;
    padding: 0;
		overflow-x: hidden;
    .career-first-block {
    	align-items: flex-end;
      min-height: 266px;
      .career-main-part-text {
        padding: 0 4.267vw;
        margin-right: 0;
	      z-index: 1;
      }
    }
	}
`;

export const StyledCareerPageMainPartHeadline = styled.h2`
  position: relative;
  width: 445px;
  min-height: 68px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: #333333;

  @media only screen and (max-width: 600px) {
    width: 81.6vw;
    height: 55px;
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
  }

  @media only screen and (max-width: 374px) {
	  font-size: 34px;
  }
`;
export const StyledCareerPageMainPartParagraph = styled.p`
  position: relative;
  width: 540px;
  min-height: 81px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #333333;
  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    min-height: 100px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const StyledCareerPageMainPartImage = styled.div`
	position: relative;
	width: 540px;
	height: 380px;
	border-radius: 20px;
	background-size: cover;
	background-image: url(${placeholder});
  @media only screen and (max-width: 600px) {
	  position: absolute;
    filter: blur(3px);
	  opacity: 0.3;
    border-radius: 20px;
  	background-image: url(${mobilePlaceholder});
	  background-size: contain;
    width: 36.533vw;
	  top: 0;	
	  right: -5vw;
    height: 266px;
  }
`;

export const StyledCareerPageMainPartSecondImage = styled.img`
  margin: 30px 0;
	position: relative;
  width: 77.082vw;
  height: 500px;
  border-radius: 20px;
  @media only screen and (max-width: 600px) {
    margin: 50px 0;
    width: 100vw;
    height: 250px;
  }
`;

export const StyledCareerPageMainPartSecondParagraph = styled.p`
  position: relative;
  width: 77.082vw;
  min-height: 81px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #333333;
	margin: 20px 0 50px 0;
  @media only screen and (max-width: 600px) {
    padding: 0 4.267vw;
    width: 91.467vw;
    min-height: 225px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const StyledCareerPageMainPartInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 30px;
  gap: 10px;
  position: relative;
  width: 77.082vw;
  min-height: 175px;
  background: #272727;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
	.career-info-block-question {
    width: 494px;
    min-height: 38px;
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: #FFFFFF;
	}
	.career-info-block-answer {
    width: 1050px;
    min-height: 27px;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
	}
	@media only screen and (max-width: 600px) {
    margin: 0 4.267vw;
    width: 92.467vw;
    min-height: 270px;
    .career-info-block-question {
      width: 73.333vw;
      min-height: 60px;
      font-weight: 600;
      font-size: 22px;
	    line-height: 30px;
    }
    .career-info-block-answer {
      width: 75.466vw;
      min-height: 100px;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
    }
	}
`;