import styled from "styled-components";

import mainPhotoForBadge from "../../assets/homepage/mainPhotoForBadge.png";
import mainPhotoForMobileBadge from "../../assets/homepage/mainPhotoForMobileBadge.png";
import logoIconOfFedag from '../../assets/homepage/logoIcon.svg'

export const StyledMainSectionOfHomePage = styled.section`
  position: relative;
  width: 100vw;
  min-height: 800px;
  background: #272727;
  border-radius: 0 0 50px 50px;

  @media only screen and (max-width: 600px) {
    height: 771px;
    border-radius: 0 0 30px 30px;
  }
`;

export const StyledPreviewImageOfMainSection = styled.div`
  position: absolute;
  width: 445px;
  min-height: 498px;
  left: 830px;
  top: 142px;
  border-radius: 20px;

  background-image: url(${mainPhotoForBadge});
  background-size: cover;

  @media only screen and (max-width: 600px) {
    width: 94.133vw;
    min-height: 305px;
    left: -75px;
    top: 0;

    background-image: url(${mainPhotoForMobileBadge});
    background-size: cover;
  }
`;

export const StyledLogoTypeOfMainSection = styled.div`
  position: absolute;
  width: 125px;
  height: 125px;
  left: 1168px;
  top: 103px;
  background-image: url(${logoIconOfFedag});
  background-size: cover;
  @media only screen and (max-width: 600px) {
    width: 66px;
    height: 66px;
    left: 65.6%;
    top: 19px;
    opacity: 0.8;
  }
`;

export const StyledMainSectionWrapper = styled.div`
  display: flex;
`

export const StyledMainSectionTeam = styled.div`
  position: relative;
  overflow: hidden;
  padding: 25px 0 0 40px;
  width: 445px;
  height: 296px;
  background-color: #F2F2F2;
  border-radius: 32px;

  @media only screen and (max-width: 470px) {
    width: 100vw;
  }
`

export const StyledLogoForTeam = styled.div`
  width: 454px;
  height: 81px;
`

export const StyledMainSectionTeamHeadline = styled.p`
  position: relative;
  z-index: 10;
  font-size: 65px;
  font-weight: 900;
  line-height: 55px;
  color: #272727;
  margin-top: 40px;
`

export const StyledTeamImgWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  z-index: 1;
`