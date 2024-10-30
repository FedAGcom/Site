import styled from 'styled-components';

export const StyledCustomButton = styled.button`
  display: ${({icon}) => icon ? 'flex' : "block"};
  align-items: ${({icon}) => icon ? 'center' : "stretch"};
  justify-content: ${({icon}) => icon ? 'center' : "flex-start"};
  gap: ${({icon}) => icon ? '25px' : "0"};
  position: relative;
  border: 0;
  height: ${({height}) => height ? height : "52px"};;
  width: ${({width}) => width ? width : "350px"};
  left: ${({ left }) => left ? left : ""};
  top: ${({ top }) => top ? top : ""};
  color: ${({ color }) => color ? color : "white"};
  background: ${({backgroundColor}) => backgroundColor ? backgroundColor : "#B81034"};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : "5px"};
  z-index: ${({zIndex}) => zIndex ? zIndex : 'auto'};
  @media only screen and (max-width: 600px) {
    position: relative;
	  width: ${({mobilewidth}) => mobilewidth ? mobilewidth : "91.467vw"};
    top: ${({ resptop }) => resptop ? resptop : ""};
	  left: ${({ resptop }) => resptop ? "4.267vw" : ""};
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