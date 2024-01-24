import React from 'react';

import { Separator } from '../casePageElements/limits.styles';
import { CaseClientMain } from './CaseClient.styles';
import CasePageHeader from '../casePageElements/CasePageHeader';
import { CaseClientP } from './CaseClient.styles';
import { CaseClientH } from './CaseClient.styles';
import { useTranslation } from 'react-i18next';

const CaseClient = (props) => {
  const { t } = useTranslation();
  const currentCase = props.case;
  return (
    <Separator>
      <CasePageHeader>{t(`main.homepage.singleCase.${currentCase.name}.client`)}</CasePageHeader>
      <CaseClientMain>
        <CaseClientH>{t(`main.homepage.singleCase.${currentCase.name}.clientName`)}</CaseClientH>
        <CaseClientP>{t(`main.homepage.singleCase.${currentCase.name}.clientAbout`)}</CaseClientP>
      </CaseClientMain>
    </Separator>
  );
};

export default CaseClient;
