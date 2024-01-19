import React from "react";
import styled from "styled-components";

const StyledBadge = styled.div`
	border-radius: 20px;
	border: 1px solid ${(props) => props.color};
	color: ${(props) => props.color};
	padding: 10px 20px;
`;

function CasePageBadge(props) {
	return <StyledBadge {...props} />;
}

export default CasePageBadge;
