import React from 'react';

import {
	StyledContactUsButtonOfHomePage,
	StyledContactUsElementOfHomePage, StyledContactUsHeadlineOfHomePage, StyledContactUsIconOfHomePage,
	StyledContactUsOfHomePage, StyledContactUsParagraphOfHomePage
} from "./HomePageContactUs.styles";
import CallToComponent from "../callTo/CallTo.component";

const HomePageContactUsComponent = () => {
	return (
		<StyledContactUsOfHomePage>
			<StyledContactUsElementOfHomePage small="true" >
				<StyledContactUsIconOfHomePage phone="true" />

				<StyledContactUsHeadlineOfHomePage small="true">Talk to us</StyledContactUsHeadlineOfHomePage>

				<StyledContactUsParagraphOfHomePage small="true">
					Interested in cooperation with FedAG? Pick up the phone to chat with
					a member of our sales team
				</StyledContactUsParagraphOfHomePage>

				<StyledContactUsButtonOfHomePage phone="true">
					<CallToComponent phone="+79112507289">
						+7 (911) 250-72-89
					</CallToComponent>
				</StyledContactUsButtonOfHomePage>

			</StyledContactUsElementOfHomePage>


			<StyledContactUsElementOfHomePage>
				<StyledContactUsIconOfHomePage />

				<StyledContactUsHeadlineOfHomePage>Leave a request for a call</StyledContactUsHeadlineOfHomePage>

				<StyledContactUsParagraphOfHomePage>
					Interested in cooperation with FedAG?
					Leave a request for a call with our representative!
				</StyledContactUsParagraphOfHomePage>

				<StyledContactUsButtonOfHomePage>
					<span>Submit</span>
				</StyledContactUsButtonOfHomePage>
			</StyledContactUsElementOfHomePage>
		</StyledContactUsOfHomePage>
	);
};

export default HomePageContactUsComponent;