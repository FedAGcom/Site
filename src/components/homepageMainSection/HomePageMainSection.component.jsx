import React from "react";

import HomePageHeroTextComponent from "../homepageHeroText/HomePageHeroText.component";
import HomePageScoreComponent from "../homepageScore/HomePageScore.component";
import './homepage.styles.scss';
import {
	StyledLogoTypeOfMainSection,
	StyledMainSectionOfHomePage,
	StyledPreviewImageOfMainSection
} from "./HomePageMainSection.styles";

const HomePageMainSectionComponent = () => {
  return (
		<section className="main-section">

			<HomePageHeroTextComponent />

			<div className="preview-image">

			<HomePageScoreComponent />
			<div className="logo-type"/>
			</div>



		</section>
  );
};

export default HomePageMainSectionComponent;