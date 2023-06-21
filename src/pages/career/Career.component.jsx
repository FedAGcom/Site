import React, {Suspense} from "react";
import {useTranslation} from "react-i18next";

import {
	StyledCareerPage
} from './Career.styles'

import CareerPageBadgeComponent from "../../components/careerPageBadge/CareerPageBadge.component";
import CareerPageMainPartComponent from "../../components/careerPageMainPart/CareerPageMainPart.component";
import CareerPageOpenPositionsComponent from "../../components/careerPageOpenPositions/CareerPageOpenPositions.component";
import Spinner from "../../components/spinner/spinner.component";

const CareerComponent = () => {
	const {i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
		<Suspense fallback={<Spinner top="true" />}>
			<StyledCareerPage russian={isRussian.toString()}>
				<CareerPageBadgeComponent />
				<CareerPageMainPartComponent />
				<CareerPageOpenPositionsComponent />
			</StyledCareerPage>
		</Suspense>
	)
};

export default CareerComponent;