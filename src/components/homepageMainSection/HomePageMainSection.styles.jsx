import styled from "styled-components";

export const StyledMainSectionOfHomePage = styled.section`
  position: relative;
  width: 100vw;
  min-height: 800px;
  background: #272727;
  border-radius: 0 0 50px 50px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    height: 1604px;
    border-radius: 0 0 30px 30px;
    padding: 0 15px;
  }
`;

export const StyledMainSectionOfHomePageInner = styled.div`
  position: relative;
  top: 140px;
  max-width: 1220px;

  @media only screen and (max-width: 700px) {
    top: 25px;
    margin: 0 15px;
  }
`;

export const StyledMainSectionWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media only screen and (max-width: 1340px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledMainSectionWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`