import React from 'react';
import { CapeSummaryImg, CaseSummaryGrid, CaseSummaryMain, CaseSummaryText, CaseSummaryWrapper } from './CaseSummary.styles';
import { Separator } from '../casePageElements/limits.styles';
import CasePageBadge from '../casePageElements/CasePageBadge';
import CasePageParagraph from '../casePageElements/CasePageParagraph';
import CasePageHeader from '../casePageElements/CasePageHeader';
import { useTranslation } from 'react-i18next';
export function CaseSummary(props) {
  const { t } = useTranslation();

  const currentCase = props.case;

  return (
    <CaseSummaryMain>
      <Separator>
        <CaseSummaryWrapper>
          <CaseSummaryText>
            <CasePageHeader show="desk">{t(`main.homepage.singleCase.${currentCase.name}.sumHDesk`)}</CasePageHeader>
            <CasePageHeader show="mob">{t(`main.homepage.singleCase.${currentCase.name}.sumHMob`)}</CasePageHeader>
            <CasePageParagraph>{t(`main.homepage.singleCase.${currentCase.name}.sumHP`)}</CasePageParagraph>
          </CaseSummaryText>
          <CaseSummaryGrid>
            <div class="block">
              <h3>{t(`main.homepage.singleCase.${currentCase.name}.time`)}</h3>
              <h3 class="block__red">{t(`main.homepage.singleCase.${props.case.name}.timeSpent`)}</h3>
            </div>
            <div class="block">
              <h3>{t(`main.homepage.singleCase.${currentCase.name}.money`)}</h3>
              <h3 class="block__red">{t(`main.homepage.singleCase.${currentCase.name}.moneySpent`)}</h3>
            </div>
            <div class="block">
              <h3>{t(`main.homepage.singleCase.${currentCase.name}.tech`)}</h3>
              <div class="badge__wrapper">
                {currentCase.sumTechStack.map((el) => {
                  return (
                    <CasePageBadge
                      key={el}
                      color={'#B81034'}>
                      {t(`main.homepage.singleCase.${currentCase.name}.techStack.${el}`)}
                    </CasePageBadge>
                  );
                })}
              </div>
            </div>
          </CaseSummaryGrid>
          <CapeSummaryImg>
            <img
              src={currentCase.sumImg}
              alt="Summary"
            />
          </CapeSummaryImg>
        </CaseSummaryWrapper>
      </Separator>
    </CaseSummaryMain>
  );
}
