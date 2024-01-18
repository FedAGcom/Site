import React from "react";
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

function ModifiedApplication() {
	return (
		<Separator>
			<ModifiedApplicationMain>
				<ContactWithUs>
					<h1>Свяжитесь с нами, чтобы обсудить ваш собственный проект</h1>
					<CasePageHeader show="mob">Свяжитесь с FedAG сегодня!</CasePageHeader>
				</ContactWithUs>
				<FormApplication>
					<div class="name__wrapper">
						<ApplicationLabel>
							Имя:<ApplicationInput/>
						</ApplicationLabel>
						<ApplicationLabel>
							Фамилия:<ApplicationInput/>
						</ApplicationLabel>
					</div>
					<ApplicationLabel>
						Компания:<ApplicationInput/>
					</ApplicationLabel>
					<ApplicationLabel>
						Email:<ApplicationInput/>
					</ApplicationLabel>
					<ApplicationLabel>
						О чем ваш проект?:<ApplicationTextarea/>
					</ApplicationLabel>
					<ApplicationButton>Оставить заявку</ApplicationButton>
				</FormApplication>
			</ModifiedApplicationMain>
		</Separator>
	);
}

export default ModifiedApplication;
