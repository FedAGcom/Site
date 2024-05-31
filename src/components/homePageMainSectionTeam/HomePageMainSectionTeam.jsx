import React from 'react';

import {
    StyledMainSectionTeam,
    StyledLogoForTeam,
    StyledMainSectionTeamHeadline,
	StyledTeamImgWrapper
} from "./HomePageMainSectionTeam.styles";
import {useTranslation} from "react-i18next";

import teamImg from '../../assets/homepage/homePageTeam.png'
import {ReactComponent as Logo} from '../../assets/homepage/fedagHomePageTeam.svg';

const HomePageMainSectionTeam = () => {
	const {t, i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
		<StyledMainSectionTeam russian={isRussian.toString()}>
            <StyledLogoForTeam><Logo/></StyledLogoForTeam>
            <StyledMainSectionTeamHeadline>
                {t('main.homepage.mainSection.teamHeadline')}
            </StyledMainSectionTeamHeadline>

			<StyledTeamImgWrapper>
				<img src={teamImg} alt="#" />
			</StyledTeamImgWrapper>
		</StyledMainSectionTeam>
	);
};

export default HomePageMainSectionTeam;