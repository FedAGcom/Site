import styled from 'styled-components';

import phoneIcon from '../../assets/homepage/phone-mobile.svg';
import emailIcon from '../../assets/homepage/icon-email.svg';
import backgroundVector from '../../assets/homepage/background-vector.svg';
import backgroundVectorResponsive from '../../assets/homepage/background-vector2.svg';

export const StyledContactUsButtonOfHomePage = styled.button`
	position: relative;
	height: 52px;
	width: 350px;
	border: 0;
	outline: none;
	color: white;
	background-color: #B81034;
  border-radius: 5px;
	
	@media only screen and (max-width: 900px) {
		width: 83.467vw;
	}
	
  &:hover {
    cursor: pointer;
    background: #950D2A;
  }
  &:active {
    background: #790A22;
  }

  &:active, &:focus {
    animation-name: faded;
    animation-timing-function: ease-in-out;
    animation-duration: 500ms;

    @-webkit-keyframes faded {
      1% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }


  span {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
`;

export const StyledContactUsParagraphOfHomePage = styled.p`
  position: relative;
  max-width: 480px;
  min-height: 50px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
	
	@media only screen and (max-width: 900px) {
    max-width: 85.467vw;
    min-height: 75px;
	}
`;

export const StyledContactUsHeadlineOfHomePage = styled.p`
  position: relative;
  min-width: ${({ small }) => small ? "127px" : "326px"};
  min-height: 38px;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #FFFFFF;
	
	@media only screen and (max-width: 900px) {
		min-height: ${({small}) => small ? "38px" : "76px"};
    min-width: ${({ small }) => small ? "39.867vw" : "64.667vw"};
		text-align: center;
	}
`;

export const StyledContactUsIconOfHomePage = styled.div`
  position: relative;
  width: 101px;
  height: 101px;
  //left: 220px;
  //top: 50px;
	background-image: url(${({ phone }) => phone ? phoneIcon : emailIcon});
  background-repeat: no-repeat;
	@media only screen and (max-width: 900px){
		//left: 32.267vw;
	}
`;

export const StyledContactUsElementOfHomePage = styled.div`
  min-width: 540px;
  min-height: 410px;
  background: #272727;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	
	
	@media only screen and (max-width: 900px) {
    min-width: 91.467vw;
    min-height: ${({ small }) => small ? "410px" : "448px"};
	}
`;
export const StyledContactUsOfHomePage = styled.section`
  margin: 120px 0 120px 0;
	display: flex;
	justify-content: center;
	gap: 30px;
	position: relative;
	padding: 0 11.458vw;
	width: 100vw;
	//max-height: 769px;
	min-height: 410px;
  background-repeat: no-repeat;
	background-image: url(${backgroundVector});
	background-position: -33px 61px;
	
	@media only screen and (max-width: 900px) {
		margin: 110px 0 80px 0;
		flex-direction: column;
		gap: 20px;
		min-height: 878px;
		padding: 0 4.267vw;
    background-image: url(${backgroundVectorResponsive});
		background-position: 1px 96px;
	}
`;