import styled from 'styled-components';

export const StyledCustomButton = styled.button`
  position: absolute;
  border: 0;
  height: 52px;
  width: 350px;
  left: ${({ left }) => left ? left : ""};
  top: ${({ top }) => top ? top : "306px"};
  color: white;
  background: #B81034;
  border-radius: 5px;
  @media only screen and (max-width: 800px) {
    position: absolute;
    top: ${({ resptop }) => resptop ? resptop : "270px"};
	  left: ${({ resptop }) => resptop ? "16px" : ""};
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