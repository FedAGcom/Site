import React from "react";

import {
	StyledHomePageSliderSection,
	StyledHomePageSliderSectionHeadline
} from "./HomePageSliderSection.styles";

import SliderComponent from "../slider/Slider.component";

const HomePageSliderSectionComponent = () => {
	return (
		<StyledHomePageSliderSection>
			<StyledHomePageSliderSectionHeadline>
				What clients love about our solution
			</StyledHomePageSliderSectionHeadline>
			<SliderComponent />
		</StyledHomePageSliderSection>
	);
};

export default HomePageSliderSectionComponent;