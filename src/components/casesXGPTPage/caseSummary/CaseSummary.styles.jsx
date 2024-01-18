import styled from "styled-components";

export const CaseSummaryMain = styled.div`
	width: 100%;
`;
export const CaseSummaryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	@media (max-width: 900px) {
		gap: 20px;
	}
`;
export const CaseSummaryText = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
	p {
		max-width: 70%;
	}
	@media (max-width: 900px) {
		p {
			max-width: 100%;
		}
	}
`;

export const CaseSummaryGrid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	.block {
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: start;
		gap: 12px;
	}
	h3 {
		margin-bottom: 0;
		font-size: 28px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
	.block__red {
		color: #b81034;
	}
	.badge__wrapper {
		display: flex;
		gap: 16px;
		justify-content: space-between;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 16px;
		h3 {
			font-size: 24px;
		}
		.block {
			gap: 0;
		}
		@media (max-width: 400px) {
			.badge__wrapper {
				flex-wrap: wrap;
				justify-content: flex-start;
				gap: 10px;
				font-size: 16px;
			}
			h3 {
				font-size: 22px;
			}
		}
	}
`;
export const CapeSummaryImg = styled.div`
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 49px;
		box-shadow: 0px 2px 21px 0px rgba(45, 45, 45, 0.28);
	}
	@media (max-width: 900px) {
		img {
			border-radius: 32px;
		}
	}
`;
