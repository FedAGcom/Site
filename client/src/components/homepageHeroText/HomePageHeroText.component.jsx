import React from 'react';

import CustomButton from "../customButton/CustomButton.component";
import {
	StyledHeroTextOfMainSection,
	StyledFrameOfMainSection,
	StyledHeadlineOfMainSection,
	StyledParagraphOfMainSection
} from "./HomePageHeroText.styles";
import {useTranslation} from "react-i18next";

const HomePageHeroTextComponent = () => {
	const {t, i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
		<StyledHeroTextOfMainSection russian={isRussian.toString()}>
				<StyledFrameOfMainSection russian={isRussian.toString()}>
					<StyledHeadlineOfMainSection russian={isRussian.toString()}>
						{t('main.homepage.mainSection.headline')}
					</StyledHeadlineOfMainSection>

					<StyledParagraphOfMainSection russian={isRussian.toString()} className="paragraph-text-section-frame">
						{t('main.homepage.mainSection.paragraph')}
					</StyledParagraphOfMainSection>
				</StyledFrameOfMainSection>

				<CustomButton className="button-of-main-section">
					{t('main.homepage.mainSection.buttonText')}
				</CustomButton>
		</StyledHeroTextOfMainSection>
	);
};

export default HomePageHeroTextComponent;