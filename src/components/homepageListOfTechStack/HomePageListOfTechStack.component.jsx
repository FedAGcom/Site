import React from 'react';
import {useSelector} from "react-redux";

import {selectTechCollection} from "../../redux/technology/technology.selectors";

import {
	StyledListOfTechStack,
	StyledTechnologyPreviewOfTechStack,
	StyledTechnologyIconOfTechStack,
	StyledTechnologyTitleOfTechStack
} from "./HomePageListOfTechStack.styles";

const HomePageListOfTechStackComponent = () => {
	const technologiesCollection = useSelector(selectTechCollection)
	return (
		<StyledListOfTechStack>
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