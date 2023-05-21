import React from "react";

import HomePageMainSectionComponent from "../../components/homepageMainSection/HomePageMainSection.component";
import HomePageTechStackComponent from "../../components/homepageTechStackSection/HomePageTechStack.component";
import HomePageApproachComponent from "../../components/homepageApproachSection/HomePageApproach.component";
import HomePageCasesComponent from "../../components/homepageCasesSection/HomePageCases.component";
import HomePageEmployeesComponent from "../../components/homepageEmployeesSection/HomePageEmployees.component";
import HomePageContactUsComponent from "../../components/homepageContactUsSection/HomePageContactUs.component";

const HomePageComponent = () => {
	return (
		<div>
			<HomePageMainSectionComponent />
			<HomePageTechStackComponent />
			<HomePageApproachComponent />
			<HomePageCasesComponent />
			<HomePageEmployeesComponent />
			<HomePageContactUsComponent />
		</div>
	)
};

export default HomePageComponent;