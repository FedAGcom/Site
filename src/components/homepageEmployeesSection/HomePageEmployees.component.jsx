import React, {useState} from "react";
import {useSelector} from "react-redux";

import {
	selectGeneralEmployees,
	selectMainEmployees,
	selectScoreEmployees
} from "../../redux/employees/employees.selectors";

import {
	StyledContainerForEmployeesImage,
	StyledEmployeeNameOfInfoPart,
	StyledPositionOfGeneralEmployee,
	StyledEmployeesSection,
	StyledEmployeesSectionHeadline,
	StyledFrameOfGeneralEmployees,
	StyledImageOfGeneralEmployee,
	StyledImageOfMainEmployees,
	StyledInfoAboutEmployee,
	StyledLayoutForScoreOfEmployees,
	StyledNameOfMainEmployees,
	StyledPositionNameOfMainEmployees,
	StyledRectangleForEmployees,
	StyledScoreDefinition,
	StyledScoreOfEmployeesSection,
	StyledScorePercentage,
	StyledTitleOfMainEmployees
} from "./HomePageEmployees.styles";

const HomePageEmployeesComponent = () => {
	const [active, setActive] = useState("");

	const score = useSelector(selectScoreEmployees);
	const mainEmployees = useSelector(selectMainEmployees);
	const generalEmployees = useSelector(selectGeneralEmployees);

	console.log(score)
	return (
		<StyledEmployeesSection>
			<StyledEmployeesSectionHeadline className="desktop">
				Who are working for you
			</StyledEmployeesSectionHeadline>

			<StyledEmployeesSectionHeadline className="mobile">
				About us
			</StyledEmployeesSectionHeadline>

			<StyledScoreOfEmployeesSection>
				{
					score.map((data) => (
						<StyledLayoutForScoreOfEmployees key={data.key}>
							<StyledScorePercentage>{data.scorePercentage}</StyledScorePercentage>
							<StyledScoreDefinition>{data.scoreDefinition}</StyledScoreDefinition>
						</StyledLayoutForScoreOfEmployees>
					))
				}
			</StyledScoreOfEmployeesSection>

			{
				mainEmployees.map((main) => (
					<div key={main.key}>
						<StyledRectangleForEmployees cto={(main.position === "CTO") ? "true" : ""} />
						<StyledImageOfMainEmployees src={main.imageSource[0]} alt={main.name} cto={(main.position === "CTO") ? "true" : ""} />
						<StyledTitleOfMainEmployees cto={(main.position === "CTO") ? "true" : ""} >
							<StyledNameOfMainEmployees  cto={(main.position === "CTO") ? "true" : ""}>
								{main.name}
							</StyledNameOfMainEmployees>
							<StyledPositionNameOfMainEmployees>{main.position}</StyledPositionNameOfMainEmployees>
						</StyledTitleOfMainEmployees>
					</div>
				))
			}

			<StyledFrameOfGeneralEmployees>
				{
					generalEmployees.map((general) => (
						<StyledContainerForEmployeesImage
							key={general.key} className={(active === general.name) ? "active" : ""}
							onClick={() => setActive(general.name)}>

							<StyledImageOfGeneralEmployee
								src={active ? general.imageSource[1] : general.imageSource[0]}
								className={(active === general.name) ? "active" : ""} alt={general.name}/>

							<StyledInfoAboutEmployee className="employee-info">
								<StyledEmployeeNameOfInfoPart>{general.name}</StyledEmployeeNameOfInfoPart>
								<StyledPositionOfGeneralEmployee>{general.position}</StyledPositionOfGeneralEmployee>
							</StyledInfoAboutEmployee>

						</StyledContainerForEmployeesImage>
					))
				}
			</StyledFrameOfGeneralEmployees>

		</StyledEmployeesSection>
	);
};

export default HomePageEmployeesComponent;