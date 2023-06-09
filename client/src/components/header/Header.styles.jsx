import styled from "styled-components";

export const StyledHeader = styled.header`
	position: relative;
  box-sizing: border-box;
	display: flex;
  align-items: center;
	gap: 44px;
	background-color: #272727;
  height: 80px;
  width: 100%;
	
  @media only screen and (max-width: 600px) {
    width: 100%;
	  z-index: 3;
    height: 57px;
  }
`;