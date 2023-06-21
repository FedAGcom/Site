import React, {Suspense} from "react";
import {useTranslation} from "react-i18next";
import Spinner from "../../components/spinner/spinner.component";

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
	const {i18n} = useTranslation();
	const isRussian = i18n.resolvedLanguage === "ru";
	return (
		<Suspense fallback={<Spinner top="true" />}>
			<StyledHomePage id="homepage" russian={isRussian.toString()}>
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
		</Suspense>
	)
};

export default HomePageComponent;