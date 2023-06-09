import styled from "styled-components";
import { NavLink } from "react-router-dom";

const sameListStyles = `
	text-align: center;
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 25px;
	text-decoration: none;
	color: #FFFFFF;
	@media only screen and (max-width: 500px) {
	  // position: static;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-decoration: none;
  color: #FFFFFF;
	&:not(.disabled):hover {
		border-bottom: 1px solid white;
		padding-bottom: 3px;
    transition-duration: 0.5s;
    transition-delay: 0s, 2s;
    transition-timing-function: ease;
	}

  @media only screen and (max-width: 500px) {
	  position: static;
	  &:nth-child(1) {
		  margin-top: 30px;
	  }
    &:nth-child(2), &:nth-child(3) {
      margin-top: 20px;
    }
  }
`;

export const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	width: 63.333vw;
  @media only screen and (max-width: 600px) {
    display: none;
    background-color: #272727;
	  border-bottom-left-radius: 20px;
	  border-bottom: 3px solid #B81034;
    width: 80vw;
    height: 50vh;
    z-index: 3;
    position: absolute;
    top: 57px;
    right: 0;
	  padding-right: 5.333vw;
	  gap: 30px;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column-reverse;
		
    &.is-active {
	    display: flex;
      -webkit-animation: ease-in-out;
      -webkit-animation-name: run;
      -webkit-animation-duration: 2s;
    }
	  
	  &.is-hidden {
		  display: flex;
		  visibility: hidden;
      -webkit-animation: ease-in-out;
      -webkit-animation-name: close;
      -webkit-animation-duration: 2s;
	  }
  }
	
    @-webkit-keyframes run {
      0% {
        transform: scale(0, 0);
      }
	    20%	{
        transform: scale(0, 1);
		    
	    }
      100% {
        transform: scale(1, 1);
      }
    }
  	@-webkit-keyframes close {
	    0% {
        transform: scale(1, 1);
		    visibility: visible;
	    }
      80%	{
        transform: scaleX(0);
      }
	    100% {
		    visibility: hidden;
        transform: scale(0, 0);
      }
	  }
`;

export const StyledListElements = styled.li`
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
    //animation: fadeIn 1s ease-in both;
  }
	
	&:nth-child(1) {
		${sameListStyles};
    left: 63.96%;
    right: 31.25%;
    top: 34.18%;
    bottom: 34.18%;
		
  }
	&:nth-child(2) {
    ${sameListStyles};
    left: 71.94%;
    right: 24.65%;
    top: 34.18%;
    bottom: 34.18%;
		animation-delay: 0.85s;
		
  }
	&:nth-child(3) {
    ${sameListStyles};
    left: 77.36%;
    right: 11.46%;
    top: 34.18%;
    bottom: 34.18%;
		animation-delay: 1.7s;
	}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const StyledUnorderedList = styled.ul`
	list-style-type: none;
	width: 340px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: flex-end;
	}
`;

export const StyledNavigationLine = styled.hr`
  display: none;
	@media only screen and (max-width: 600px) {
		display: block;
	  width: 71.467vw;
	  height: 0;
	  border: 1px solid #FFFFFF;
	}
`;

export const StyledHeaderCallTo = styled.div`
  //position: absolute;
  //left: 25.21%;
  //right: 63.19%;
  //top: 34.18%;
  //bottom: 34.18%;

  @media only screen and (max-width: 600px) {
    //position: static;
    //margin: 0 5.333% 0 0;
  }
`;