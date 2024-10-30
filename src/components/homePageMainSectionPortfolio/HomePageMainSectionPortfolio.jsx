import React from 'react';

import CustomButton from "../customButton/CustomButton.component";

import {
    StyledMainSectionPortfolioHeadline,
    StyledMainSectionPortfolio,
    StyledMainSectionPortfolioWrapper,
    StyledPortfolioArrowWrapper,
    StyledMainSectionPortfolioSubHeadline,
    StyledPortfolioImgWrapper,
    StyledPortfolioBtnWrapperDesktop,
    StyledPortfolioBtnWrapperMobile,
    StyledPortfolioEmptyEl
} from "./HomePageMainSectionPortfolio.styles";
import {useTranslation} from "react-i18next";

import phones from '../../assets/homepage/homePageSmartphones.png'
import mailIcon from '../../assets/homepage/homePageMailIcon.svg'
import mailIconRed from '../../assets/homepage/homePageMailIconRed.svg'
import {ReactComponent as Arrow} from '../../assets/homepage/homePageArrow.svg';

const HomePageMainSectionPortfolio = () => {
	const {t, i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
        <>
            <StyledMainSectionPortfolio russian={isRussian.toString()}>
                <StyledMainSectionPortfolioWrapper>
                    <StyledMainSectionPortfolioHeadline>
                        {t('main.homepage.mainSection.portfolio')}
                    </StyledMainSectionPortfolioHeadline>
                    <StyledPortfolioArrowWrapper>
                        <Arrow/>
                    </StyledPortfolioArrowWrapper>
                </StyledMainSectionPortfolioWrapper>

                <StyledMainSectionPortfolioSubHeadline>
                    {t('main.homepage.mainSection.portfolio')}
                </StyledMainSectionPortfolioSubHeadline>

                <StyledPortfolioImgWrapper>
                    <img src={phones} alt="#" />
                </StyledPortfolioImgWrapper>

                <StyledPortfolioEmptyEl/>

                <StyledPortfolioBtnWrapperDesktop>
                    <CustomButton 
                        className="button-of-main-section" 
                        width={'300px'} 
                        height={'84px'}
                        backgroundColor={'#333333'} 
                        borderRadius={'50px'} 
                        scrollTo="application-section"
                        icon={mailIconRed}>
                        {t('main.homepage.mainSection.application')}
                    </CustomButton>
                </StyledPortfolioBtnWrapperDesktop>

            </StyledMainSectionPortfolio>

            <StyledPortfolioBtnWrapperMobile>
                <CustomButton 
                    className="button-of-main-section" 
                    width={'300px'} 
                    height={'84px'}
                    backgroundColor={'#FFFFFF'} 
                    color={'#B81034'}
                    borderRadius={'50px'} 
                    scrollTo="application-section"
                    icon={mailIconRed}>
                    {t('main.homepage.mainSection.application')}
                </CustomButton>
            </StyledPortfolioBtnWrapperMobile>
        </>
	);
};

export default HomePageMainSectionPortfolio;