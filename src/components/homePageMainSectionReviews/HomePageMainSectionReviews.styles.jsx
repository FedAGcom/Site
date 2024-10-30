import styled from "styled-components";

export const StyledMainSectionWrapper = styled.div`
  display: flex;
`

export const StyledMainSectionReviews = styled.div`
  width: 140px;
  height: 296px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 1340px) {
    flex-direction: row;
    justify-content: center;
    height: 140px
  }
`

export const StyledLogoForReviews = styled.div`
  width: 140px;
  height: 140px;
`

export const StyledMainSectionTeamHeadline = styled.p`
  font-size: 65px;
  font-weight: 900;
  line-height: 55px;
  color: #272727;
  margin-top: 40px;
`