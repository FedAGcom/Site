import styled from "styled-components";
import careerBadge from '../../assets/career/mainBadge.png'
import careerMobileBadge from '../../assets/career/mainMobileBadge.png'
export const StyledCareerPageBadgeSection = styled.section`
  width: 100vw;
  height: 600px;
  background-image: url(${careerBadge});
	background-size: cover;
  margin: 0 0 120px 0;
	@media only screen and (max-width: 600px) {
    margin: 0 0 35px 0;
		background-image: none;
		width: 100vw;
	}
`;

export const StyledCareerPageBadgeHeroText = styled.div`
  position: relative;
  width: 800px;
  height: 601px;
  background: rgba(39, 39, 39, 0.7);
  backdrop-filter: blur(15px);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
  padding: 0 11.458vw;
	
  @media only screen and (max-width: 600px) {
    padding: 0 4.267vw;
	  backdrop-filter: none;
    background: url(${careerMobileBadge});
    background-size: cover;
    width: 100vw;
  }
`;

export const StyledCareerPageBadgeHeroTextHeadline = styled.h1`
  position: relative;
  width: 248px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 82px;
  color: #FFFFFF;
	margin-bottom: 11px;
	
  @media only screen and (max-width: 600px) {
	  margin-bottom: 20px;
	  width: 38.133vw;
    font-weight: 700;
    font-size: 40px;
    line-height: 55px;
  }
`;

export const StyledCareerPageBadgeHeroTextParagraph = styled.p`
  position: relative;
  width: 540px;
  min-height: 114px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: #FFFFFF;
	margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    min-height: 81px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    line-height: 27px;
  }
`;