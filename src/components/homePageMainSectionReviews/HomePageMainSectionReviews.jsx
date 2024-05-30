import React from 'react';

import {
    StyledMainSectionReviews,
    StyledLogoForReviews
} from "./HomePageMainSectionReviews.styles";
import {useTranslation} from "react-i18next";

import {ReactComponent as Contacts} from '../../assets/homepage/homePageContacts.svg';
import {ReactComponent as Reviews} from '../../assets/homepage/homePageReviews.svg';

const HomePageMainSectionReviews = () => {
	const {t, i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
		<StyledMainSectionReviews russian={isRussian.toString()}>
            <StyledLogoForReviews><Reviews/></StyledLogoForReviews>
            <StyledLogoForReviews><Contacts/></StyledLogoForReviews>
		</StyledMainSectionReviews>
	);
};

export default HomePageMainSectionReviews;