import styled from "styled-components";

export const CaseCasesMain = styled.div`
	//display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	// max-width: 77dvw;
	margin-left: auto;
	margin-right: auto;
	h2 {
		align-self: flex-start;
		margin-bottom: 32px;
		// margin-left: 6.5%;
	}
	@media (max-width: 900px) {
		gap: 20px;
		h2 {
			margin-bottom: 20px;
		}
	}
`;
