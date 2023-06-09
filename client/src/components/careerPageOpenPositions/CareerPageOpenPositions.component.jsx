import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

import arrowBtn from '../../assets/button_arrow1.svg';
import logoType from '../../assets/career/logo.png'
import {selectOpenPositions} from "../../redux/employees/employees.selectors";

import {
	StyledCareerPageOpenPositionsSection,
	StyledCareerPageOpenPositionsHeadline,
	StyledCareerPageOpenPositionsBlock,
	StyledCareerPageOpenPositionsLastBlock,
	StyledCareerPageOpenPositionsEmail
} from './CareerPageOpenPositions.styles'
import {StyledApplicationRequestInput} from "../applicationLeaveRequest/ApplicationLeaveRequest.styles";
import axios from "axios";
import Spinner from "../spinner/spinner.component";
import CustomButtonComponent from "../customButton/CustomButton.component";

const CareerPageOpenPositionsComponent = () => {
	const INITIAL_STATE = {"email": ""}
	const {t} = useTranslation();
	let openPositions = useSelector(selectOpenPositions);

	const [isLoading, setIsLoading] = useState(false);
	const [credentials, setCredentials] = useState(INITIAL_STATE);

	const handleInputChange = (e) => {
		setCredentials( {...credentials, [e.target.name]: e.target.value})
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			(credentials.email !== "")
		) {
			setIsLoading(true)
			axios.post("/career", {
				email: credentials.email,
			})
				.then(() => setTimeout(() => {
					setCredentials(INITIAL_STATE)
					setIsLoading(false)
				}, 1000))
				.catch(() => alert("An error has occurred"));
		}

	}

	return (
		<StyledCareerPageOpenPositionsSection id="open-career-positions">
			<StyledCareerPageOpenPositionsHeadline>
				{t('main.careerPage.positionsSection.headline')}
			</StyledCareerPageOpenPositionsHeadline>
			<div className="all-positions">
				{
					openPositions.map((position) => {
						return (
							<StyledCareerPageOpenPositionsBlock key={position.key} className={position.index % 2 === 0 ? "small-position-block" : "big-position-block"}>
								<div>
									<div className="headline-position-block" dangerouslySetInnerHTML={{ __html: position.title }} />
									<div className="paragraph-position-block">
										{t(`main.careerPage.positionsSection.positions.${position.key}.experience`)}
									</div>
									<div className="paragraph-position-block">
										{t(`main.careerPage.positionsSection.positions.${position.key}.paragraphFirst`)}
									</div>
									<div className="paragraph-position-block">
										{t(`main.careerPage.positionsSection.positions.${position.key}.paragraphSecond`)}
									</div>
								</div>
								<img onClick={() => {}} src={arrowBtn} alt="arrow-btn" className="career-btn-image"/>
							</StyledCareerPageOpenPositionsBlock>
						)
					})
				}
				<StyledCareerPageOpenPositionsLastBlock>
					<p className="title">
						{t('main.careerPage.positionsSection.positions.lastPosition.headline')}
					</p>
					<p className="paragraph" dangerouslySetInnerHTML={{ __html: t('main.careerPage.positionsSection.positions.lastPosition.paragraph') }} />
				</StyledCareerPageOpenPositionsLastBlock>
			</div>
			<StyledCareerPageOpenPositionsEmail onSubmit={handleSubmit}>
				<div className="leave-email-section-of-career-page">
					<h2 className="leave-email-section-headline">
						{t('main.careerPage.positionsSection.email.title')}
					</h2>
					<StyledApplicationRequestInput placeholder="Email" height="52px" onChange={handleInputChange} type="email" value={credentials.email} name="email" required={true}/>
					<CustomButtonComponent submit="true" type="submit" top="0" left="0">
						{t('main.careerPage.positionsSection.email.btnText')}
					</CustomButtonComponent>
				</div>
				{
					isLoading
						? <Spinner height="135px" width="133px" />
						: <img className="logo-in-email-request" src={logoType} alt="logo"/>
				}
			</StyledCareerPageOpenPositionsEmail>
		</StyledCareerPageOpenPositionsSection>
	);
};

export default CareerPageOpenPositionsComponent