import styled from 'styled-components';

export const StyledLinkButton = styled.a`
  width: fit-content;
	&.link-btn-svg:hover {
	  svg {
    	circle {
		    fill: #950D2A;
		    stroke: #950D2A;	
	    }
		  path {
			  fill: white;
		  }	
	  }
  }
	
  &:active {
    animation-timing-function: ease-out;
    animation-duration: 500ms;
    animation-name: faded;
    svg {
      circle {
        fill: #790A22;
        stroke: #790A22;
      }
      path {
        fill: white;
      }
    }
    @-webkit-keyframes faded {
      1% {
        transform: translateY(1px);
      }
      50% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
`;

