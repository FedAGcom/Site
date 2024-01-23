import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
	font-size: 20px;
	font-weight: 400;
	color: #333333;
	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

function CasePageParagraph({ children }) {
	return <StyledParagraph>{children}</StyledParagraph>;
}

export default CasePageParagraph;
