import React, {useState} from "react";
import {useSelector} from "react-redux";

import {
	selectGeneralEmployees,
	selectMainEmployees,
	selectScoreEmployees
} from "../../redux/employees/employees.selectors";

import {
	StyledContainerForEmployeesImage, StyledGeneralEmployeeBlock,
	StyledEmployeeNameOfInfoPart, StyledPositionOfGeneralEmployee,
	StyledEmployeesSection, StyledEmployeesSectionHeadline,
	StyledFrameOfGeneralEmployees, StyledImageOfGeneralEmployee,
	StyledImageOfMainEmployees, StyledInfoAboutEmployee,
	StyledLayoutForScoreOfEmployees, StyledNameOfMainEmployees,
	StyledPositionNameOfMainEmployees, StyledRectangleForEmployees,
	StyledScoreDefinition, StyledScoreOfEmployeesSection,
	StyledScorePercentage, StyledTitleOfMainEmployees,
	StyledContainerForMainEmployees, StyledDivForMainEmployee,
} from "./HomePageEmployees.styles";
import {useTranslation} from "react-i18next";

const HomePageEmployeesComponent = () => {
	const [active, setActive] = useState("");
	const [read, setRead] = useState(false);
	const widthOfWindow = window.innerWidth;

	const score = useSelector(selectScoreEmployees);
	const mainEmployees = useSelector(selectMainEmployees);
	const generalEmployees = useSelector(selectGeneralEmployees);

	const handleClick = (name) => {
		if (active === name) {
			setRead(!read);
		} else {
			setRead(true);
		}
		setActive(name);
	}
	const {t} = useTranslation();
	return (
		<StyledEmployeesSection>
			<StyledEmployeesSectionHeadline className="desktop">
				{t(`main.homepage.employeesSection.headlineDesktop`)}
			</StyledEmployeesSectionHeadline>
			<StyledEmployeesSectionHeadline className="mobile">
				{t(`main.homepage.employeesSection.headlineMobile`)}
			</StyledEmployeesSectionHeadline>

			<StyledScoreOfEmployeesSection>
				{
					score.map((data) => (
						<StyledLayoutForScoreOfEmployees key={data.key}>
							<StyledScorePercentage>{data.scorePercentage}</StyledScorePercentage>
							<StyledScoreDefinition>{t(`main.homepage.employeesSection.score.${data.scoreDefinition}`)}</StyledScoreDefinition>
						</StyledLayoutForScoreOfEmployees>
					))
				}
			</StyledScoreOfEmployeesSection>

			<StyledContainerForMainEmployees>
				{
					mainEmployees.map((main) => (
						<StyledDivForMainEmployee key={main.key}>
							<StyledRectangleForEmployees cto={(main.position === "CTO") ? "true" : ""} />
							<StyledImageOfMainEmployees src={main.imageSource} alt={main.name} cto={(main.position === "CTO") ? "true" : ""} />
							<StyledTitleOfMainEmployees cto={(main.position === "CTO") ? "true" : ""} >
								<StyledNameOfMainEmployees  cto={(main.position === "CTO") ? "true" : ""}>
									{t(`main.homepage.employeesSection.mainEmployees.${main.name}`)}
								</StyledNameOfMainEmployees>
								<StyledPositionNameOfMainEmployees>{main.position}</StyledPositionNameOfMainEmployees>
							</StyledTitleOfMainEmployees>
						</StyledDivForMainEmployee>
					))
				}
			</StyledContainerForMainEmployees>

			<StyledFrameOfGeneralEmployees id="frame-employees-container">
				{
					generalEmployees.map((general) => (
						<StyledGeneralEmployeeBlock key={general.key}>
							<StyledContainerForEmployeesImage
								onClick={() => handleClick(general.name)}
								className={((active === general.name) && (read === true)) ?
								"active container-for-image" : (widthOfWindow <= 800) ?
								"disable container-for-image" : "container-for-image"}>

								<StyledImageOfGeneralEmployee
									name={general.name}
									className={((active === general.name) && (read === true)) ?
									"active background-img-container" : "background-img-container"} />

							</StyledContainerForEmployeesImage>


							<StyledInfoAboutEmployee className={((active === general.name) && (read === true)) ?
								"active employee-info" : "employee-info"}>
								<StyledEmployeeNameOfInfoPart>{t(`main.homepage.employeesSection.generalEmployees.${general.name}.name`)}</StyledEmployeeNameOfInfoPart>
								<StyledPositionOfGeneralEmployee>{t(`main.homepage.employeesSection.generalEmployees.${general.name}.position`)}</StyledPositionOfGeneralEmployee>
							</StyledInfoAboutEmployee>
						</StyledGeneralEmployeeBlock>
					))
				}
			</StyledFrameOfGeneralEmployees>
		</StyledEmployeesSection>
	);
};

export default HomePageEmployeesComponent;