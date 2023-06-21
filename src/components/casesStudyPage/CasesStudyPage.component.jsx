import React, {Suspense} from "react";
import {useNavigate, useParams} from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";

import overviewImage from "../../assets/cases/personal-account/overview.png";
import previewImage from "../../assets/cases/personal-account/preview.png";
import arrowToLeft from "../../assets/arrow_to_left.svg";
import liArrow from "../../assets/cases/li-vector.svg";
import firstImage from "../../assets/cases/personal-account/first-functionality.png";
import secondImage from "../../assets/cases/personal-account/second-functionality.png";
import firstSmallImage from "../../assets/cases/personal-account/first-small-functionality.png";
import secondSmallImage from "../../assets/cases/personal-account/second-small-functionality.png";
import customerImage from "../../assets/cases/personal-account/customer.png";


import {
	StyledCasesStudyPage,
	StyledCasesStudyPageMain,
	StyledCasesStudyMainPreviewSection,
	StyledCasesStudyClientSection,
	StyledCasesStudyProjectSummarySection,
	StyledCasesStudyTaskImplementationSection,
	StyledCasesStudyFunctionality,
	StyledCasesStudyProjectResults, StyledCasesStudyCustomerFeedback
} from "./CasesStudyPage.styled";
import {StyledLinkToBack} from "../casesPage/CasesPage.styles";

import ApplicationLeaveRequestComponent
	from "../../components/applicationLeaveRequest/ApplicationLeaveRequest.component";
import ListOfCasesComponent from "../../components/listOfCases/ListOfCases.component";

const CasesStudyPage = () => {
	let params = useParams();
	const navigate = useNavigate();
	console.log(params.caseId);
	const handleClick = () => {
		navigate(-1)
	};

	return (
		<Suspense fallback={<Spinner top="true"/>}>
			<StyledCasesStudyPage>
				<StyledCasesStudyPageMain>
					<StyledLinkToBack onClick={handleClick}>
						<img src={arrowToLeft} alt='arrow-to-back'/>
						<p>Back</p>
					</StyledLinkToBack>

					<StyledCasesStudyMainPreviewSection>
						<div className="hero-text">
							<h1>Case name</h1>
							<p>The new model of organizational activity uniquely defines each participant as capable of making their own decisions regarding the withdrawal of current assets.</p>
							<div className="category">Health and Care</div>
						</div>
						<img src={previewImage} alt="preview"/>
					</StyledCasesStudyMainPreviewSection>

					<StyledCasesStudyClientSection>
						<h2>Client</h2>
						<div className="info-block">
							<p className="name">«Сancer clinic SKKOD»</p>
							<p className="address">Private oncology clinic in Stavropol, Stavropol Territory.
								<br/>Existing for 20 years, helping 2000 patients annually</p>
						</div>
					</StyledCasesStudyClientSection>

					<StyledCasesStudyProjectSummarySection>
						<h2>Project Summary</h2>
						<p>The project is about modernizing Verivox's platform for collecting, aggregating, and displaying multiple utility companies' rates to customers. Andersen's Front-end and Back-end teams are both working on the platform's functionality that will allow visitors to match rates through a comparison table and immediately choose the most suitable vendor corresponding to the specified parameters.</p>
						<div className="table">
							<div className="column">
								<h3 className="column-title">Development timeline</h3>
								<p className="column-data">2 month</p>
							</div>
							<div className="column">
								<h3 className="column-title">Budget</h3>
								<p className="column-data">Up to 10.000 USD</p>
							</div>
							<div className="column">
								<h3 className="column-title">Technology stack</h3>
								<p className="column-data">
									<div className="category">Java</div>
									<div className="category">React.js</div>
									<div className="category">MySQL</div>
								</p>
							</div>
						</div>
						<img className="overview" src={overviewImage} alt="overview"/>
					</StyledCasesStudyProjectSummarySection>

					<StyledCasesStudyTaskImplementationSection>
						<h2>Task implementation</h2>
						<p>The project is about modernizing Verivox's platform for collecting, aggregating, and displaying multiple utility companies' rates to customers. Andersen's Front-end and Back-end teams are both working on the platform's functionality that will allow visitors to match rates through a comparison table and immediately choose the most suitable vendor corresponding to the specified parameters.</p>
					</StyledCasesStudyTaskImplementationSection>

					<StyledCasesStudyFunctionality>
						<h2>Functionality</h2>
						<ul>
							<li>
								<img src={liArrow} alt=""/>
								<p>Selecting a service for making an appointment</p>
							</li>
							<li>
								<img src={liArrow} alt=""/>
								<p>Online service payment</p>
							</li>
							<li>
								<img src={liArrow} alt=""/>
								<p>Convenient service calendar</p>
							</li>
							<li>
								<img src={liArrow} alt=""/>
								<p>Telemedicine consultations</p>
							</li>
							<li>
								<img src={liArrow} alt=""/>
								<p>Multifunctional admin panel</p>
							</li>
						</ul>
						<div className="case-images">
							<img src={firstImage} alt="first"/>
							<div className="smaller-images">
								<div className="smallest-images">
									<img src={firstSmallImage} alt="first-small"/>
									<img src={secondSmallImage} alt="second-small"/>
								</div>
								<img src={secondImage} alt="second"/>
							</div>
						</div>
					</StyledCasesStudyFunctionality>

					<StyledCasesStudyProjectResults>
						<h2>Project results</h2>
						<p>The project is about modernizing Verivox's platform for collecting, aggregating, and displaying multiple utility companies' rates to customers. Andersen's Front-end and Back-end teams are both working on the platform's functionality that will allow visitors to match rates through a comparison table and immediately choose the most suitable vendor corresponding to the specified parameters.</p>
						<ul>
							<li>
								<img src={liArrow} alt="arrow"/>
								<p>Selecting a service for making an appointment</p>
							</li>
							<li>
								<img src={liArrow} alt="arrow"/>
								<p>Online service payment</p>
							</li>
							<li>
								<img src={liArrow} alt="arrow"/>
								<p>Convenient service calendar</p>
							</li>
							<li>
								<img src={liArrow} alt="arrow"/>
								<p>Telemedicine consultations</p>
							</li>
							<li>
								<img src={liArrow} alt="arrow"/>
								<p>Multifunctional admin panel</p>
							</li>
						</ul>
					</StyledCasesStudyProjectResults>

					<StyledCasesStudyCustomerFeedback>
						<h2>Customer feedback</h2>
						<div className="customer-block">
							<div className="customer-info">
								<img src={customerImage} alt="avatar"/>
								<div>
									<p className="name">Kamila Mayer</p>
									<p className="position">Tech Lead</p>
								</div>
							</div>
							<p className="context">The project is about modernizing Verivox's platform for collecting, aggregating, and displaying multiple utility companies' rates to customers. Andersen's Front-end and Back-end teams are both working on the platform's functionality that will allow visitors to match rates through a comparison table and immediately choose the most suitable vendor corresponding to the specified parameters.</p>
						</div>
					</StyledCasesStudyCustomerFeedback>
				</StyledCasesStudyPageMain>

				<ApplicationLeaveRequestComponent />

				<h2>Similar cases</h2>
				<ListOfCasesComponent routepage="homepage"/>
			</StyledCasesStudyPage>
		</Suspense>
	)
};

export default CasesStudyPage;