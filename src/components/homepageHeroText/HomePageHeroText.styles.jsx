import styled from "styled-components";

export const StyledHeroTextOfMainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 602px;
  height: 679px;
  padding: 64px 40px;
  background-color: #333333;
  border-radius: 32px;

  @media only screen and (max-width: 700px) {
    padding: 32px 24px;
    width: 100%;
    height: 598px;
  }
`;

export const StyledHeadlineOfMainSection = styled.h1`
  width: 522px;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 50px;
  color: #FFFFFF;
	margin-bottom: 20px;

  @media only screen and (max-width: 700px) {
    width: auto;
    font-size: 29px;
    line-height: 29px;
  }
`;

export const StyledParagraphOfMainSection = styled.p`
  width: 522px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35em;
  color: #FFFFFF;
  flex: none;
  order: 1;
  flex-grow: 0;

  @media only screen and (max-width: 700px) {
    width: auto;
  }
`;

export const StyledScoreWrapper = styled.div`
  position: relative;
  width: 482px;
  height: 175px;
  margin-bottom: 27px;

  @media only screen and (max-width: 700px) {
    width: auto;
  }
`;

export const StyledHeroTextImgWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
`