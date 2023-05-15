import React from 'react';

import CustomButton from "../customButton/CustomButton.component";
import {
	StyledHeroTextOfMainSection,
	StyledTextOfMainSection,
	StyledFrameOfMainSection,
	StyledHeadlineOfMainSection,
	StyledParagraphOfMainSection
} from "./HomePageHeroText.styles";
const HomePageHeroTextComponent = () => {
	return (
		<StyledHeroTextOfMainSection>
			<StyledTextOfMainSection>
				<StyledFrameOfMainSection>

					<StyledHeadlineOfMainSection>Outsourcing solutions for your business</StyledHeadlineOfMainSection>

					<StyledParagraphOfMainSection className="paragraph-text-section-frame">
						Unlock Your Business Potential with Our Tailored Outsourcing Solutions
					</StyledParagraphOfMainSection>

				</StyledFrameOfMainSection>
			</StyledTextOfMainSection>


			<CustomButton className="button-of-main-section">
				Build a project
			</CustomButton>
		</StyledHeroTextOfMainSection>
	);
};

export default HomePageHeroTextComponent;