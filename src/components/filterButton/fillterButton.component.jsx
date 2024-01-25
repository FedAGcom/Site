import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {switchCasesType} from "../../redux/cases/cases.action";
import {switchTechnologiesType} from "../../redux/technologies/technologies.actions";

import {
	StyledFilterButtonDiv,
	StyledFilterButtonSpan,
	StyledFilterButton
} from "./filterButton.styles";

import {
	selectBackendTechnologies,
	selectDevOpsTechnologies,
	selectFrontendTechnologies,
	selectPopularTechnologies,
	selectTechnologiesButtons
} from "../../redux/technologies/technologies.selectors";

import {
	selectCasesButton,
	selectAllCases,
	selectCorporateWebsiteCases,
	selectGamingCases,
	selectHealthAndCareCases,
	selectMarketplaceCases,
	selectEnterpriseCases
} from "../../redux/cases/cases.selectors";


const FilterButtonComponent = ({ collection, top, routepage }) => {
	const popularTechnologies = useSelector(selectPopularTechnologies);
	const frontendTechnologies = useSelector(selectFrontendTechnologies);
	const backendTechnologies = useSelector(selectBackendTechnologies);
	const devOpsTechnologies = useSelector(selectDevOpsTechnologies);

	const allCases = useSelector(selectAllCases);
	const corporateWebsiteCases = useSelector(selectCorporateWebsiteCases);
	const gamingCases = useSelector(selectGamingCases);
	const healthAndCareCases = useSelector(selectHealthAndCareCases);
	const marketplaceCases = useSelector(selectMarketplaceCases);
	const enterpriseCases = useSelector(selectEnterpriseCases);

	let buttonCollection;
	const techButtons = useSelector(selectTechnologiesButtons);
	const casesButtons = useSelector(selectCasesButton);

	if (collection === "technologies") {
		buttonCollection = techButtons;
	} else if (collection === "cases") {
		buttonCollection = casesButtons
	}

	const [active, setActive] = useState((collection === "technologies") ? "Popular" : "All");
	const dispatch = useDispatch();

	const handleEvent = (collection, btnName) => {
		if ((btnName === "Frontend") || (btnName === "Popular")
			|| (btnName === "Backend") || (btnName === "DevOps")) {
			dispatch(switchTechnologiesType(collection))
		} else {
			dispatch(switchCasesType(collection))
		}
		setActive(btnName);
	}
	const {t} = useTranslation()
	return (
		<StyledFilterButtonDiv top={top} routepage={routepage} collection={collection}>

			{
				buttonCollection.map((data) => {
					let dataCollection;
					switch (data.name) {
						case "Frontend":
							dataCollection = frontendTechnologies
							break
						case "Backend":
							dataCollection = backendTechnologies
							break
						case "DevOps":
							dataCollection = devOpsTechnologies
							break
						case "Popular":
							dataCollection = popularTechnologies
							break

						case "All":
							dataCollection = allCases
							break
						case "Corporate website":
							dataCollection = corporateWebsiteCases
							break
						case "Health and care":
							dataCollection = healthAndCareCases
							break
						case "Gaming":
							dataCollection = gamingCases
							break
						case "Marketplace":
							dataCollection = marketplaceCases
							break
						case "Enterprise":
							dataCollection = enterpriseCases
							break

						default:
							break
					}
					return (
						<StyledFilterButton key={data.key} btnwidth={data.btnWidth}
              className={(active === data.name) ? "active" : ""}
              onClick={() => {handleEvent(dataCollection, data.name)}} >
							<StyledFilterButtonSpan spanwidth={data.spanWidth}>
								{
									collection === "technologies"
									? t(`main.homepage.technologiesSection.filterBtn.${data.name}`)
									: t(`main.homepage.casesSection.filterBtn.${data.name}`)
								}
							</StyledFilterButtonSpan>
						</StyledFilterButton>
					);
				})
			}
		</StyledFilterButtonDiv>
	);
};

export default FilterButtonComponent;