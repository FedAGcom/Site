import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import axios from "axios";

import image from '../../assets/contactUsPage/requestPhoto.png'
import Spinner from "../spinner/spinner.component";

import {
	StyledContactUsPageRequestSection,
	StyledContactUsPageRequestSectionImage,
	StyledContactUsPageRequestSectionForm,
	StyledContactUsPageRequestSectionHeadline,
	StyledContactUsPageRequestSectionParagraph,
	StyledContactUsPageRequestSectionListOfInputs,
	StyledContactUsPageRequestSectionElementOfInputList,
	StyledContactUsPageRequestSectionLabel,
	StyledContactUsPageRequestSectionInput,
	StyledContactUsPageRequestSectionTextArea
} from "./ContactUsPageRequestSection.styles";
import CustomButton from "../customButton/CustomButton.component";

const ContactUsPageRequestSectionComponent = () => {
	const {t} = useTranslation()
	const INITIAL_STATE = {
		"firstName": "",
		"lastName": "",
		"company": "",
		"email": "",
		"message": ""
	}
	const [credentials, setCredentials] = useState(INITIAL_STATE);
	const [isLoading, setIsLoading] = useState(false);
	const handleInputChange = (e) => {
		setCredentials( {...credentials, [e.target.name]: e.target.value})
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			(credentials.message !== "") &&
			(credentials.firstName !== "") &&
			(credentials.lastName !== "") &&
			(credentials.company !== "") &&
			(credentials.email !== "")
		) {
			setIsLoading(true)
			axios.post("/contact-us", {
				firstName: credentials.firstName,
				lastName: credentials.lastName,
				company: credentials.company,
				email: credentials.email,
				message: credentials.message
			})
				.then(() => setTimeout(() => {
					setCredentials(INITIAL_STATE)
					setIsLoading(false)
				}, 1000))
				.catch(() => alert("An error has occurred"));
		}
	}

	return (
		<StyledContactUsPageRequestSection>
			<StyledContactUsPageRequestSectionImage src={image} alt="image"/>
			{
				isLoading
				? <Spinner />
				:
				<StyledContactUsPageRequestSectionForm onSubmit={handleSubmit}>
					<StyledContactUsPageRequestSectionHeadline>
						{t('main.contactUsPage.requestSection.headline')}
					</StyledContactUsPageRequestSectionHeadline>
					<StyledContactUsPageRequestSectionParagraph>
						{t('main.contactUsPage.requestSection.paragraph')}
					</StyledContactUsPageRequestSectionParagraph>

					<StyledContactUsPageRequestSectionListOfInputs>
						<StyledContactUsPageRequestSectionElementOfInputList>
							<StyledContactUsPageRequestSectionLabel>
								{t('main.contactUsPage.requestSection.inputs.firstName')}
								<StyledContactUsPageRequestSectionInput onChange={handleInputChange} naming="true" type="text" value={credentials.firstName} name="firstName" required={true} />
							</StyledContactUsPageRequestSectionLabel>
						</StyledContactUsPageRequestSectionElementOfInputList>

						<StyledContactUsPageRequestSectionElementOfInputList>
							<StyledContactUsPageRequestSectionLabel>
								{t('main.contactUsPage.requestSection.inputs.lastName')}
								<StyledContactUsPageRequestSectionInput onChange={handleInputChange} naming="true" type="text" value={credentials.lastName} name="lastName" required={true}/>
							</StyledContactUsPageRequestSectionLabel>
						</StyledContactUsPageRequestSectionElementOfInputList>

						<StyledContactUsPageRequestSectionElementOfInputList>
							<StyledContactUsPageRequestSectionLabel>
								{t('main.contactUsPage.requestSection.inputs.company')}
								<StyledContactUsPageRequestSectionInput onChange={handleInputChange} naming="true" type="text" value={credentials.company} name="company" required={true}/>
							</StyledContactUsPageRequestSectionLabel>
						</StyledContactUsPageRequestSectionElementOfInputList>

						<StyledContactUsPageRequestSectionElementOfInputList>
							<StyledContactUsPageRequestSectionLabel>
								{t('main.contactUsPage.requestSection.inputs.email')}
								<StyledContactUsPageRequestSectionInput onChange={handleInputChange} naming="true" type="email" value={credentials.email} name="email" required={true}/>
							</StyledContactUsPageRequestSectionLabel>
						</StyledContactUsPageRequestSectionElementOfInputList>

						<StyledContactUsPageRequestSectionElementOfInputList>
							<StyledContactUsPageRequestSectionLabel>
								{t('main.contactUsPage.requestSection.inputs.projectInfo')}
								<StyledContactUsPageRequestSectionTextArea onChange={handleInputChange} value={credentials.message} name="message" required={true}/>
							</StyledContactUsPageRequestSectionLabel>
						</StyledContactUsPageRequestSectionElementOfInputList>

						<CustomButton submit="true" width="255px" type="submit" top="0" left="0">
							{t('main.contactUsPage.requestSection.btnText')}
						</CustomButton>
					</StyledContactUsPageRequestSectionListOfInputs>
				</StyledContactUsPageRequestSectionForm>
			}
		</StyledContactUsPageRequestSection>
	);
};

export default ContactUsPageRequestSectionComponent;