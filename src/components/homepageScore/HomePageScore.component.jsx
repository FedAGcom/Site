import React from "react";

import score59 from "../../assets/homepage/Group59.svg";
import score32 from "../../assets/homepage/Group32.svg";

import './HomePageScore.styles.scss'
import {useTranslation} from "react-i18next";

const HomePageScoreComponent = () => {
	const { t } = useTranslation()
	return (
		<div className="score-of-main-section">
			<div className="visual-part-of-first-score">
				<div className="demonstration-part-of-first-score">
					<img src={score59} alt="score59"/>
					<p className="first-paragraph-of-score">+59%</p>
				</div>
				<p>{t('main.homepage.mainSection.revenueIncrease')}</p>
			</div>

			<span className="line-between-score"></span>

			<div className="visual-part-of-second-score">
				<div className="demonstration-part-of-second-score">
					<img src={score32} alt="score32"/>
					<p className="second-paragraph-of-score">+32%</p>
				</div>
				<p>{t('main.homepage.mainSection.conversionIncrease')}</p>
			</div>
		</div>
	);
};

export default HomePageScoreComponent;