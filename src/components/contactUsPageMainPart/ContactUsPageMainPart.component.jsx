import React from 'react';
import {useTranslation} from "react-i18next";

import emailIcon from '../../assets/contactUsPage/emailPhone.svg';
import phoneIcon from '../../assets/contactUsPage/phoneIcon.svg';
import arrowBtn from '../../assets/button_arrow1.svg';

import {
	StyledContactUsPageMainSection,
	StyledContactUsPageMainSectionHeadline,
	StyledContactUsPageMainSectionLinkTitle,
	StyledContactUsPageMainSectionLinks,
	StyledContactUsPageMainSectionLink,
	StyledContactUsPageMainSectionListOfBlocks,
	StyledContactUsPageMainSectionBlock,
	StyledContactUsPageMainSectionParagraph
} from "./ContactUsPageMainPart.styles";

const ContactUsPageMainSectionComponent = () => {
	const {t} = useTranslation()
	return (
		<StyledContactUsPageMainSection>
			<StyledContactUsPageMainSectionHeadline>{t('main.contactUsPage.mainSection.firstHeadline')}</StyledContactUsPageMainSectionHeadline>
			<StyledContactUsPageMainSectionLinks>
				<div>
					<StyledContactUsPageMainSectionLinkTitle>
						{t('main.contactUsPage.mainSection.phone')}
					</StyledContactUsPageMainSectionLinkTitle>
					<StyledContactUsPageMainSectionLink href="tel:+79113515055">
						<img src={phoneIcon} alt="phone"/>
						+7 (911) 351-50-55
					</StyledContactUsPageMainSectionLink>
				</div>
				<div>
					<StyledContactUsPageMainSectionLinkTitle>
						Email:
					</StyledContactUsPageMainSectionLinkTitle>
					<StyledContactUsPageMainSectionLink href="mailto:ask.fedag@gmail.com">
						<img src={emailIcon} alt="email"/>
						ask.fedag@gmail.com
					</StyledContactUsPageMainSectionLink>
				</div>
			</StyledContactUsPageMainSectionLinks>


			<StyledContactUsPageMainSectionHeadline>{t('main.contactUsPage.mainSection.secondHeadline')}</StyledContactUsPageMainSectionHeadline>
			<StyledContactUsPageMainSectionListOfBlocks>
				<StyledContactUsPageMainSectionBlock>
					<StyledContactUsPageMainSectionParagraph>
						{t('main.contactUsPage.mainSection.paragraph')}
						Telegram
					</StyledContactUsPageMainSectionParagraph>
					<a href="https://t.me/fedagEdu" target="_blank" rel="noreferrer">
						<img src={arrowBtn} alt="arrow" />
					</a>
				</StyledContactUsPageMainSectionBlock>

				<StyledContactUsPageMainSectionBlock>
					<StyledContactUsPageMainSectionParagraph>
						{t('main.contactUsPage.mainSection.paragraph')}
						Email
					</StyledContactUsPageMainSectionParagraph>
					<a href="mailto:ask.fedag@gmail.com" target="_blank" rel="noreferrer">
						<img src={arrowBtn} alt="arrow"/>
					</a>
				</StyledContactUsPageMainSectionBlock>

				<StyledContactUsPageMainSectionBlock>
					<StyledContactUsPageMainSectionParagraph>
						{t('main.contactUsPage.mainSection.paragraph')}
						Behance
					</StyledContactUsPageMainSectionParagraph>
					<a href="https://www.behance.net/fedag/" target="_blank" rel="noreferrer">
						<img src={arrowBtn} alt="arrow"/>
					</a>
				</StyledContactUsPageMainSectionBlock>

				<StyledContactUsPageMainSectionBlock>
					<StyledContactUsPageMainSectionParagraph>
						{t('main.contactUsPage.mainSection.paragraph')}
						LinkedIn
					</StyledContactUsPageMainSectionParagraph>
					<a href="https://www.linkedin.com/company/fedag-edu/" target="_blank" rel="noreferrer">
						<img src={arrowBtn} alt="arrow"/>
					</a>
				</StyledContactUsPageMainSectionBlock>
			</StyledContactUsPageMainSectionListOfBlocks>
		</StyledContactUsPageMainSection>
	);
};

export default ContactUsPageMainSectionComponent;