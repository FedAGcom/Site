import styled from "styled-components";

export const StyledListOfTechStack = styled.ul`
	margin-top: 30px;
	list-style-type: none;
	display: flex;
	position: relative;
	gap: 30px;
	
	@media only screen and (max-width: 600px) {
		gap: 20px;
		overflow: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const StyledTechnologyPreviewOfTechStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 15px;

  min-width: 160px;
  height: 168px;
	
  background: #FFFFFF;
  border: 1px solid #AEAEAE;
  border-radius: 10px;
`;

export const StyledTechnologyIconOfTechStack = styled.img`
	height: 80px;
`;

export const StyledTechnologyTitleOfTechStack = styled.p`
	color: black;
`;