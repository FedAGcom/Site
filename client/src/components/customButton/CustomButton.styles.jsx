import styled from 'styled-components';

export const StyledCustomButton = styled.button`
  position: relative;
  border: 0;
  height: 52px;
  width: 350px;
  left: ${({ left }) => left ? left : ""};
  top: ${({ top }) => top ? top : ""};
  color: white;
  background: #B81034;
  border-radius: 5px;
  @media only screen and (max-width: 600px) {
    position: relative;
	  width: 91.467vw;
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