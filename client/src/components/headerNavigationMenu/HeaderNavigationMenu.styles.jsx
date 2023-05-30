import styled from "styled-components";
import { NavLink } from "react-router-dom";

const sameListStyles = `
	position: absolute;
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 25px;
	text-decoration: none;
	color: #FFFFFF;
	@media only screen and (max-width: 800px) {
	  position: static;
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: absolute;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-decoration: none;
  color: #FFFFFF;
	&:hover {
		border-bottom: 1px solid white;
		padding-bottom: 3px;
    transition-duration: 0.5s;
    transition-delay: 0s, 2s;
    transition-timing-function: ease;
	}

  @media only screen and (max-width: 800px) {
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
  @media only screen and (max-width: 800px) {
    display: none;
    background-color: #272727;
    width: 80vw;
    height: 100vh;
    z-index: 3;
    position: absolute;
    top: 57px;
    right: 0;
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
        left: 100vw;
      }
      100% {
        left: 20vw;
      }
    }
	
  	@-webkit-keyframes close {
	    0% {
		    visibility: visible;
        left: 20vw;
	    }
	    100% {
		    visibility: visible;
	      left: 100vw;
      }
	  }
`;

export const StyledListElements = styled.li`
  @media only screen and (max-width: 800px) {
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
	width: 100vw;
	display: flex;
	flex-direction: column;
	margin: 0 5.333% 30px 0;
	padding: 0;
`;

export const StyledNavigationLine = styled.hr`
  display: none;
	@media only screen and (max-width: 800px) {
		display: block;
	  width: 71.467vw;
	  height: 0;
	  border: 1px solid #FFFFFF;
	  margin: 0 5.333% 30px 0;
	}
`;

export const StyledHeaderCallTo = styled.div`
  position: absolute;
  left: 25.21%;
  right: 63.19%;
  top: 34.18%;
  bottom: 34.18%;

  @media only screen and (max-width: 800px) {
    position: static;
    margin: 0 5.333% 0 0;
  }
`;