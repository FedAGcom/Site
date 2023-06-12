import React from "react";
import {useTranslation} from "react-i18next";

import {StyledContactUsPage} from "./ContactUs.styles";

import ContactUsPageMainPartComponent from "../../components/contactUsPageMainPart/ContactUsPageMainPart.component";
import ContactUsPageBadgeComponent from "../../components/contactUsPageBadge/ContactUsPageBadge.component";
import ContactUsPageRequestSectionComponent from "../../components/contactUsPageRequestSection/ContactUsPageRequest.component";


const ContactUsComponent = () => {
	const {i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage;
	return (
		<StyledContactUsPage russian={isRussian.toString()}>
			<ContactUsPageBadgeComponent />
			<ContactUsPageMainPartComponent />
			<ContactUsPageRequestSectionComponent />
		</StyledContactUsPage>
	)
};

export default ContactUsComponent;