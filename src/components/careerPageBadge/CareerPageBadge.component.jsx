import React from 'react';
import {useTranslation} from "react-i18next";

import CustomButton from "../customButton/CustomButton.component";

import {
	StyledCareerPageBadgeSection,
	StyledCareerPageBadgeHeroText,
	StyledCareerPageBadgeHeroTextHeadline,
	StyledCareerPageBadgeHeroTextParagraph
} from './CareerPageBadge.styles'

const CareerPageBadgeComponent = () => {
	const {t} = useTranslation()
	return (
		<StyledCareerPageBadgeSection>
			<StyledCareerPageBadgeHeroText>
				<StyledCareerPageBadgeHeroTextHeadline>
					{t('main.careerPage.heroText.headline')}
				</StyledCareerPageBadgeHeroTextHeadline>
				<StyledCareerPageBadgeHeroTextParagraph>
					{t('main.careerPage.heroText.paragraph')}
				</StyledCareerPageBadgeHeroTextParagraph>
				<CustomButton scrollTo="open-career-positions">
					{t('main.careerPage.heroText.btnText')}
				</CustomButton>
			</StyledCareerPageBadgeHeroText>
		</StyledCareerPageBadgeSection>
	);
};

export default CareerPageBadgeComponent