import React from "react";

import {
	StyledCareerPage
} from './Career.styles'

import CareerPageBadgeComponent from "../../components/careerPageBadge/CareerPageBadge.component";
import CareerPageMainPartComponent from "../../components/careerPageMainPart/CareerPageMainPart.component";
import CareerPageOpenPositionsComponent from "../../components/careerPageOpenPositions/CareerPageOpenPositions.component";
import {useTranslation} from "react-i18next";

const CareerComponent = () => {
	const {i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
		<StyledCareerPage russian={isRussian.toString()}>
			<CareerPageBadgeComponent />
			<CareerPageMainPartComponent />
			<CareerPageOpenPositionsComponent />
		</StyledCareerPage>
	)
};

export default CareerComponent;