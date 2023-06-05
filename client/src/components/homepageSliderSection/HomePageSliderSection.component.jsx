import React from "react";

import {
	StyledHomePageSliderSection,
	StyledHomePageSliderSectionHeadline
} from "./HomePageSliderSection.styles";

import SliderComponent from "../slider/Slider.component";
import {useTranslation} from "react-i18next";

const HomePageSliderSectionComponent = () => {
	const {t} = useTranslation()
	return (
		<StyledHomePageSliderSection>
			<StyledHomePageSliderSectionHeadline>
				{t(`main.homepage.sliderSection.headline`)}
			</StyledHomePageSliderSectionHeadline>
			<SliderComponent />
		</StyledHomePageSliderSection>
	);
};

export default HomePageSliderSectionComponent;