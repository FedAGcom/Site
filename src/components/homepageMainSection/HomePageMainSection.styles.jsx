import styled from "styled-components";

import mainPhotoForBadge from "../../assets/homepage/mainPhotoForBadge.png";
import mainPhotoForMobileBadge from "../../assets/homepage/mainPhotoForMobileBadge.png";
import logoIconOfFedag from '../../assets/homepage/logoIcon.png'

export const StyledMainSectionOfHomePage = styled.section`
  position: absolute;
  width: 100vw;
  height: 800px;
  left: 0;
  top: 79px;

  background: #272727;
  border-radius: 0 0 50px 50px;
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

  @media only screen and (max-width: 800px) {
    height: 771px;
    left: 0;
    top: 57px;

    border-radius: 0 0 30px 30px;
  }
`;

export const StyledPreviewImageOfMainSection = styled.div`
  position: absolute;
  width: 445px;
  height: 498px;
  left: 830px;
  top: 142px;
  border-radius: 20px;

  background-image: url(${mainPhotoForBadge});
  background-size: cover;

  @media only screen and (max-width: 800px) {
    width: 353px;
    height: 305px;
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
  @media only screen and (max-width: 800px) {
    width: 66px;
    height: 66px;
    left: 65.6%;
    top: 19px;
    opacity: 0.8;
  }
`;