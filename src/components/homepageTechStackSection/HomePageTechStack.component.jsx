import React from "react";

import {
	StyledHeadlineOfTechStackSection, StyledParagraphOfTechStackSection,
	StyledTechStackSection,
} from "./HomePageTechStack.styles";

import HomePageListOfTechStackComponent from "../homepageListOfTechStack/HomePageListOfTechStack.component";
import FilterButtonComponent from "../filterButton/fillterButton.component";
import {useTranslation} from "react-i18next";

const HomePageTechStackComponent = () => {
	const { t, i18n } = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
		<StyledTechStackSection russian={isRussian.toString()}>
			<div>

			<StyledHeadlineOfTechStackSection>
				{t('main.homepage.technologiesSection.headline')}
			</StyledHeadlineOfTechStackSection>

			<StyledParagraphOfTechStackSection russian={isRussian.toString()}>
				{t('main.homepage.technologiesSection.paragraph')}
			</StyledParagraphOfTechStackSection>

			<FilterButtonComponent collection="technologies"/>

			<HomePageListOfTechStackComponent />
			</div>
		</StyledTechStackSection>
	);
};

export default HomePageTechStackComponent;