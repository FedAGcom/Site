import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
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
	  margin-top: 3rem;
  }
`;

export const StyledNav = styled.nav`
  @media only screen and (max-width: 800px) {
    border-top: 2px dotted red;
    width: 100vw;
    height: calc(100vh - 57px);
    background-color: #272727;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column-reverse;
    top: 57px;
    position: relative;
	  
	  animation: show 500ms 1;
	  
	  .leave {
		  animation: hide 500ms 1;
		  
		  @keyframes hide{
        0% {
          opacity: 1;
        }

        100% {
          opacity: 0;
	        //display: none;
        }
		  }
	  }
	  
	  @keyframes show{
		  0% {
			  opacity: 0;
		  }
      
		  100% {
			  opacity: 1;
		  }
	  }
  }
`;

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

export const StyledListElements = styled.li`
  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    animation: fadeIn 1.5s ease-in both;
  }
  &:active {
    animation: fadeOut 1s ease-out;
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
		animation-delay: 1s;
		
  }
	&:nth-child(3) {
    ${sameListStyles};
    left: 77.36%;
    right: 11.46%;
    top: 34.18%;
    bottom: 34.18%;
		animation-delay: 2s;
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
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const StyledUnorderedList = styled.ul`
	list-style-type: none;
	width: 100vw;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`;