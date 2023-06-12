import React from 'react';
import {useTranslation} from "react-i18next";

import {
	StyledContactUsPageBadgeSection,
	StyledContactUsPageBadgeSectionHeadline
} from './ContactUsPageBadge.styles'

const ContactUsPageBadgeComponent = () => {
	const {t} = useTranslation()

	return (
		<StyledContactUsPageBadgeSection>
			<StyledContactUsPageBadgeSectionHeadline>
				{t('main.contactUsPage.headline')}
			</StyledContactUsPageBadgeSectionHeadline>
		</StyledContactUsPageBadgeSection>
	);
};

export default ContactUsPageBadgeComponent;