import React from 'react';

import mobileImage from '../../assets/career/mainPartPhoto.png'
import desktopImage from '../../assets/career/mainPartPhotoDesktop.png'

import {
	StyledCareerPageMainPartSection,
	StyledCareerPageMainPartHeadline,
	StyledCareerPageMainPartParagraph,
	StyledCareerPageMainPartImage,
	StyledCareerPageMainPartSecondImage, StyledCareerPageMainPartSecondParagraph, StyledCareerPageMainPartInfoBlock
} from './CareerPageMainPart.styles'
import {useTranslation} from "react-i18next";

const CareerPageMainPartComponent = () => {
	const {t} = useTranslation()
	return (
		<StyledCareerPageMainPartSection>
			<div className="career-first-block">
				<div className="career-main-part-text">
					<StyledCareerPageMainPartHeadline>
						{t('main.careerPage.mainSection.headline')}
					</StyledCareerPageMainPartHeadline>
					<StyledCareerPageMainPartParagraph>
						{t('main.careerPage.mainSection.paragraphFirst')}
					</StyledCareerPageMainPartParagraph>
				</div>
				<div className="image-container">
					<StyledCareerPageMainPartImage />
				</div>
			</div>
			<StyledCareerPageMainPartSecondImage src={window.innerWidth <= 800 ? mobileImage : desktopImage} alt="image"/>
			<StyledCareerPageMainPartSecondParagraph>
				{t('main.careerPage.mainSection.paragraphSecond')}
			</StyledCareerPageMainPartSecondParagraph>
			<StyledCareerPageMainPartInfoBlock>
				<span className="career-info-block-question">
				{t('main.careerPage.mainSection.infoBlock.question')}

				</span>
				<span className="career-info-block-answer">
				{t('main.careerPage.mainSection.infoBlock.answer')}
				</span>
			</StyledCareerPageMainPartInfoBlock>
		</StyledCareerPageMainPartSection>
	);
};

export default CareerPageMainPartComponent;