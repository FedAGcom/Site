import React from "react";

import './HomePageScore.styles.scss'

const HomePageScoreComponent = () => {
	return (
		<div className="score-of-main-section">
			<div className="visual-part-of-first-score">
				<div className="demonstration-part-of-first-score">
					<img src={require("../../assets/homepage/Group59.png")} alt="score59"/>
					<p className="first-paragraph-of-score">+59%</p>
				</div>
				<p>Revenue increase</p>
			</div>

			<span className="line-between-score"></span>

			<div className="visual-part-of-second-score">
				<div className="demonstration-part-of-second-score">
					<img src={require("../../assets/homepage/Group32.png")} alt="score32"/>
					<p className="second-paragraph-of-score">+32%</p>
				</div>
				<p>Conversion Increase</p>
			</div>
		</div>
	);
};

export default HomePageScoreComponent;