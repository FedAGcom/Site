import React from "react";

import {
	StyledHomePageApproachHeadline,
	StyledHomePageApproachImage,
	StyledHomePageApproachInfoBlock,
	StyledHomePageApproachSection
} from "./HomePageApproach.styles";

const HomePageApproachComponent = () => {
	return (
		<StyledHomePageApproachSection>

			<StyledHomePageApproachHeadline>
				Our approach
			</StyledHomePageApproachHeadline>

			<StyledHomePageApproachImage />

			<StyledHomePageApproachInfoBlock className="big-info-block">
				<h3>Is centered around building strong partnerships with our clients</h3>
				<p>We take the time to understand your unique business needs and goals, and work closely with you to develop customized solutions that drive real results. Our project management methodologies are designed to ensure timely delivery and clear communication throughout the entire process.</p>
			</StyledHomePageApproachInfoBlock>

			<StyledHomePageApproachInfoBlock className="small-info-block first">
				<h3>Dedicated team</h3>
				<p>Team is comprised of highly skilled and experienced professionals who are experts in their fields.</p>
			</StyledHomePageApproachInfoBlock>

			<StyledHomePageApproachInfoBlock className="small-info-block second">
				<h3>Cost efficiency</h3>
				<p>We offer flexible pricing options that are tailored to meet the unique needs and budget of each client.</p>
			</StyledHomePageApproachInfoBlock>

			<StyledHomePageApproachInfoBlock className="small-info-block third">
				<h3>Quality guarantee</h3>
				<p>Provided experts are thoroughly vetted and undergo ongoing training to ensure they stay up-to-date with the latest industry trends and best practices.</p>
			</StyledHomePageApproachInfoBlock>

		</StyledHomePageApproachSection>
	);
};

export default HomePageApproachComponent;