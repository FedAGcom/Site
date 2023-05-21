import styled from "styled-components";

export const StyledImageOfGeneralEmployee = styled.img`
  position: absolute;
	top: 0;
	height: 164px;
  width: 160px;
  border-radius: 30px;
	z-index: 1;
	
	&:hover {
    height: 193px;
    width: 160px;
    top: 10px;
    border-radius: 30px;
  }
	
	&.active {
		z-index: 3;
	}
`;

export const StyledPositionOfGeneralEmployee = styled.p`
  position: absolute;
	top: 75px;
	left: 20px;
	font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
`;

export const StyledEmployeeNameOfInfoPart = styled.p`
	position: absolute;
  top: 40px;
	left: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
`;

export const StyledInfoAboutEmployee = styled.div`
  display: none;
	z-index: 2;
	position: relative;
	top: 173px;
	background-color: #B81034;
	height: 140px;
  width: 285px;
  border-radius: 0 30px 30px 30px;
`;

export const StyledContainerForEmployeesImage = styled.div`
	width: 160px;
  height: 164px;
  flex: none;
  order: 0;
  flex-grow: 0;
	
	&.active {
		.employee-info {
			display: block;
			
		}
		
		.active {
      height: 193px;
      width: 160px;
      top: 10px;
      border-radius: 30px;
		}
	}
`;

export const StyledFrameOfGeneralEmployees = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 30px;

  position: absolute;
  width: 1110px;
  height: 164px;
  left: 165px;
  top: 605px;
`;

export const StyledTitleOfMainEmployees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  position: absolute;
  width: ${({ cto }) => (cto) ? "174px" : "96px"};
  height: 87px;
  left: ${({ cto }) => (cto) ? "546px" : "165px"} ;
  top: 488px;
`;

export const StyledPositionNameOfMainEmployees = styled.p`
  width: 58px;
  height: 38px;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: #333333;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const StyledNameOfMainEmployees = styled.p`
  height: 49px;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  color: #B81034;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: ${({ cto }) => (cto) ? "174px" : "96px"};
`;

export const StyledImageOfMainEmployees = styled.img`
  position: absolute;
  width: ${({ cto }) => (cto) ? "350px" : "321px"};
  height: ${({ cto }) => (cto) ? "360px" : "332px"};
  left: ${({ cto }) => (cto) ? "546px" : "195px"};
  top: ${({ cto }) => (cto) ? "85px" : "121px"};
  border-radius: 30px;
	z-index: 1;
`;

export const StyledContainerForMainEmployee = styled.div`
	
`;

export const StyledRectangleForEmployees = styled.div`
  position: absolute;
  width: 350px;
  height: 360px;
  top: ${({ cto }) => (cto) ? "95px" : "85px"};
	left: ${({ cto }) => (cto) ? "568px" : "165px"};
  background: #B81034;
  border-radius: 30px;
`;

export const StyledScoreDefinition = styled.p`
  width: 315px;
  height: 76px;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: #333333;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const StyledScorePercentage = styled.p`
  width: 222px;
  height: 109px;
  font-weight: 900;
  font-size: 80px;
  line-height: 109px;
  color: #B81034;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const StyledLayoutForScoreOfEmployees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 315px;
  height: 185px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const StyledScoreOfEmployeesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
	
  position: absolute;
  width: 315px;
  height: 390px;
  left: 926px;
  top: 85px;
`;

export const StyledEmployeesSectionHeadline = styled.p`
  position: absolute;
  width: 581px;
  height: 68px;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
	&.mobile {
		display: none;
	}
	
	@media only screen and (max-width: 800px) {
		&.desktop {
			display: none;
		}
		&.mobile {
			display: block;
		}
    width: 166px;
    height: 55px;
    left: 16px;
		content: "About us";
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    color: #333333;
	}
`;

export const StyledEmployeesSection = styled.section`
	height: 769px;
	width: 100vw;
	position: absolute;
	top: 3219px;
	padding: 0 165px;
	margin-top: 120px;
	
	@media only screen and (max-width: 800px) {
		width: 100vw;
		height: 1663px;
		top: 3348px;
		margin-top: 80px;
		padding: 0 16px;
	}
`;
