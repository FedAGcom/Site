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

import arrowLink from '../../assets/homepage/otherServices/arrow.svg';

const HomePageOtherServicesComponent = () => {
	const arrayToDisplay = useSelector(selectAllServices);
	return (
		<StyledHomePageOtherServicesSection>
			<StyledHomePageOtherServicesHeadline>
				Other services for IT developers
			</StyledHomePageOtherServicesHeadline>
			<StyledHomePageOtherServicesSpan className="desktop">
				In the very near future, we plan to have 4 of them:
			</StyledHomePageOtherServicesSpan>
			<StyledHomePageOtherServicesSpan className="mobile">
				Currently we have 4 of them:
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
								<StyledHomePageOtherServicesComingSoon status={data.status}/>
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