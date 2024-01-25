import React from 'react';
import { CaseCasesMain } from './CaseCases.styles';
import { Separator } from '../casePageElements/limits.styles';
import CasePageHeader from '../casePageElements/CasePageHeader';
import ListOfCasesComponent from '../../listOfCases/ListOfCases.component';
import { useTranslation } from 'react-i18next';

function CaseCases(props) {
  const { t } = useTranslation();
  const currentCase = props.case;
  return (
    <Separator>
      <CaseCasesMain>
        <CasePageHeader>{t(`main.homepage.singleCase.${currentCase.name}.caseHeader`)}</CasePageHeader>
        <ListOfCasesComponent />
      </CaseCasesMain>
    </Separator>
  );
}

export default CaseCases;
