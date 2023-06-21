import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const StyledFooterTranslateButton = styled.div`
	background: #FFFFFF;
	padding: 8px 15px;
	width: 160px;
	height: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
  border-radius: 10px;
	gap: 15px;
	margin-top: 16px;
	
	@media only screen and (max-width: 360px) {
		gap: 5px;
		width: 36vw;
	}
	
	span {
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #333333;
		width: 76px;
  }
	
	hr {
		height: 0;
		width: 24px;
    border: 1px solid #AEAEAE;
    transform: rotate(90deg);
	}
	
	img {
		border-radius: 6px;
		width: 24px;
		height: 24px;
	}
`;

export const StyledNavLinkOfFooter = styled(NavLink)`
  &:not(.footer-logo):hover {
    border-bottom: 1px solid white;
    padding-bottom: 3px;
    transition-duration: 0.5s;
    transition-delay: 0s, 2s;
    transition-timing-function: ease;
  }
	
`;

export const StyledElementOfFooterSection = styled.li`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ headline }) => headline ? "18px" : "16px"};
  line-height: ${({ headline }) => headline ? "25px" : "22px"};
  margin-bottom: ${({ headline }) => headline ? "4px" : "0"};
	color: #FFFFFF;
	
	a {
		color: #FFFFFF;
    &:not(.phone-number, .email-link):hover {
      border-bottom: 1px solid white;
      padding-bottom: 1px;
      transition-duration: 0.4s;
      transition-delay: 0s, 2s;
      transition-timing-function: ease;
    }
	}
	
	@media only screen and (max-width: 600px) {
    margin-bottom: ${({ headline }) => headline ? "2px" : "0"};
	}
  @media only screen and (max-width: 371px) {
    &:not(.headline) {
	    font-size: 0.85rem;
    }
  }
  &.disabled-link {
    pointer-events: none;
  }
`;

export const StyledListOfFooterSections = styled.ul`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 4px;
	max-height: 169px;
	margin-bottom: 30px;
	width: 156px;
	&.social-links {
    flex-wrap: wrap;
		.habr {
			margin-top: 33px;
		}
	}	
	@media only screen and (max-width: 600px) {
		gap: 8px;
		width: 41.6vw;
    &.social-links {
    	flex-wrap: nowrap;
      margin-bottom: 60px;
	    .habr {
		    margin-top: 0;
	    }
    }
	}
`;

export const StyledFooterMainPart = styled.div`
	width: 77.083vw;
  padding-right: 108px;
	display: flex;
	flex-direction: row;
	gap: 8.681vw;
	
  @media only screen and (max-width: 600px) {
    padding-right: 2.933vw;
	  width: 91.467vw;
	  flex-wrap: wrap;
	  gap: 4.267vw;
  }
`;

export const StyledFooterLine = styled.hr`
  width: 77.083vw;
  height: 0;
  border: 1px solid #FFFFFF;
	@media only screen and (max-width: 600px) {
		width: 91.467vw;
	}
`;

export const StyledFooter = styled.footer`
  width: 100%;
  clear: both;
  position: relative;
  height: 360px;
  margin-top: -360px;
  background: #272727;
  border-radius: 50px 50px 0 0;
	padding: 60px 11.458vw;
	
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	@media only screen and (max-width: 600px) {
    padding: 60px 4.267vw;
		height: 654px;
		margin-top: -646px;
    border-radius: 25px 25px 0 0;
	}
`;