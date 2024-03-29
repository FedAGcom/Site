import styled from 'styled-components';

export const StyledHomePageOtherServicesSection = styled.section`
	position: relative;
	min-height: 401px;
	width: 88.542vw;
	margin: 120px 0;
	padding: 0 11.458vw;
	
	@media only screen and (max-width: 600px) {
		margin: 80px 0;
		min-height: 637px;
		width: 100vw;
		padding: 0 4.267vw;
	}
`;
export const StyledHomePageOtherServicesHeadline = styled.p`
  font-family: 'Nunito Sans', 'Inter', sans-serif;
  position: relative;
  min-height: 68px;	
	top: 0;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: #333333;

  @media only screen and (max-width: 600px) {
	  width: 91.467vw;
    font-size: 40px;
	  font-weight: 600;
	  min-height: 110px;
    font-size: 40px;
    line-height: normal;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 340px) {
		font-size: 33px;
	  line-height: 45px;
  }
`;
export const StyledHomePageOtherServicesSpan = styled.span`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
	
	&.desktop {
    display: block;
    top: 10px;
    height: 27px;
    line-height: 27px;
    color: #333333;
  }
	&.mobile {
		display: none;
	}
	
	@media only screen and (max-width: 600px) {
		&.desktop {
			display: none;
		}
		&.mobile {
			display: block;
      width: 91.466vw;
      height: 24px;
      font-family: 'Inter', sans-serif;
      line-height: 24px;
      color: #000000;
		}
	}
`;
export const StyledHomePageOtherServicesList = styled.ul`
	height: 266px;
	position: relative;
	display: flex;
  width: inherit;
	top: 30px;
	flex-direction: row;
	gap: 65px;
	overflow-x: scroll; 
	&::-webkit-scrollbar {
    display: none;
  }
	
	@media only screen and (max-width: 600px) {
    height: 463px;
		gap: 25px;
		width: 91.466vw;
	}
`;


export const StyledHomePageOtherServicesItem = styled.li`
	border-radius: 30px;
	padding: 40px 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
  background: ${({status}) => status ? "#F2F2F2" : "#FCFCFC"};
	max-width: 760px;
  gap: 30px;
	pointer-events: ${({ status }) => status ? "auto" : "none"};
	
  @media only screen and (max-width: 600px) {
	  flex-direction: column-reverse;
	  padding: 50px 4vw;
  	height: 463px;
	  width: 91.466vw;
  }
`;

export const StyledHomePageOtherServicesComingSoon = styled.div`
	p {
		//-webkit-text-stroke: 1px #B81034;
    display: ${({ status }) => (status) ? "none" : "block"};
    position: relative;
    min-width: 445px;
    height: 73px;
    left: -304px;
    transform: rotate(-5deg);
		
		opacity: 1;
    font-family: 'Inter', 'Nunito Sans', sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    color: #FFFFFF;
		
    //text-shadow: 0 0 2px rgba(184, 16, 52, 0.3);
    text-shadow: 
	    1px 1px 0 rgba(184, 16, 52, 0.3),
      -1px 1px 0 rgba(184, 16, 52, 0.3),
      1px -1px 0 rgba(184, 16, 52, 0.3),
      -1px -1px 0 rgba(184, 16, 52, 0.3),
      0px 1px 0 rgba(184, 16, 52, 0.3),
      0px -1px 0 rgba(184, 16, 52, 0.3),
      -1px 0px 0 rgba(184, 16, 52, 0.3),
      1px 0px 0 rgba(184, 16, 52, 0.3),
      2px 2px 0 rgba(184, 16, 52, 0.3),
      -2px 2px 0 rgba(184, 16, 52, 0.3),
      2px -2px 0 rgba(184, 16, 52, 0.3),
      -2px -2px 0 rgba(184, 16, 52, 0.3),
      0px 2px 0 rgba(184, 16, 52, 0.3),
      0px -2px 0 rgba(184, 16, 52, 0.3),
      -2px 0px 0 rgba(184, 16, 52, 0.3),
      2px 0px 0 rgba(184, 16, 52, 0.3),
      1px 2px 0 rgba(184, 16, 52, 0.3),
      -1px 2px 0 rgba(184, 16, 52, 0.3),
      1px -2px 0 rgba(184, 16, 52, 0.3),
      -1px -2px 0 rgba(184, 16, 52, 0.3),
      2px 1px 0 rgba(184, 16, 52, 0.3),
      -2px 1px 0 rgba(184, 16, 52, 0.3),
      2px -1px 0 rgba(184, 16, 52, 0.3),
      -2px -1px 0 rgba(184, 16, 52, 0.3);
		
    @media only screen and (max-width: 600px) {
			transform: rotate(-45deg) scale(0.8);
			left: 4.5vw;
			z-index: 1;
			top: 20px;
		}
	}
`;

export const StyledHomePageOtherServicesText = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 380px;
  opacity: ${({status}) => status ? "1" : "0.5"};
	
	@media only screen and (max-width: 600px) {
		min-width: 83.467vw;
    position: relative;
    top: -29px;
	}
`;

export const StyledHomePageOtherServicesLink = styled.a`
  position: relative;
	top: 17px;
	height: 25px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-decoration-line: underline;
  color: #B81034;
	
	img {
		position: relative;
		left: 5px;
	}
  @media only screen and (max-width: 600px) {
  	top: 27px;
  }
`;

export const StyledHomePageOtherServicesInfo = styled.p`
  height: 100px;
	position: relative;
	top: 11px;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
	
	mark {
		background-color: transparent;
		color: #B81034;
	}
	@media only screen and (max-width: 600px) {
		width: 96%;
		color: #000000;
    height: 125px;
		font-size: 17px;
	}
  @media only screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

export const StyledHomePageOtherServicesHeading = styled.p`
	position: relative;
	width: 257px;
	background-color: #B81034;
	padding: 6px 0;
	border-radius: 10px;
  height: 45px;
  font-size: 24px;
  line-height: 33px;
	text-align: center;
  color: #FFFFFF;
	
  @media only screen and (max-width: 600px) {
	  width: 83.467vw;
	  white-space: nowrap;
  }
`;

export const StyledHomePageOtherServicesLetter = styled.img`
	min-width: 227px;
	height: 156px;
  position: relative;
  left: ${({ status }) => (status !== "") ? "-7px" : "-452px"};
  opacity: ${({status}) => status ? "1" : "0.3"};
	
	
	@media only screen and (max-width: 600px) {
		width: 40.267vw;
		height: 103px;
    left: 0;
    top: ${({ status }) => (status !== "") ? "0" : "69px"};
	}
`;