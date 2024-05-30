import React from "react";

import HomePageHeroTextComponent from "../homepageHeroText/HomePageHeroText.component";
import HomePageMainSectionHeader from "../homePageMainSectionHeader/HomePageMainSectionHeader";
import HomePageMainSectionTeam from "../homePageMainSectionTeam/HomePageMainSectionTeam";
import HomePageMainSectionReviews from "../homePageMainSectionReviews/HomePageMainSectionReviews";
import HomePageMainSectionPortfolio from "../homePageMainSectionPortfolio/HomePageMainSectionPortfolio";

import {
	StyledMainSectionOfHomePage,
	StyledMainSectionWrapper,
	StyledMainSectionWrapperRight,
	StyledMainSectionOfHomePageInner
} from "./HomePageMainSection.styles";

const HomePageMainSectionComponent = () => {
  return (
		<StyledMainSectionOfHomePage>
			<StyledMainSectionOfHomePageInner>
				<HomePageMainSectionHeader/>
				<StyledMainSectionWrapper>
					<HomePageHeroTextComponent />
					<StyledMainSectionWrapperRight>
						<StyledMainSectionWrapper>
							<HomePageMainSectionTeam />
							<HomePageMainSectionReviews />
						</StyledMainSectionWrapper>
						<HomePageMainSectionPortfolio/>
					</StyledMainSectionWrapperRight>
				</StyledMainSectionWrapper>
			</StyledMainSectionOfHomePageInner>
		</StyledMainSectionOfHomePage>
  );
};

export default HomePageMainSectionComponent;