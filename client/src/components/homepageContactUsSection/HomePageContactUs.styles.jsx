import styled from 'styled-components';

import phoneIcon from '../../assets/homepage/phone-mobile.svg';
import emailIcon from '../../assets/homepage/icon-email.svg';
import backgroundVector from '../../assets/homepage/background-vector.svg';
import backgroundVectorResponsive from '../../assets/homepage/background-vector2.svg';

export const StyledContactUsButtonOfHomePage = styled.button`
	position: relative;
	top: 119px;
	left: 95px;
	height: 52px;
	width: 350px;
	border: 0;
	outline: none;
	color: white;
	background-color: #B81034;
  border-radius: 5px;
	
	@media only screen and (max-width: 600px) {
		width: 83.467vw;
		top: 94px;
		left: 4.267vw;
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
    /* identical to box height */

    text-align: center;
  }
`;

export const StyledContactUsParagraphOfHomePage = styled.p`
  position: relative;
  width: 480px;
  height: 50px;
	left: 30px;
	top: 84px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
	
	@media only screen and (max-width: 600px) {
    width: 85.467vw;
    height: 75px;
    left: 4.267vw;
    top: 78px;
	}
`;

export const StyledContactUsHeadlineOfHomePage = styled.p`
  position: relative;
  width: ${({ small }) => small ? "127px" : "326px"};
  height: 38px;
  left: ${({ small }) => small ? "207px" : "107px"};
  top: ${({ small }) => small ? "71px" : "75px"};
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #FFFFFF;
	
	@media only screen and (max-width: 600px) {
		height: ${({small}) => small ? "38px" : "76px"};
    left: ${({ small }) => small ? "28.8vw" : "13vw"};
    top: ${({ small }) => small ? "68px" : "68px"};
    width: ${({ small }) => small ? "39.867vw" : "64.667vw"};
		text-align: center;
	}
`;

export const StyledContactUsIconOfHomePage = styled.div`
  position: relative;
  width: 101px;
  height: 101px;
  left: 220px;
  top: 50px;
	background-image: url(${({ phone }) => phone ? phoneIcon : emailIcon});
  background-repeat: no-repeat;
	@media only screen and (max-width: 600px){
		left: 32.267vw;
	}
`;

export const StyledContactUsElementOfHomePage = styled.div`
  width: 540px;
  height: 410px;
  background: #272727;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
	
	@media only screen and (max-width: 600px) {
    width: 91.467vw;
    height: ${({ small }) => small ? "410px" : "448px"};
	}
`;

export const StyledContactUsOfHomePage = styled.section`
  margin-top: 269px;
	display: flex;
	flex-direction: row;
	gap: 30px;
	position: absolute;
	top: 4108px;
	padding: 0 165px;
	width: 100vw;
	height: 410px;
  background-repeat: no-repeat;
	background-image: url(${backgroundVector});
	background-position: -33px 61px;
	
	@media only screen and (max-width: 600px) {
		margin-top: 189px;
		flex-direction: column;
		gap: 20px;
		height: 878px;
		padding: 0 16px;
		top: 5091px;
    background-image: url(${backgroundVectorResponsive});
		background-position: 1px 96px;
	}
`;