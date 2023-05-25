import styled from "styled-components";

import makarenkoGleb from "../../assets/employees/gleb.png";
import fedor from "../../assets/employees/fedor.png";
import alexander from "../../assets/employees/alexander.png";
import person1 from "../../assets/employees/person1.png";
import person2 from "../../assets/employees/person2.png";
import person3 from "../../assets/employees/person3.png";
import person4 from "../../assets/employees/person4.png";
import person5 from "../../assets/employees/person5.png";

const setBackgroundImage = (name) => {
	switch(name) {
		case "Alexander":
			return alexander
		case "Fedor":
			return fedor
		case "Gleb Makarenko":
			return makarenkoGleb
		case "person1":
			return person1
		case "person2":
			return person2
		case "person3":
			return person3
		case "person4":
			return person4
		case "person5":
			return person5

		default:
			return ""
	}
}

export const StyledPositionOfGeneralEmployee = styled.p`
  position: absolute;
	top: 65px;
	left: 20px;
	font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
`;

export const StyledEmployeeNameOfInfoPart = styled.p`
	position: absolute;
  top: 30px;
	left: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
`;

export const StyledImageOfGeneralEmployee = styled.div`
  position: absolute;
	top: 0;
	height: 164px;
  width: 160px;
  border-radius: 30px;
	z-index: 0;
	background-image: url(${({ name }) => setBackgroundImage(name)});
  background-size: cover;
	&.read {
    z-index: 2;
  }
	@media only screen and (max-width: 800px) {
    &:hover {
      height: 164px;
      width: 160px;
      top: 0;
    }
	}
`;


export const StyledInfoAboutEmployee = styled.div`
  display: none;
	z-index: 1;
	position: relative;
	top: 133px;
	background-color: #B81034;
	height: 116px;
  width: 285px;
  border-radius: 0 30px 30px 30px;
	
	@media only screen and (max-width: 800px) {
		height: 110px;
	}
`;

export const StyledContainerForEmployeesImage = styled.div`
	width: 160px;
  height: 164px;
  flex: none;
  order: 0;
  flex-grow: 0;
  transition: all 300ms;
	
  &:not(.disable):hover {
    position: relative;
    top: 30px;
    width: 160px;
	  transform: scaleY(1.1768);
    border-radius: 30px;
  }
	
	.background-image {
		&:hover {
      overflow: hidden;
      width: 160px;
      height: 164px;
      border-radius: inherit;
      transition: all 100ms;
      transform: translateZ(0);

      .background-img {
        transform: scale(1.1);
      }
		}
	}
	&.active {
		position: relative;
		top: 30px;
    transform: scaleY(1.1768);
		
		.employee-info {
			animation: fadeInDown 1s;
			display: block;
		}
    .read {
      width: 160px;
      border-radius: 30px;
    }
	}
  @keyframes fadeInDown {
    0% {
      transform: translateY(-100px);
	    opacity: 0.2;
    }
	  80% {
      opacity: 0.6;
	  }
    100% {
      transform: translateY(0);
      opacity: 1;
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
	
	@media only screen and (max-width: 800px) {
    gap: 15px;
		overflow: scroll;
		scroll-behavior: smooth;
    width: 335px;
    height: 303px;
    left: 16px;
    top: 1499px;
		
    &::-webkit-scrollbar {
      display: none;
    }
	}
`;

export const StyledTitleOfMainEmployees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  position: absolute;
  width: ${({ cto }) => (cto) ? "174px" : "96px"};
  height: 87px;
  left: ${({ cto }) => (cto) ? "381px" : "0"} ;
  top: 403px;
	
	@media only screen and (max-width: 800px) {
		position: relative;
		top: ${({ cto }) => (cto) ? "30px" : "40px"};
    left: ${({ cto }) => (cto) ? "0" : "0"} ;
	}
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
	height: ${({ cto }) => (cto) ? "360px" : "332px"};
  width: ${({ cto }) => (cto) ? "350px" : "321px"};
	left: ${({ cto }) => (cto) ? "382px" : "29px"};
  top: ${({ cto }) => (cto) ? "0" : "36px"};
  border-radius: 30px;
	z-index: 1;
	
	@media only screen and (max-width: 800px) {
    height: ${({ cto }) => (cto) ? "332px" : "348px"};
    width: ${({ cto }) => (cto) ? "322px" : "338px"};
		left: ${({ cto }) => (cto) ? "0" : "5px"};
    top: ${({ cto }) => (cto) ? "493px" : "16px"};
	} 
`;

export const StyledDivForMainEmployee = styled.div`
	width: 350px;
	height: 490px;
	
	@media only screen and (max-width: 800px) {
		width: 343px;
		height: 463px;
	}
`;

export const StyledContainerForMainEmployees = styled.div`
	display: flex;
	flex-direction: row;
	width: 730px;
	height: 490px;
	position: absolute;
	top: 85px;
	gap: 30px;
	
	@media only screen and (max-width: 800px) {
		width: 343px;
		top: 527px;
		flex-direction: column;
		height: 942px;
	}
`;

export const StyledRectangleForEmployees = styled.div`
  position: relative;
  width: ${({ cto }) => (cto) ? "328px" : "350px"};
  height: ${({ cto }) => (cto) ? "383px" : "360px"};
  top: ${({ cto }) => (cto) ? "10px" : "0"};
	left: ${({ cto }) => (cto) ? "22px" : "0"};
  background: #B81034;
  border-radius: 30px;
	
	@media only screen and (max-width: 800px) {
    position: relative;
    width: ${({ cto }) => (cto) ? "338px" : "326px"};
    height: ${({ cto }) => (cto) ? "348px" : "336px"};
    left: ${({ cto }) => (cto) ? "5px" : "0"};
	}
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
	
	@media only screen and (max-width: 800px) {
		left: 0;
		top: 75px;
		padding: 0 16px;
	}
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
