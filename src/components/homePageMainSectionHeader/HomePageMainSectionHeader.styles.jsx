import styled from "styled-components";

export const StyledParagraphOfMainSection = styled.p`
  width: 560px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.35em;
  color: #FFFFFF;
  flex: none;
  order: 1;
  flex-grow: 0;
	
  @media only screen and (max-width: 600px) {
    width: 91.467vw;
    font-size: 20px;
  }
`;

export const StyledWrapperOfMainSectionHeader = styled.div`
  position: relative;
  display: flex;
  gap: 38px;
  margin-bottom: 57px;
  @media only screen and (max-width: 1340px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

export const StyledLogoForHeader = styled.div`
	height: 115px;
	width: 638px;
`;

export const StyledLineLogoForHeader = styled.div`
  position: absolute;
  left: -34px;
  top: -34px;
  height: 115px;
  width: 638px;
`;;