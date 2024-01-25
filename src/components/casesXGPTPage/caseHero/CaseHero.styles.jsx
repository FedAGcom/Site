import styled from "styled-components";

export const CaseWrapper = styled.div`
	margin-top: 32px;
	display: grid;
	grid-template-columns: 4fr 7fr;
	gap: 64px;
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
`;
export const CaseHeroText = styled.div`
	padding-top: 20%;
	padding-bottom: 20%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap: 32px;
	h1 {
		font-size: 60px;
		font-weight: 700;
		margin-bottom: 0px;
	}

	@media (max-width: 900px) {
		gap: 20px;
		grid-row-start: 2;
		padding-top: 0;
		padding-bottom: 0;
		h1 {
			font-size: 40px;
		}
	}
`;
export const CaseBadgeWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;
export const CaseHeroImgWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const CaseHeroImg = styled.img`
	border-radius: 19px;
	max-width: 100%;
	max-height: 100%;
	box-shadow: 0px 2px 21px 0px rgba(45, 45, 45, 0.28);
`;
