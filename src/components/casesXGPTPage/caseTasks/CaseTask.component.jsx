import React from 'react';
import { Separator } from '../casePageElements/limits.styles';
import { CaseTaskMain } from './CaseTask.styles';
import CasePageParagraph from '../casePageElements/CasePageParagraph';
import CasePageHeader from '../casePageElements/CasePageHeader';
import { useTranslation } from 'react-i18next';

function CaseTask(props) {
  const { t } = useTranslation();
  const currentCase = props.case;

  return (
    <Separator>
      <CaseTaskMain>
        <CasePageHeader>{t(`main.homepage.singleCase.${currentCase.name}.taskHeader`)}</CasePageHeader>
        <CasePageParagraph>{t(`main.homepage.singleCase.${currentCase.name}.taskParagraph`)}</CasePageParagraph>
      </CaseTaskMain>
    </Separator>
  );
}

export default CaseTask;
