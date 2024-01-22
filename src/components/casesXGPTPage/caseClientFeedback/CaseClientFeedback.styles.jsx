import styled from "styled-components";

export const ClientFeedbackMain = styled.div`
	display: flex;
	flex-direction: row;
    justify-content: space-between;
    margin-top:30px;
    gap:10px;
    min-height: 208px;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

export const ClientFeedbackH = styled.h3`
margin-left:15px;
font-weight: 400;
font-size: 24px;
line-height: 32.74px;
align-self: center;

`
export const ClientFeedbackImg = styled.h3`
 width:68px;
 height:68px;
 border-radius: 50%;

 box-shadow: 0px 2px 21px 0px #2D2D2D47;
`
export const ClientAboutContainer = styled.div`
    display: flex;
    min-width: 302px;
    align-self: flex-start;
`

export const ClientFeedbackP = styled.p`
    font-size: 20px;
	font-weight: 400;
	color: #333333;
    line-height: 27.28px;
    max-width: 730px;
    @media (max-width: 900px) {
        font-size: 18px;
        line-height: 24.55px;
	}
`