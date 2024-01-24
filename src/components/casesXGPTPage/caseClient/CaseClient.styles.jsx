import styled from "styled-components";

export const CaseClientMain = styled.div`
	display: flex;
    background-color:#F2F2F2;
    border-radius: 30px;
	flex-direction: row;
    justify-content: space-between;
    gap:10px;
    min-height: 208px;
    margin-top:30px;
    padding: 50px 100px 50px 30px;
	@media (max-width: 900px) {
		flex-direction: column;
        padding: 50px 30px;
        margin-top:20px;
	}
`;

export const CaseClientH = styled.h3`
font-weight : 700;
font-size : 30px;
line-height: 40.92px; 
color:#333333;
`

export const CaseClientP = styled.p`
    font-size: 20px;
	font-weight: 400;
	color: #333333;
    max-width: 475px;
    @media (max-width: 900px) {
		font-size: 18px;
	}
`