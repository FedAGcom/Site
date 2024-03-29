import React from 'react';
import { Separator } from '../casePageElements/limits.styles';
import { CaseFunctionsImgs, CaseFunctionsList, CaseFunctionsMain } from './CaseFunctions.styles';
import CasePageHeader from '../casePageElements/CasePageHeader';
import liArrow from '../../../assets/cases/li-vector.svg';
import CasePageParagraph from '../casePageElements/CasePageParagraph';

import { useTranslation } from 'react-i18next';

function CaseFunctions(props) {
  const { t } = useTranslation();
  const currentCase = props.case;
  return (
    <Separator>
      <CaseFunctionsMain>
        <CasePageHeader>{t(`main.homepage.singleCase.${currentCase.name}.funcHeader`)}</CasePageHeader>
        <CaseFunctionsList>
          {currentCase.funcList.map((el) => {
            return (
              <li key={el}>
                <img
                  src={liArrow}
                  alt=">"
                />
                <CasePageParagraph>{t(`main.homepage.singleCase.${currentCase.name}.funcList.${el}`)}</CasePageParagraph>
              </li>
            );
          })}
        </CaseFunctionsList>
        <CaseFunctionsImgs>
          <div className="leftColumn">
            <img
              src={currentCase.funcImgLeft}
              alt="pic"
            />
          </div>
          <div className="rightColumn">
            <div className="upperWrap">
              <img
                src={currentCase.funcImgSmallL}
                alt="pic"
              />
              <img
                src={currentCase.funcImgSmallR}
                alt="pic"
              />
            </div>
            <img
              src={currentCase.funcImgRight}
              alt="pic"
            />
          </div>
        </CaseFunctionsImgs>
      </CaseFunctionsMain>
    </Separator>
  );
}

export default CaseFunctions;
