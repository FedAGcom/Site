import React from 'react';

import CustomButton from "../customButton/CustomButton.component";
import HomePageScoreComponent from "../homepageScore/HomePageScore.component";
import {
	StyledHeroTextOfMainSection,
	StyledFrameOfMainSection,
	StyledHeadlineOfMainSection,
	StyledParagraphOfMainSection,
	StyledScoreWrapper,
	StyledHeroTextImgWrapper
} from "./HomePageHeroText.styles";
import {useTranslation} from "react-i18next";

import ousourceImg from '../../assets/homepage/homePageOutsource.png'

const HomePageHeroTextComponent = () => {
	const {t, i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
		<StyledHeroTextOfMainSection russian={isRussian.toString()}>

				<div>
					<StyledHeadlineOfMainSection russian={isRussian.toString()}>
						{t('main.homepage.mainSection.headline')}
					</StyledHeadlineOfMainSection>

					<StyledParagraphOfMainSection russian={isRussian.toString()} className="paragraph-text-section-frame">
						{t('main.homepage.mainSection.paragraph')}
					</StyledParagraphOfMainSection>
				</div>
				<div>
					<StyledScoreWrapper>
						<HomePageScoreComponent />
					</StyledScoreWrapper>

					<CustomButton className="button-of-main-section" scrollTo="application-section" width={'100%'} zIndex={10}>
						{t('main.homepage.mainSection.buttonText')}
					</CustomButton>
				</div>

				<StyledHeroTextImgWrapper>
					<img src={ousourceImg} alt="#" />
				</StyledHeroTextImgWrapper>

		</StyledHeroTextOfMainSection>
	);
};

export default HomePageHeroTextComponent;