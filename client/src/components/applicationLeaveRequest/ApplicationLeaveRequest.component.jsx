import React, {useState} from 'react';

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
		"first-name": "",
		"last-name": "",
		"company": "",
		"email": "",
		"project-info": ""
	});

	const handleInputChange = (e) => {
		setCredentials( {...credentials, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {

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
							<StyledApplicationRequestInput onChange={handleInputChange} naming="true" type="text" name="first-name" required={true}/>
						</StyledApplicationRequestLabel>
					</StyledApplicationRequestElementOfInputList>

					<StyledApplicationRequestElementOfInputList naming="true">
						<StyledApplicationRequestLabel>
							Last name:
							<StyledApplicationRequestInput onChange={handleInputChange} naming="true" type="text" name="last-name" required={true}/>
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
							<StyledApplicationRequestTextArea onChange={handleInputChange} name="project-info" required={true}/>
						</StyledApplicationRequestLabel>
					</StyledApplicationRequestElementOfInputList>

				</StyledApplicationRequestListOfInputs>

				<CustomButtonComponent onSubmit={handleSubmit} resptop="670px" type="submit" top="451px" left="665px" children="Submit"/>
			</StyledApplicationRequestForm>
		</StyledApplicationRequestContainer>
	);
};

export default ApplicationLeaveRequestComponent;