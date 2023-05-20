import React from "react";

import HomePageMainSectionComponent from "../../components/homepageMainSection/HomePageMainSection.component";
import HomePageTechStackComponent from "../../components/homepageTechStackSection/HomePageTechStack.component";
import HomePageApproachComponent from "../../components/homepageApproachSection/HomePageApproach.component";
import HomePageCasesComponent from "../../components/homepageCasesSection/HomePageCases.component";

const HomePageComponent = () => {
	return (
		<div>
			<HomePageMainSectionComponent />
			<HomePageTechStackComponent />
			<HomePageApproachComponent />
			<HomePageCasesComponent />
		</div>
	)
};

export default HomePageComponent;