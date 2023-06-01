import React from "react";

import HomePageMainSectionComponent from "../../components/homepageMainSection/HomePageMainSection.component";
import HomePageTechStackComponent from "../../components/homepageTechStackSection/HomePageTechStack.component";
import HomePageApproachComponent from "../../components/homepageApproachSection/HomePageApproach.component";
import HomePageCasesComponent from "../../components/homepageCasesSection/HomePageCases.component";
import HomePageEmployeesComponent from "../../components/homepageEmployeesSection/HomePageEmployees.component";
import HomePageContactUsComponent from "../../components/homepageContactUsSection/HomePageContactUs.component";
import HomePageSliderSectionComponent from "../../components/homepageSliderSection/HomePageSliderSection.component";
import ApplicationLeaveRequestComponent from "../../components/applicationLeaveRequest/ApplicationLeaveRequest.component";
import HomePageOtherServicesComponent from "../../components/homepageOtherServices/HomePageOtherServices.component";

import {StyledHomePage} from "./HomePage.styles";

const HomePageComponent = () => {
	return (
		<StyledHomePage>
			<HomePageMainSectionComponent />
			<HomePageTechStackComponent />
			<HomePageApproachComponent />
			<HomePageCasesComponent />
			<HomePageEmployeesComponent />
			<HomePageContactUsComponent />
			<HomePageSliderSectionComponent />
			<ApplicationLeaveRequestComponent />
			<HomePageOtherServicesComponent />
		</StyledHomePage>
	)
};

export default HomePageComponent;