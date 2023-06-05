import React from 'react';

import {
	StyledContactUsButtonOfHomePage,
	StyledContactUsElementOfHomePage, StyledContactUsHeadlineOfHomePage, StyledContactUsIconOfHomePage,
	StyledContactUsOfHomePage, StyledContactUsParagraphOfHomePage
} from "./HomePageContactUs.styles";
import CallToComponent from "../callTo/CallTo.component";
import {useTranslation} from "react-i18next";

const HomePageContactUsComponent = () => {
	const scroll = () => {
		const section = document.querySelector( '#application-section' );
		section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
	};
	const {t} = useTranslation()
	return (
		<StyledContactUsOfHomePage>

			<StyledContactUsElementOfHomePage small="true" >
				<StyledContactUsIconOfHomePage phone="true" />
				<StyledContactUsHeadlineOfHomePage small="true">{t(`main.homepage.contactUsSection.phoneInfo.headline`)}</StyledContactUsHeadlineOfHomePage>
				<StyledContactUsParagraphOfHomePage small="true">
					{t(`main.homepage.contactUsSection.phoneInfo.paragraph`)}
				</StyledContactUsParagraphOfHomePage>
				<CallToComponent phone="+79112507289">
					<StyledContactUsButtonOfHomePage  phone="true">
					+7 (911) 250-72-89
					</StyledContactUsButtonOfHomePage>
				</CallToComponent>
			</StyledContactUsElementOfHomePage>


			<StyledContactUsElementOfHomePage>
				<StyledContactUsIconOfHomePage />

				<StyledContactUsHeadlineOfHomePage>{t(`main.homepage.contactUsSection.emailInfo.headline`)}</StyledContactUsHeadlineOfHomePage>

				<StyledContactUsParagraphOfHomePage>
					{t(`main.homepage.contactUsSection.emailInfo.paragraph`)}
				</StyledContactUsParagraphOfHomePage>

				<StyledContactUsButtonOfHomePage onClick={scroll}>
					<span>{t(`main.homepage.contactUsSection.emailInfo.btn`)}</span>
				</StyledContactUsButtonOfHomePage>
			</StyledContactUsElementOfHomePage>
		</StyledContactUsOfHomePage>
	);
};

export default HomePageContactUsComponent;