import React from 'react';
import {useSelector} from "react-redux";

import {
	StyledHomePageOtherServicesSection,
	StyledHomePageOtherServicesHeadline,
	StyledHomePageOtherServicesSpan,
	StyledHomePageOtherServicesList,
	StyledHomePageOtherServicesItem,
	StyledHomePageOtherServicesInfo,
	StyledHomePageOtherServicesText,
	StyledHomePageOtherServicesLink,
	StyledHomePageOtherServicesHeading,
	StyledHomePageOtherServicesLetter,
	StyledHomePageOtherServicesComingSoon
} from './HomePageOtherServices.styles'

import {selectAllServices} from "../../redux/services/services.selectors";

import arrowLink from '../../assets/arrow_to_right.svg';
import {useTranslation} from "react-i18next";

const HomePageOtherServicesComponent = () => {
	const {t} = useTranslation()
	const arrayToDisplay = useSelector(selectAllServices);
	return (
		<StyledHomePageOtherServicesSection id="services-section">
			<StyledHomePageOtherServicesHeadline>
				{t('main.homepage.otherServicesSection.headline')}
			</StyledHomePageOtherServicesHeadline>
			<StyledHomePageOtherServicesSpan className="desktop">
				{t('main.homepage.otherServicesSection.paragraphDesktop')}

			</StyledHomePageOtherServicesSpan>
			<StyledHomePageOtherServicesSpan className="mobile">
				{t('main.homepage.otherServicesSection.paragraphMobile')}
			</StyledHomePageOtherServicesSpan>

			<StyledHomePageOtherServicesList>
				{
					arrayToDisplay.map((data) => {
						return (
							<StyledHomePageOtherServicesItem key={data.key} status={data.status}>
								<StyledHomePageOtherServicesText status={data.status}>
									<StyledHomePageOtherServicesHeading>{data.name}</StyledHomePageOtherServicesHeading>
									{<StyledHomePageOtherServicesInfo dangerouslySetInnerHTML={{__html: data.text}} />}
									<StyledHomePageOtherServicesLink href={data.link} target="_blank">
										{data.linkText}
										<img src={arrowLink} alt="arrow"/>
									</StyledHomePageOtherServicesLink>
								</StyledHomePageOtherServicesText>
								<StyledHomePageOtherServicesComingSoon status={data.status}><p>COMING SOON</p></StyledHomePageOtherServicesComingSoon>
								<StyledHomePageOtherServicesLetter status={data.status} src={data.imageSource} alt="letters"/>
							</StyledHomePageOtherServicesItem>
						)
					})
				}
			</StyledHomePageOtherServicesList>
		</StyledHomePageOtherServicesSection>
	);
};

export default HomePageOtherServicesComponent;