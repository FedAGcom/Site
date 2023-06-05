import React from 'react';
import {useSelector} from "react-redux";

import {selectTechCollection} from "../../redux/technologies/technologies.selectors";

import {
	StyledListOfTechStack,
	StyledTechnologyPreviewOfTechStack,
	StyledTechnologyIconOfTechStack,
	StyledTechnologyTitleOfTechStack
} from "./HomePageListOfTechStack.styles";
import {useTranslation} from "react-i18next";

const HomePageListOfTechStackComponent = () => {
	const technologiesCollection = useSelector(selectTechCollection)
	const { i18n } = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"
	return (
		<StyledListOfTechStack russian={isRussian.toString()}>
			{
				technologiesCollection.map((data) => {
					return (
						<StyledTechnologyPreviewOfTechStack key={data.key}>
							<StyledTechnologyIconOfTechStack
								src={data.imgSource}
								alt={data.name}/>
							<StyledTechnologyTitleOfTechStack>
								{data.name}
							</StyledTechnologyTitleOfTechStack>
						</StyledTechnologyPreviewOfTechStack>
					)
				})
			}
		</StyledListOfTechStack>
	);
};

export default HomePageListOfTechStackComponent;