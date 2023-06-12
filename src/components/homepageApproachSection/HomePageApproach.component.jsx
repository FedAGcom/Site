import React from "react";
import {useTranslation} from "react-i18next";

import {
	StyledHomePageApproachHeadline,
	StyledHomePageApproachImage,
	StyledHomePageApproachInfoBlock,
	StyledHomePageApproachSection
} from "./HomePageApproach.styles";

const HomePageApproachComponent = () => {
	//1334px
	const {t, i18n} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru"

	return (
		<StyledHomePageApproachSection russian={isRussian.toString()}>

			<StyledHomePageApproachHeadline>
				{t('main.homepage.ourApproachSection.headline')}
			</StyledHomePageApproachHeadline>

			<StyledHomePageApproachImage />

			<StyledHomePageApproachInfoBlock className="big-info-block">
				<h3>{t('main.homepage.ourApproachSection.infoBlocks.bigInfoBlock.headline')}</h3>
				<p>{t('main.homepage.ourApproachSection.infoBlocks.bigInfoBlock.paragraph')}</p>
			</StyledHomePageApproachInfoBlock>

			<StyledHomePageApproachInfoBlock className="small-info-block first">
				<h3>{t('main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.firstInfoBlock.headline')}</h3>
				<p>{t('main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.firstInfoBlock.paragraph')}</p>
			</StyledHomePageApproachInfoBlock>

			<StyledHomePageApproachInfoBlock className="small-info-block second">
				<h3>{t('main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.secondInfoBlock.headline')}</h3>
				<p>{t('main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.secondInfoBlock.paragraph')}</p>
			</StyledHomePageApproachInfoBlock>

			<StyledHomePageApproachInfoBlock className="small-info-block third">
				<h3>{t('main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.thirdInfoBlock.headline')}</h3>
				<p>{t('main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.thirdInfoBlock.paragraph')}</p>
			</StyledHomePageApproachInfoBlock>

		</StyledHomePageApproachSection>
	);
};

export default HomePageApproachComponent;