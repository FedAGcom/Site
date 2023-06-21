import React from 'react';
import {useTranslation} from "react-i18next";

import emailIcon from '../../assets/contactUsPage/emailPhone.svg';
import phoneIcon from '../../assets/contactUsPage/phoneIcon.svg';

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

import LinkButtonComponent from "../linkButton/LinkButton.component";

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
					<LinkButtonComponent path="https://t.me/fedagEdu" color="#B81034" bgcolor="white"/>

				</StyledContactUsPageMainSectionBlock>

				<StyledContactUsPageMainSectionBlock>
					<StyledContactUsPageMainSectionParagraph>
						{t('main.contactUsPage.mainSection.paragraph')}
						Email
					</StyledContactUsPageMainSectionParagraph>
					<LinkButtonComponent path="mailto:ask.fedag@gmail.com" color="#B81034" bgcolor="white"/>
				</StyledContactUsPageMainSectionBlock>

				<StyledContactUsPageMainSectionBlock>
					<StyledContactUsPageMainSectionParagraph>
						{t('main.contactUsPage.mainSection.paragraph')}
						Behance
					</StyledContactUsPageMainSectionParagraph>
					<LinkButtonComponent path="https://www.behance.net/fedag/" color="#B81034" bgcolor="white"/>
				</StyledContactUsPageMainSectionBlock>

				<StyledContactUsPageMainSectionBlock>
					<StyledContactUsPageMainSectionParagraph>
						{t('main.contactUsPage.mainSection.paragraph')}
						LinkedIn
					</StyledContactUsPageMainSectionParagraph>
					<LinkButtonComponent path="https://www.linkedin.com/company/fedag-edu/" color="#B81034" bgcolor="white"/>
				</StyledContactUsPageMainSectionBlock>
			</StyledContactUsPageMainSectionListOfBlocks>
		</StyledContactUsPageMainSection>
	);
};

export default ContactUsPageMainSectionComponent;