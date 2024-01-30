import React from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/footerLogo.svg";
import british from "../../assets/homepage/british.png";
import russian from "../../assets/homepage/russian.png";

import {
  StyledFooter,
  StyledFooterLine,
  StyledFooterMainPart,
  StyledListOfFooterSections,
  StyledElementOfFooterSection,
  StyledNavLinkOfFooter,
  StyledFooterTranslateButton,
} from "./Footer.styles";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const scrollToHeader = () => {
    setTimeout(() => {
      const section = document.querySelector(`#header`);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 10);
  };
  const handleLanguage = () => {
    if (i18n.resolvedLanguage === "en") {
      i18n.changeLanguage("ru");
    } else if (i18n.resolvedLanguage === "ru") {
      i18n.changeLanguage("en");
    }
  };

  return (
    <StyledFooter>
      <StyledFooterMainPart>
        <StyledListOfFooterSections>
          <StyledElementOfFooterSection className="headline" headline="true">
            {t("main.footer.contactsList.headline")}
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <a
              className="email-link"
              rel="noreferrer"
              href="mailto:fedagedu@gmail.com?subject=The%20FedAG%20team"
              target="_blank"
            >
              fedagedu@gmail.com
            </a>
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <a className="phone-number" href="tel:+79113515055">
              +7 (911) 351-50-55
            </a>
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <div>{t("main.footer.contactsList.company")}&nbsp; {t("main.footer.contactsList.taxPayer")}&nbsp;7802924391&nbsp; {t("main.footer.contactsList.stateRegistr")}&nbsp;1227800049762</div>
          </StyledElementOfFooterSection>
        </StyledListOfFooterSections>

        <StyledListOfFooterSections>
          <StyledElementOfFooterSection className="headline" headline="true">
            {t("main.footer.generalList.headline")}
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <StyledNavLinkOfFooter to="/" onClick={scrollToHeader}>
              {t("main.footer.generalList.home")}
            </StyledNavLinkOfFooter>
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <StyledNavLinkOfFooter to="/contact-us" onClick={scrollToHeader}>
              {t("main.footer.generalList.contact")}
            </StyledNavLinkOfFooter>
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <StyledNavLinkOfFooter to="/career" onClick={scrollToHeader}>
              {t("main.footer.generalList.career")}
            </StyledNavLinkOfFooter>
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <StyledNavLinkOfFooter to="/cases" onClick={scrollToHeader}>
              {t("main.footer.generalList.cases")}
            </StyledNavLinkOfFooter>
          </StyledElementOfFooterSection>
        </StyledListOfFooterSections>

        <StyledListOfFooterSections className="social-links">
          <StyledElementOfFooterSection className="headline" headline="true">
            {t("main.footer.socialLinksList.headline")}
          </StyledElementOfFooterSection>

          <StyledElementOfFooterSection>
            <a rel="noreferrer" href="https://t.me/fedagEdu" target="_blank">
              {t("main.footer.socialLinksList.telegram")}
            </a>
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <a
              rel="noreferrer"
              href="https://vc.ru/s/1723824-fedag"
              target="_blank"
            >
              {t("main.footer.socialLinksList.vc")}
            </a>
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <a
              rel="noreferrer"
              href="https://www.behance.net/fedag"
              target="_blank"
            >
              {t("main.footer.socialLinksList.behance")}
            </a>
          </StyledElementOfFooterSection>

          <StyledElementOfFooterSection>
            <a
              rel="noreferrer"
              href="https://freelance.habr.com/freelancers/fedag"
              target="_blank"
            >
              {t("main.footer.socialLinksList.habr")}
            </a>
          </StyledElementOfFooterSection>
          <StyledElementOfFooterSection>
            <a
              rel="noreferrer"
              href="https://github.com/FedAGcom"
              target="_blank"
            >
              {t("main.footer.socialLinksList.gitHub")}
            </a>
          </StyledElementOfFooterSection>
        </StyledListOfFooterSections>
        <StyledListOfFooterSections>
          <StyledElementOfFooterSection>
            <StyledFooterTranslateButton onClick={handleLanguage}>
              <span>{t("main.footer.contactsList.language")}</span>
              <hr />
              <img
                src={i18n.resolvedLanguage === "en" ? british : russian}
                alt="country"
              />
            </StyledFooterTranslateButton>
          </StyledElementOfFooterSection>
        </StyledListOfFooterSections>
      </StyledFooterMainPart>

      <StyledFooterLine />
      <StyledNavLinkOfFooter
        className="footer-logo"
        as="img"
        src={logo}
        alt="logo"
      />
    </StyledFooter>
  );
};

export default Footer;
