import React from 'react';
import {useTranslation} from "react-i18next";

import logo from '../../assets/homepage/footerLogo.svg';
import british from '../../assets/homepage/british.png';
import russian from '../../assets/homepage/russian.png';

import {
	StyledFooter,
	StyledFooterLine,
	StyledFooterMainPart,
	StyledListOfFooterSections,
	StyledElementOfFooterSection,
	StyledNavLinkOfFooter,
	StyledFooterTranslateButton
} from "./Footer.styles";

const Footer = () => {
	const {t, i18n} = useTranslation()
	const handleLanguage = () => {
		if (i18n.resolvedLanguage === 'en') {
			i18n.changeLanguage('ru')
		} else if (i18n.resolvedLanguage === 'ru') {
			i18n.changeLanguage('en')
		}
	}

	return (
		<StyledFooter>
			<StyledFooterMainPart>
				<StyledListOfFooterSections>
					<StyledElementOfFooterSection className="headline" headline="true">
						{t('main.footer.contactsList.headline')}
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a className="email-link" rel="noreferrer" href="mailto:ask.fedag@gmail.com?subject=The%20FedAG%20team" target="_blank">ask.fedag@gmail.com</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a className="phone-number" href="tel:+79113515055">
							+7 (911) 351-50-55
						</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledFooterTranslateButton onClick={handleLanguage}>
							<span>{t('main.footer.contactsList.language')}</span>
							<hr/>
							<img src={i18n.resolvedLanguage === "en" ? british : russian} alt="country"/>
						</StyledFooterTranslateButton>
					</StyledElementOfFooterSection>
				</StyledListOfFooterSections>


				<StyledListOfFooterSections>
					<StyledElementOfFooterSection className="headline" headline="true">
						{t('main.footer.generalList.headline')}
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/">
							{t('main.footer.generalList.home')}
						</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/contact-us">
							{t('main.footer.generalList.contact')}
						</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/career">
							{t('main.footer.generalList.career')}
						</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/cases">
							{t('main.footer.generalList.cases')}
						</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/terms-and-conditions">
							{t('main.footer.generalList.termsAndCondition')}
						</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
				</StyledListOfFooterSections>


				<StyledListOfFooterSections>
					<StyledElementOfFooterSection className="headline" headline="true">
						{t('main.footer.servicesList.headline')}
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a href="/">{t('main.footer.servicesList.recruitmentSystem')}</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a href="/">{t('main.footer.servicesList.internshipSystem')}</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a href="/">{t('main.footer.servicesList.crmRecruitment')}</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a href="/">{t('main.footer.servicesList.lab')}</a>
					</StyledElementOfFooterSection>
				</StyledListOfFooterSections>


				<StyledListOfFooterSections className="social-links">
					<StyledElementOfFooterSection className="headline" headline="true">
						{t('main.footer.socialLinksList.headline')}
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://www.instagram.com/fedag.web/" target="_blank">
							{t('main.footer.socialLinksList.instagram')}
						</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://t.me/fedagEdu" target="_blank">
							{t('main.footer.socialLinksList.telegram')}
						</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://vc.ru/s/1723824-fedag" target="_blank">
							{t('main.footer.socialLinksList.vc')}
						</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://www.behance.net/fedag" target="_blank">
							{t('main.footer.socialLinksList.behance')}
						</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://www.linkedin.com/company/fedag-edu/" target="_blank">
							{t('main.footer.socialLinksList.linkedIn')}
						</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection className="habr">
						<a rel="noreferrer" href="https://freelance.habr.com/freelancers/fedag" target="_blank">
							{t('main.footer.socialLinksList.habr')}
						</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://github.com/FedAGcom" target="_blank">
							{t('main.footer.socialLinksList.gitHub')}
						</a>
					</StyledElementOfFooterSection>
				</StyledListOfFooterSections>
			</StyledFooterMainPart>

			<StyledFooterLine />
			<StyledNavLinkOfFooter className="footer-logo" as="img" src={logo} alt='logo'/>
		</StyledFooter>
	);
}

export default Footer;