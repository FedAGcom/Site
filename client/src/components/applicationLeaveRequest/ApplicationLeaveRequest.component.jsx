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

const ApplicationLeaveRequestComponent = () => {
	const [credentials, setCredentials] = useState({
		"firstName": "",
		"lastName": "",
		"company": "",
		"email": "",
		"projectInfo": ""
	});

	const handleInputChange = (e) => {
		setCredentials( {...credentials, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		axios.post("/", {
				firstName: credentials.firstName,
				lastName: credentials.lastName,
				company: credentials.company,
				email: credentials.email,
				projectInfo: credentials.projectInfo
			})
			.then(() => alert("Message sent successfully"))
			.catch(() => alert("An error has occurred"));

	}
	return (
		<StyledApplicationRequestContainer>
			<StyledApplicationRequestHeadline>
				Get in touch with FedAG today!
			</StyledApplicationRequestHeadline>

			<StyledApplicationRequestForm id="application-section">
				<StyledApplicationRequestListOfInputs>

					<StyledApplicationRequestElementOfInputList naming="true">
						<StyledApplicationRequestLabel>
							First name:
							<StyledApplicationRequestInput onChange={handleInputChange} naming="true" type="text" name="firstName" required={true}/>
						</StyledApplicationRequestLabel>
					</StyledApplicationRequestElementOfInputList>

					<StyledApplicationRequestElementOfInputList naming="true">
						<StyledApplicationRequestLabel>
							Last name:
							<StyledApplicationRequestInput onChange={handleInputChange} naming="true" type="text" name="lastName" required={true}/>
						</StyledApplicationRequestLabel>
					</StyledApplicationRequestElementOfInputList>

					<StyledApplicationRequestElementOfInputList>
						<StyledApplicationRequestLabel>
							Company:
							<StyledApplicationRequestInput onChange={handleInputChange} type="text" name="company" required={true}/>
						</StyledApplicationRequestLabel>
					</StyledApplicationRequestElementOfInputList>

					<StyledApplicationRequestElementOfInputList>
						<StyledApplicationRequestLabel>
							Email:
							<StyledApplicationRequestInput onChange={handleInputChange} type="email" name="email" required={true}/>
						</StyledApplicationRequestLabel>
					</StyledApplicationRequestElementOfInputList>

					<StyledApplicationRequestElementOfInputList>
						<StyledApplicationRequestLabel>
							What is your project about?
							<StyledApplicationRequestTextArea onChange={handleInputChange} name="projectInfo" required={true}/>
						</StyledApplicationRequestLabel>
					</StyledApplicationRequestElementOfInputList>

				</StyledApplicationRequestListOfInputs>

				<CustomButtonComponent onClick={handleSubmit} resptop="670px" type="submit" top="451px" left="665px" children="Submit"/>
			</StyledApplicationRequestForm>
		</StyledApplicationRequestContainer>
	);
};

export default ApplicationLeaveRequestComponent;