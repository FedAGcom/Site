import styled from "styled-components";

export const StyledCallTo = styled.a`
  text-decoration: none;

  position: absolute;
  left: 25.21%;
  right: 63.19%;
  top: 34.18%;
  bottom: 34.18%;

  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  color: #FFFFFF;

  @media only screen and (max-width: 800px) {
    position: static;
    animation: fadeIn 1.5s ease-in both;
    animation-delay: 3s;
	  
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
  }
`;