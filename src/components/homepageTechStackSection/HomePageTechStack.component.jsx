import React from "react";

import {
	StyledHeadlineOfTechStackSection, StyledParagraphOfTechStackSection,
	StyledTechStackSection,
} from "./HomePageTechStack.styles";

// import HomePageFilterButtonsComponent from "../homepageFilterButton/HomePageFilterButton.component";

import HomePageListOfTechStackComponent from "../homepageListOfTechStack/HomePageListOfTechStack.component";
import FilterButtonComponent from "../filterButton/fillterButton.component";

const HomePageTechStackComponent = () => {
	return (
		<StyledTechStackSection>
			<StyledHeadlineOfTechStackSection>
				Technology stack
			</StyledHeadlineOfTechStackSection>

			<StyledParagraphOfTechStackSection>
				If you have not found the necessary glasses, we are ready to quickly select a team or gain special knowledge for non-standard tasks.
			</StyledParagraphOfTechStackSection>

			<FilterButtonComponent collection="technology" top="192px" />

			<HomePageListOfTechStackComponent />
		</StyledTechStackSection>
	);
};

export default HomePageTechStackComponent;