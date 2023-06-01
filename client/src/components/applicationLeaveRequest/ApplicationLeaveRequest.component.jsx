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
			axios.post("/", {
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
	return (
		<StyledApplicationRequestContainer>
			<StyledApplicationRequestHeadline>
				Get in touch with FedAG today!
			</StyledApplicationRequestHeadline>
			{
				isLoading
					? <Spinner />
					: <StyledApplicationRequestForm id="application-section" onSubmit={handleSubmit}>
							<StyledApplicationRequestListOfInputs>

								<StyledApplicationRequestElementOfInputList naming="true">
									<StyledApplicationRequestLabel>
										First name:
										<StyledApplicationRequestInput onChange={handleInputChange} naming="true" type="text" value={credentials.firstName} name="firstName" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

								<StyledApplicationRequestElementOfInputList naming="true">
									<StyledApplicationRequestLabel>
										Last name:
										<StyledApplicationRequestInput onChange={handleInputChange} naming="true" type="text" value={credentials.lastName} name="lastName" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

								<StyledApplicationRequestElementOfInputList>
									<StyledApplicationRequestLabel>
										Company:
										<StyledApplicationRequestInput onChange={handleInputChange} type="text" value={credentials.company} name="company" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

								<StyledApplicationRequestElementOfInputList>
									<StyledApplicationRequestLabel>
										Email:
										<StyledApplicationRequestInput onChange={handleInputChange} type="email" value={credentials.email} name="email" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

								<StyledApplicationRequestElementOfInputList>
									<StyledApplicationRequestLabel>
										What is your project about?
										<StyledApplicationRequestTextArea onChange={handleInputChange} value={credentials.projectInfo} name="projectInfo" required={true}/>
									</StyledApplicationRequestLabel>
								</StyledApplicationRequestElementOfInputList>

							</StyledApplicationRequestListOfInputs>

							<CustomButtonComponent resptop="670px" type="submit" top="451px" left="665px" children="Submit"/>
					</StyledApplicationRequestForm>
			}
		</StyledApplicationRequestContainer>
	);
};

export default ApplicationLeaveRequestComponent;