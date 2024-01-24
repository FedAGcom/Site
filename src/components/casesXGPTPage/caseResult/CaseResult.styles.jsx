import styled from "styled-components";

export const CaseResultMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	@media (max-width: 900px) {
		gap: 20px;
	}
`;

export const CaseResultList = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	li {
		width: 48%;
		margin-bottom: 15px;
		display: flex;
		align-items: center;
	}
	img {
		width: 27px;
		height: 27px;
	}
	@media (max-width: 900px) {
		flex-direction: column;
		width: 100%;
		li {
			width: 100%;
		}
	}
`;