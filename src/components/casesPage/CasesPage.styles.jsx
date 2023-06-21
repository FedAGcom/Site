import styled from 'styled-components';

export const StyledCasesPage = styled.div`
	min-height: ${({russian}) => russian === "true" ? "2210px" : "2210px"};
	@media only screen and (max-width: 600px) {
    min-height: ${({russian}) => russian === "true" ? "2650px" : "2650px"};
	}
`;

export const StyledLinkToBack = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	gap: 5px;
	
	p {
    width: 36px;
    height: 22px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #B81034;
	}
`;

export const StyledCasesPageMain = styled.main`
	position: relative;
	padding: 100px 11.456vw 120px 11.456vw;
	display: flex;
	flex-direction: column;
	
	@media only screen and (max-width: 600px) {
		padding: 80px 4.267vw 80px 4.267vw;
	}
`;

export const StyledCasesPageHeadline = styled.h1`
  position: relative;
	min-width: 164px;
  height: 82px;
  font-weight: 700;
  font-size: 60px;
  line-height: 82px;
  color: #333333;
	margin-top: 30px;
`;
