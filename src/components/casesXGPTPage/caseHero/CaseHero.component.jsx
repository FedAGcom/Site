import React from 'react';

import { Separator } from '../casePageElements/limits.styles';

import { useNavigate } from 'react-router-dom';
import arrowToLeft from '../../../assets/arrow_to_left.svg';
import { StyledLinkToBack } from '../../casesPage/CasesPage.styles';
import { CaseBadgeWrapper, CaseHeroImg, CaseHeroImgWrapper, CaseHeroText, CaseWrapper } from './CaseHero.styles';
import CasePageBadge from '../casePageElements/CasePageBadge';
import CasePageParagraph from '../casePageElements/CasePageParagraph';
import { useTranslation } from 'react-i18next';
import FilterButtonComponent from '../../filterButton/fillterButton.component';

function CaseHero(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const { t } = useTranslation();
  return (
    <Separator>
      <StyledLinkToBack onClick={handleClick}>
        <img
          src={arrowToLeft}
          alt="arrow-to-back"
        />
        <p>{t(`main.homepage.singleCase.${props.case.name}.btnBack`)}</p>
      </StyledLinkToBack>
      <CaseWrapper>
        <CaseHeroText>
          <h1>{t(`main.homepage.singleCase.${props.case.name}.heroHeader`)}</h1>
          <CasePageParagraph>{t(`main.homepage.singleCase.${props.case.name}.heroParagraph`)}</CasePageParagraph>
          <CaseBadgeWrapper>
          {props.case.heroBadge.map((el) => {
            return (
              <CasePageBadge
                key={el}
                color={'#AEAEAE'}>
                {t(`main.homepage.singleCase.${props.case.name}.badge.${el}`)}
              </CasePageBadge>
            );
          })}
          </CaseBadgeWrapper>
        </CaseHeroText>
        <CaseHeroImgWrapper>
          <CaseHeroImg src={props.case.heroImg} />
        </CaseHeroImgWrapper>
      </CaseWrapper>
    </Separator>
  );
}

export default CaseHero;
