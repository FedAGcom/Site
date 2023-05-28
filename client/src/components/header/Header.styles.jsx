import styled from "styled-components";

export const StyledHeader = styled.header`
	position: absolute;
  display: flex;
  box-sizing: border-box;
  background-color: #272727;
	
	
  height: 80px;
  width: 100%;
	
  left: 0;
  right: 0;
  top: 0;
  bottom: -1.27%;
	
  @media only screen and (max-width: 800px) {
    width: 100%;
	  position: fixed;
	  z-index: 3;
    height: 57px;
  }
`;