import styled from "styled-components";

export const StyledHeader = styled.header`
	position: absolute;
  box-sizing: border-box;
	
  //top: 0;
  display: flex;
  align-items: center;
	gap: 44px;
	
  background-color: #272727;
  height: 80px;
  width: 100%;
	
  @media only screen and (max-width: 600px) {
    width: 100%;
	  position: fixed;
	  z-index: 3;
    height: 57px;
  }
`;