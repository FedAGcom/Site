import React, {useState} from 'react';
import axios from 'axios';

import {
	StyledApplicationRequestContainer, StyledApplicationRequestElementOfInputList,
	StyledApplicationRequestForm,
	StyledApplicationRequestHeadline,
	StyledApplicationRequestInput,
	StyledApplicationRequestLabel, StyledApplicationRequestListOfInputs,
	StyledApplicationRequestTextArea
} from "./ApplicationLeaveRequest.styles";

import CustomButtonComponent from "../customButton/CustomButton.component";
import Spinner from "../spinner/spinner.component";
import {useTranslation} from "react-i18next";

const ApplicationLeaveRequestComponent = () => {
	const INITIAL_STATE = {
		"firstName": "",
		"lastName": "",
		"company": "",
		"email": "",
		"projectInfo": ""
	}
	const [credentials, setCredentials] = useState(INITIAL_STATE);
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e) => {
		setCredentials( {...credentials, [e.target.name]: e.target.value})
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			(credentials.projectInfo !== "") &&
			(credentials.firstName !== "") &&
			(credentials.lastName !== "") &&
			(credentials.company !== "") &&
			(credentials.email !== "")
		) {
			setIsLoading(true)
			axios.post(`${process.env.REACT_APP_URL}/`, {
				firstName: credentials.firstName,
				lastName: credentials.lastName,
				company: credentials.company,
				email: credentials.email,
				projectInfo: credentials.projectInfo
			})
				.then(() => setTimeout(() => {
					setCredentials(INITIAL_STATE)
					setIsLoading(false)
				}, 1000))
				.catch(() => alert("An error has occurred"));
		}

	}
	const {t} = useTranslation()
	return (
		<StyledApplicationRequestContainer id="application-section" >
			{
				isLoading
					? <Spinner />
					:
					<div>
						<StyledApplicationRequestHeadline>
							{t('main.homepage.requestSection.headline')}
						</StyledApplicationRequestHeadline>
						<StyledApplicationRequestForm onSubmit={handleSubmit}>
							<StyledApplicationRequestListOfInputs>

								<StyledApplicationRequestElementOfInputList naming="true">
									<StyledApplicationRequestLabel>
										{t('main.homepage.requestSection.inputs.firstName')}
										<StyledApplicationRequestInput onChange={handleInputChange} naming="true" type="text" value={credentials.firstName} name="firstName" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

								<StyledApplicationRequestElementOfInputList naming="true">
									<StyledApplicationRequestLabel>
										{t('main.homepage.requestSection.inputs.lastName')}
										<StyledApplicationRequestInput onChange={handleInputChange} naming="true" type="text" value={credentials.lastName} name="lastName" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

								<StyledApplicationRequestElementOfInputList>
									<StyledApplicationRequestLabel>
										{t('main.homepage.requestSection.inputs.company')}
										<StyledApplicationRequestInput onChange={handleInputChange} type="text" value={credentials.company} name="company" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

								<StyledApplicationRequestElementOfInputList>
									<StyledApplicationRequestLabel>
										{t('main.homepage.requestSection.inputs.email')}
										<StyledApplicationRequestInput onChange={handleInputChange} type="email" value={credentials.email} name="email" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

								<StyledApplicationRequestElementOfInputList>
									<StyledApplicationRequestLabel>
										{t('main.homepage.requestSection.inputs.projectInfo')}
										<StyledApplicationRequestTextArea onChange={handleInputChange} value={credentials.projectInfo} name="projectInfo" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

							</StyledApplicationRequestListOfInputs>

							<CustomButtonComponent submit="true" resptop="556px" type="submit" top="312px" left="665px">
								{t('main.homepage.requestSection.btnText')}
							</CustomButtonComponent>
						</StyledApplicationRequestForm>
					</div>
			}
		</StyledApplicationRequestContainer>
	);
};

export default ApplicationLeaveRequestComponent;