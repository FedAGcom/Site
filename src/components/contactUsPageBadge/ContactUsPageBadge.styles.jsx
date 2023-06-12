import styled from "styled-components";

import mainBadge from '../../assets/contactUsPage/mainPhoto.png'
import mainMobileBadge from '../../assets/contactUsPage/mainMobilePhoto.png'

export const StyledContactUsPageBadgeSection = styled.section`
  width: 100vw;
  position: relative;
  padding: 0 11.458vw;
  background: url(${mainBadge});
  background-size: cover;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 600px) {
    padding: 0 4.267vw;
    background: url(${mainMobileBadge});
    background-size: cover;
  }
`;

export const StyledContactUsPageBadgeSectionHeadline = styled.h1`
  min-width: 306px;
  min-height: 82px;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 82px;
  color: #FFFFFF;
  @media only screen and (max-width: 600px) {
    min-width: 204px;
    min-height: 55px;
    font-size: 40px;
    line-height: 55px;
`;