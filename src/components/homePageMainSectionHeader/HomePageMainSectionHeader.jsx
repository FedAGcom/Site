import React from 'react';

import {
	StyledParagraphOfMainSection,
    StyledWrapperOfMainSectionHeader,
    StyledLogoForHeader,
	StyledLineLogoForHeader
} from "./HomePageMainSectionHeader.styles";
import {useTranslation} from "react-i18next";

import {ReactComponent as Logo} from '../../assets/homepage/fedagHomePage.svg';
import {ReactComponent as LineLogo} from '../../assets/homepage/homePageLineLogo.svg';

const HomePageMainSectionHeader = () => {
	const {t, i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
        <StyledWrapperOfMainSectionHeader>
			<StyledLineLogoForHeader><LineLogo/></StyledLineLogoForHeader>
            <StyledLogoForHeader><Logo/></StyledLogoForHeader>
            <StyledParagraphOfMainSection russian={isRussian.toString()} className="paragraph-text-section-frame">
				{t('main.homepage.mainSection.headerParagraph')}
			</StyledParagraphOfMainSection>
        </StyledWrapperOfMainSectionHeader>
	);
};

export default HomePageMainSectionHeader;