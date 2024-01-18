import styled from "styled-components";

export const ModifiedApplicationMain = styled.div`
	border-radius: 30px;
	background: #272727;
	box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
	display: grid;
	grid-template-columns: 3fr 2fr;
	max-width: 77dvw;
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
	@media (max-width: 600px) {
		border-radius: 0;
		max-width: 100%;
	}
`;
export const ContactWithUs = styled.div`
	padding: 17% 11%;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 50px;
		font-weight: 700;
	}
	@media (max-width: 1250px) {
		h1 {
			font-size: 40px;
			font-weight: 600;
		}
	}
	@media (max-width: 900px) {
		padding: 10% 15% 0 15%;
		h1 {
			display: none;
		}
	}
	@media (max-width: 420px) {
		padding: 10% 5% 0 5%;
	}
`;
export const FormApplication = styled.form`
	.name__wrapper {
		display: flex;
		flex-direction: row;
		gap: 16px;
		label {
			width: calc(50% - 8px);
		}
	}
	gap: 16px;
	display: flex;
	flex-direction: column;
	padding: 15%;
	@media (max-width: 900px) {
		padding: 16px 15% 10% 15%;
		.name__wrapper {
			flex-direction: column;
			gap: 16px;
			label {
				width: 100%;
			}
		}
	}
	@media (max-width: 420px) {
		padding: 16px 5% 10% 5%;
	}
`;
export const ApplicationLabel = styled.label`
	color: white;
	display: flex;
	flex-direction: column;
	width: 100%;
`;
export const ApplicationTextarea = styled.textarea`
	height: 80px;
	border-radius: 5px;
`;
export const ApplicationInput = styled.input`
	height: 40px;
`;
export const ApplicationButton = styled.button`
	font-family: "Nunito Sans", "Inter", sans-serif;
	border-radius: 5px;
	font-size: 18px;
	background: #b81034;
	padding: 8px;
	height: 40px;
	border: none;
	color: white;
	margin-top: 16px;
`;
