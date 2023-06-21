import React, {Suspense} from "react";
import {useTranslation} from "react-i18next";

import {StyledContactUsPage} from "./ContactUs.styles";

import ContactUsPageMainPartComponent from "../../components/contactUsPageMainPart/ContactUsPageMainPart.component";
import ContactUsPageBadgeComponent from "../../components/contactUsPageBadge/ContactUsPageBadge.component";
import ContactUsPageRequestSectionComponent from "../../components/contactUsPageRequestSection/ContactUsPageRequest.component";
import Spinner from "../../components/spinner/spinner.component";


const ContactUsComponent = () => {
	const {i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage;
	return (
		<Suspense fallback={<Spinner top="true" />}>
			<StyledContactUsPage russian={isRussian.toString()}>
				<ContactUsPageBadgeComponent />
				<ContactUsPageMainPartComponent />
				<ContactUsPageRequestSectionComponent />
			</StyledContactUsPage>
		</Suspense>
	)
};

export default ContactUsComponent;