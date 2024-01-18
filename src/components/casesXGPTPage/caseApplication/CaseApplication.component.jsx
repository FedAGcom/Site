import React, { useState } from "react";
import axios from "axios";
import { Separator } from "../casePageElements/limits.styles";
import {
	ApplicationButton,
	ApplicationInput,
	ApplicationLabel,
	ApplicationTextarea,
	ContactWithUs,
	FormApplication,
	ModifiedApplicationMain,
} from "./CaseApplication.styles";
import CasePageHeader from "../casePageElements/CasePageHeader";
import Spinner from "../../spinner/spinner.component";

function ModifiedApplication() {
	const INITIAL_STATE = {
		firstName: "",
		lastName: "",
		company: "",
		email: "",
		projectInfo: "",
	};
	const [credentials, setCredentials] = useState(INITIAL_STATE);
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			credentials.projectInfo !== "" &&
			credentials.firstName !== "" &&
			credentials.lastName !== "" &&
			credentials.company !== "" &&
			credentials.email !== ""
		) {
			setIsLoading(true);
			axios
				.post(`${process.env.REACT_APP_URL}/`, {
					firstName: credentials.firstName,
					lastName: credentials.lastName,
					company: credentials.company,
					email: credentials.email,
					projectInfo: credentials.projectInfo,
				})
				.then(() =>
					setTimeout(() => {
						setCredentials(INITIAL_STATE);
						setIsLoading(false);
					}, 1000)
				)
				.catch(() => alert("An error has occurred"));
		}
	};
	return (
		<Separator>
			{isLoading ? (
				<Spinner />
			) : (
				<ModifiedApplicationMain id="application-section">
					<ContactWithUs>
						<h1>Свяжитесь с нами, чтобы обсудить ваш собственный проект</h1>
						<CasePageHeader show="mob">
							Свяжитесь с FedAG сегодня!
						</CasePageHeader>
					</ContactWithUs>
					<FormApplication onSubmit={handleSubmit}>
						<div class="name__wrapper">
							<ApplicationLabel>
								Имя:
								<ApplicationInput
									onChange={handleInputChange}
									naming="true"
									type="text"
									value={credentials.firstName}
									name="firstName"
									required={true}
								/>
							</ApplicationLabel>
							<ApplicationLabel>
								Фамилия:
								<ApplicationInput
									onChange={handleInputChange}
									naming="true"
									type="text"
									value={credentials.lastName}
									name="lastName"
									required={true}
								/>
							</ApplicationLabel>
						</div>
						<ApplicationLabel>
							Компания:
							<ApplicationInput
								onChange={handleInputChange}
								type="text"
								value={credentials.company}
								name="company"
								required={true}
							/>
						</ApplicationLabel>
						<ApplicationLabel>
							Email:
							<ApplicationInput
								onChange={handleInputChange}
								type="email"
								value={credentials.email}
								name="email"
								required={true}
							/>
						</ApplicationLabel>
						<ApplicationLabel>
							О чем ваш проект?:
							<ApplicationTextarea
								onChange={handleInputChange}
								value={credentials.projectInfo}
								name="projectInfo"
								required={true}
							/>
						</ApplicationLabel>
						<ApplicationButton>Оставить заявку</ApplicationButton>
					</FormApplication>
				</ModifiedApplicationMain>
			)}
		</Separator>
	);
}

export default ModifiedApplication;
