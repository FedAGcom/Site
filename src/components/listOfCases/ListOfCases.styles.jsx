import styled from "styled-components";

import hoverArrowBtn from "../../assets/button_arrow2.svg";
import defaultArrowBtn from "../../assets/button_arrow1.svg";
import hoveredDefaultBtn from "../../assets/button_arrow3.svg";
import clickedDefaultBtn from "../../assets/button_arrow4.svg";

export const StyledButtonOfPreview = styled.img`
	width: 65px;
	height: 65px;
	position: absolute;
	bottom: 40px;
	left: 30px;
	content: url(${defaultArrowBtn});
	border-radius: 50%;

	@media only screen and (max-width: 800px) {
		left: 15px;
		bottom: 30px;
	}
`;

export const StyledProjectTagsButtonSpan = styled.span`
	width: ${({spanwidth}) => spanwidth};
  height: ${({ tag }) => tag ? "22px" : "27px"};

  font-weight: 400;
  font-size: ${({ tag }) => tag ? "16px" : "20px"};
  line-height: ${({ tag }) => tag ? "22px" : "27px"};

  color: #606060;

  flex: none;
  order: 0;
  flex-grow: 0;
	
	@media only screen and (max-width: 800px) {
    width: ${({respspanwidth}) => respspanwidth};

		height: ${({tag}) => tag ? "19px" : "27px"};
		font-size: ${({tag}) => tag ? "14px" : "20px"};
    line-height: ${({tag}) => tag ? "19px" : "27px"};
	}
`;

export const StyledProjectTagsButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 20px;
  width: ${({ btnwidth }) => btnwidth};
  height: ${({tag}) => tag ? "39px" : "47px"};
  border-radius: 20px;
  border: 1px solid #AEAEAE;
  flex: none;
  order: 0;
  flex-grow: 0;
  outline: none;
  background: white;

  @media only screen and (max-width: 800px) {
    width: ${({ respbtnwidth }) => respbtnwidth};
  }

  &.active {
    animation-name: faded;
    animation-timing-function: ease-in-out;
    animation-duration: 500ms;
    border: 1px solid #B81034;
    span {
      color: #B81034;
    }

    @-webkit-keyframes faded {
      1% {
        transform: translateY(1px);
      }
      50% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
`;

export const StyledTechStackOfCase = styled.div`
  display: flex;
  flex-direction: row;
	flex-wrap: wrap;
  align-items: flex-start;
  padding: 0;
  gap: 5px;
  width: 351px;
	position: relative;
  flex: none;
  order: 1;
  flex-grow: 0;
	
	@media only screen and (max-width: 800px) {
    width: 298px;
    height: 83px;
	}
`;

export const StyledNameOfProject = styled.p`
  width: ${({ namewidth, routepage }) => (routepage === "cases") ? "480px" : namewidth[0]};
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  color: #333333;
  flex: none;
  order: 0;
  flex-grow: 0;
	position: relative;
	
  @media only screen and (max-width: 800px) {
    width: ${({ namewidth}) =>  namewidth[1]};
    font-size: 26px;
    line-height: 35px;
	  &:nth-child(3) {
      height: 70px;
	  }
  }
`;

export const StyledAboutProjectPartOfCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 10px;

  position: absolute;
  width: ${({ routepage }) => (routepage === "cases") ? "480px" : "351px"};
  height: 140px;
  left: 30px;
  top: 359px;
	
	@media only screen and (max-width: 800px) {
    width: 302px;
    height: 128px;
    left: 15px;
    top: 239px;
	}
`;

export const StyledPreviewImageOfListElement = styled.img`
  width: ${({ routepage }) => (routepage === "cases") ? "538px" : "443px"};
  height: 328px;
  border-radius: 49px;
	object-fit: cover;
	
	@media only screen and (max-width: 800px) {
    width: 342px;
		height: 218px;
    border-radius: 29px;
	}
`;

export const StyledPreviewOfListElement = styled.li`
	position: relative;
	display: flex;
  width: ${({ routepage }) => (routepage === "cases") ? "540px" : "445px"};
  height: 643px;
	flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #AEAEAE;
  border-radius: 50px;
	
	&:hover {
		background: #272727;
		p {
			color: white;
		}
		.btnTags {
      border: 1px solid #DADADA;
      background-color: #272727;
			
			span {
				color: white;
			}
		}
		.button-arrow {
      animation-timing-function: ease-out;
      animation-duration: 500ms;
			animation-name: faded;
      content: url(${hoverArrowBtn});
			
      &:hover {
        content: url(${hoveredDefaultBtn});
      }

      &:active {
        content: url(${clickedDefaultBtn});
        animation-name: faded;
        animation-delay: 200ms;
        animation-timing-function: ease-out;
        animation-duration: 150ms;
      }

      @-webkit-keyframes faded {
        1% {
          transform: translateY(1px);
        }
        50% {
          transform: translateY(2px);
        }
        100% {
          transform: translateY(0px);
        }
      }
		}
	}
	
	@media only screen and (max-width: 800px){
    width: 343px;
    height: 482px;
    border-radius: 30px;
		&:last-child {
      height: 517px;
		}
	}
`;

export const StyledListOfCases = styled.ul`
	position: absolute;
	top: ${({ top }) => top}; // 155px
	height: 643px;
	width: 88.542%;
	overflow: scroll;
	flex-direction: row;
  display: flex;
	gap: 31px;
  &::-webkit-scrollbar {
    display: none;
  }
	
	@media only screen and (max-width: 800px) {
		height: 517px;
		width: 343px;
	}
`;

