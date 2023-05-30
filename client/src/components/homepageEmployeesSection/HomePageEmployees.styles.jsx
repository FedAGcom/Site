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
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
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
`;

export const StyledInfoAboutEmployee = styled.div`
  display: none;
	z-index: 1;
	position: absolute;
	top: 173px;
	background-color: #B81034;
	height: 116px;
  width: 285px;
  border-radius: 0 30px 30px 30px;
	
	@media only screen and (max-width: 800px) {
		height: 110px;
	}
`;

export const StyledContainerForEmployeesImage = styled.div`
  z-index: 1;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 164px;
  max-height: 193px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 30px;
`;

export const StyledGeneralEmployeeBlock = styled.div`
	&:hover {
		position: relative;
		
		.container-for-image {
      &:not(.disable) {
        position: relative;
        top: 27px;
        transform: scaleY(1.1768);
        transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	      
        overflow-x: hidden;
        z-index: 2;

        .background-img-container {
          transform: scaleX(1.1);
          transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
      }
		}
	}
	
	.container-for-image {
    &.active {
      position: relative;
      top: 27px;
      transform: scaleY(1.1768);
      overflow-x: hidden;
      z-index: 3;


      .background-img-container {
        -webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
        filter: grayscale(0);
        transform: scaleX(1.1) ;
        transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    }
	}
	
  .employee-info {
    &.active {
      display: block;
      animation: fadeInDown 1s;
    }
  }
	
  @keyframes fadeInDown {
    0% {
      transform: translateY(-130px);
      opacity: 0.2;
    }
    80% {
      opacity: 0.8;
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
    width: 89.333vw;
    height: 303px;
    left: 4.267vw;
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
    width: ${({ cto }) => (cto) ? "85.867vw" : "90.133vw"};
		left: ${({ cto }) => (cto) ? "0" : "1.333vw"};
    top: ${({ cto }) => (cto) ? "493px" : "4.267vw"};
	} 
`;

export const StyledDivForMainEmployee = styled.div`
	width: 350px;
	height: 490px;
	
	@media only screen and (max-width: 600px) {
		width: 91.467vw;
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
		width: 91.467vw;
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
    width: ${({ cto }) => (cto) ? "90.133vw" : "86.933vw"};
    height: ${({ cto }) => (cto) ? "348px" : "336px"};
    left: ${({ cto }) => (cto) ? "1.333vw" : "0"};
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
  @media only screen and (max-width: 600px) {
    width: 84vw;
  }
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
	@media only screen and (max-width: 600px) {
		width: 84vw;
	}
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
		padding: 0 4.267vw;
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
	
	@media only screen and (max-width: 600px) {
		&.desktop {
			display: none;
		}
		&.mobile {
			display: block;
			width: 52vw;
		}
    width: 44.267vw;
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
		padding: 0 4.267vw;
	}
`;
