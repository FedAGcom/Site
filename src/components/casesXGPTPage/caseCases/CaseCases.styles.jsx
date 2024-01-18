import styled from "styled-components";

export const CaseCasesMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	h2 {
		align-self: flex-start;
		margin-left: 6.5%;
	}
	@media (max-width: 900px) {
		gap: 20px;
	}
`;
