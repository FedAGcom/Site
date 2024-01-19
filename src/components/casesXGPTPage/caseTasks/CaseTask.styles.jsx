import styled from "styled-components";

export const CaseTaskMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	p {
		max-width: 70%;
	}
	@media (max-width: 900px) {
		gap: 20px;
		p {
			max-width: 100%;
		}
	}
`;
