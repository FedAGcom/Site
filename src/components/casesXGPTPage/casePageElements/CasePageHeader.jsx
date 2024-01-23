import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h2`
	font-size: 50px;
	font-weight: 600;
    display: ${(props) => {
			if (props.show === "desk") {
				return "flex";
			} else if (props.show === "mob") {
				return "none";
			}
		}};
	@media (max-width: 900px) {
		font-size: 40px;	
        display: ${(props) => {
					if (props.show === "mob") {
						return "flex";
					} else if (props.show === "desk") {
						return "none";
					}
				}};
        
`;

function CasePageHeader(props) {
	return <StyledHeader {...props}></StyledHeader>;
}

export default CasePageHeader;
