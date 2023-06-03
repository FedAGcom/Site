import React from 'react';

import logo from '../../assets/homepage/footerLogo.svg';
// import british from '../../assets/homepage/british.png';
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
	return (
		<StyledFooter>
			<StyledFooterMainPart>
				<StyledListOfFooterSections>
					<StyledElementOfFooterSection className="headline" headline="true">
						Contact us
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
						<StyledFooterTranslateButton>
							<span>English</span>
							<hr/>
							<img src={russian} alt="country"/>
						</StyledFooterTranslateButton>
					</StyledElementOfFooterSection>
				</StyledListOfFooterSections>


				<StyledListOfFooterSections>
					<StyledElementOfFooterSection className="headline" headline="true">
						General
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/">Home</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/contact-us">Contact Us</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/career">Career</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/cases">Cases</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<StyledNavLinkOfFooter to="/terms-and-conditions">Terms and Conditions</StyledNavLinkOfFooter>
					</StyledElementOfFooterSection>
				</StyledListOfFooterSections>


				<StyledListOfFooterSections>
					<StyledElementOfFooterSection className="headline" headline="true">
						Services
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a href="/">Recruitment System</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a href="/">Internship System</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a href="/">CRM Recruitment</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a href="/">LAB</a>
					</StyledElementOfFooterSection>
				</StyledListOfFooterSections>


				<StyledListOfFooterSections className="social-links">
					<StyledElementOfFooterSection className="headline" headline="true">
						Socials
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://www.instagram.com/fedag.web/" target="_blank">Instagram</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://t.me/fedagEdu" target="_blank">Telegram</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="/" target="_blank">WhatsApp</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="/" target="_blank">Viber</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="https://www.linkedin.com/company/fedag-edu/" target="_blank">LinkedIn</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection className="habr">
						<a rel="noreferrer" href="/" target="_blank">Habr</a>
					</StyledElementOfFooterSection>
					<StyledElementOfFooterSection>
						<a rel="noreferrer" href="/" target="_blank">GitHub</a>
					</StyledElementOfFooterSection>
				</StyledListOfFooterSections>
			</StyledFooterMainPart>

			<StyledFooterLine />
			<StyledNavLinkOfFooter className="footer-logo" as="img" src={logo} alt='logo'/>
		</StyledFooter>
	);
}

export default Footer;