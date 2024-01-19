import styled from "styled-components";

export const CaseFunctionsMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;
export const CaseFunctionsList = styled.ul`
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
export const CaseFunctionsImgs = styled.div`
	img {
		border-radius: 49px;
		max-width: 100%;
		max-height: 100%;
		box-shadow: 0px 2px 21px 0px rgba(45, 45, 45, 0.28);
	}
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;
	width: 100%;
    @media (max-width: 1100px) {
        img {
			border-radius: 29px;
		}
    }
	@media (max-width: 900px) {
		img {
			border-radius: 29px;
		}
		grid-template-columns: 1fr;
		gap: 16px;
		.rightColumn {
			gap: 16px;
		}
		.upperWrap {
			gap: 3%;
			img {
				max-width: calc(50% - 3%);
			}
		}
	}
	.leftColumn {
		max-width: 100%;
	}
	.rightColumn {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.upperWrap {
		display: flex;
		flex-direction: row;
		gap: 32px;
		img {
			max-width: calc(50% - 16px);
		}
	}
`;
