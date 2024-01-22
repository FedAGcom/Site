import React from 'react'

import CasePageHeader from "../casePageElements/CasePageHeader";

import { Separator } from '../casePageElements/limits.styles'
import { ClientAboutContainer, ClientFeedbackH, ClientFeedbackImg, ClientFeedbackMain, ClientFeedbackP } from './CaseClientFeedback.styles';
import { useTranslation } from 'react-i18next';
const CaseClientFeedback = (props) => {
    const {t} = useTranslation()
	const currentCase = props.case
  return (
   <Separator>
    <CasePageHeader>
    {t(`main.homepage.singleCase.${currentCase.name}.feedback`)}
    </CasePageHeader>
    <ClientFeedbackMain>
        <ClientAboutContainer>
            <ClientFeedbackImg src="currentCase.feedbackImg" alt="logo" />
            <ClientFeedbackH>    {t(`main.homepage.singleCase.${currentCase.name}.feedbackName`)}</ClientFeedbackH>
        </ClientAboutContainer>
        <ClientFeedbackP>    {t(`main.homepage.singleCase.${currentCase.name}.feedbackText`)}</ClientFeedbackP>
    </ClientFeedbackMain> 
   </Separator>
  )
}

export default CaseClientFeedback