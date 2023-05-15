import React from "react";

import HomePageHeroTextComponent from "../homepageHeroText/HomePageHeroText.component";
import HomePageScoreComponent from "../homepageScore/HomePageScore.component";

import {
	StyledLogoTypeOfMainSection,
	StyledMainSectionOfHomePage,
	StyledPreviewImageOfMainSection
} from "./HomePageMainSection.styles";

const HomePageMainSectionComponent = () => {
  return (
		<StyledMainSectionOfHomePage>

			<HomePageHeroTextComponent />

			<StyledPreviewImageOfMainSection />

			<HomePageScoreComponent />

			<StyledLogoTypeOfMainSection />

		</StyledMainSectionOfHomePage>
  );
};

export default HomePageMainSectionComponent;