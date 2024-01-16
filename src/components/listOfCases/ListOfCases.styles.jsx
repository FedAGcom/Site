import styled from "styled-components";

export const StyledProjectTagsButtonSpan = styled.span`
	min-width: ${({spanwidth}) => spanwidth};
  height: ${({ tag }) => tag ? "" : "27px"};

  font-weight: 400;
  font-size: ${({ tag }) => tag ? "16px" : "20px"};
  line-height: ${({ tag }) => tag ? "" : "27px"};
  white-space: nowrap;

  color: #606060;

  flex: none;
  order: 0;
  flex-grow: 0;
	
	@media only screen and (max-width: 600px) {
    min-width: ${({respspanwidth}) => respspanwidth};
		height: ${({tag}) => tag ? "19px" : "27px"};
		font-size: ${({tag}) => tag ? "14px" : "20px"};
    line-height: ${({tag}) => tag ? "19px" : "27px"};
	}
`;

export const StyledProjectTagsButton = styled.button`
  padding: 0 20px;
	min-width: fit-content;
  height: ${({tag}) => tag ? "39px" : "47px"};
  border-radius: 20px;
  border: 1px solid #AEAEAE;
  flex: none;
  order: 0;
  flex-grow: 0;
  outline: none;
  background: white;


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
  gap: 6px;
  width: 351px;
  // overflow: hidden;
	max-height: 89px;
	position: relative;
  flex: none;
  // order: 1;
  flex-grow: 0;
	
	@media only screen and (max-width: 600px) {
    width: 79.465vw;
    height: 83px;
	}
`;

export const StyledNameOfProject = styled.p`
  min-width: ${({ namewidth, routepage }) => (routepage === "cases") ? "480px" : namewidth[0]};
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  color: #333333;
  flex: none;
  order: 0;
  flex-grow: 0;
	position: relative;
	
  @media only screen and (max-width: 600px) {
    min-width: ${({ namewidth}) =>  namewidth[1]};
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
  min-width: ${({ routepage }) => (routepage === "cases") ? "480px" : "351px"};
  min-height: 140px;
  left: 30px;
  top: 359px;
	
	@media only screen and (max-width: 600px) {
    min-width: 80.532vw;
    min-height: 128px;
    left: 15px;
    top: 239px;
	}
`;

export const StyledArrowButton = styled.img`
  min-width: 65px;
  min-height: 65px;
  margin-top: 40px;
  object-fit: cover;
  justify-self: flex-end;
`

export const StyledPreviewImageOfListElement = styled.img`
  max-width: ${({ routepage }) => (routepage === "cases") ? "538px" : "443px"};
  height: 328px;
  border-radius: 49px;
	object-fit: cover;
	
	@media only screen and (max-width: 600px) {
    width: 91vw;
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
	.link-btn-svg {
    position: absolute;
    bottom: 40px;
    left: 30px;
    border-radius: 50%;

    @media only screen and (max-width: 600px) {
      left: 15px;
      bottom: 30px;
    }
	}
	
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
    .svgCircle{
      fill: #272727
    }
		
    .link-btn-svg {
      svg {
        circle {
          fill: #B81034;
          stroke: #B81034;
        }

        path {
          fill: white;
        }
      }
    }
	}
	
	@media only screen and (max-width: 600px){
    min-width: 91.465vw;
    height: 482px;
    border-radius: 30px;
		&:last-child {
      height: 517px;
		}
	}
`;

export const StyledListOfCases = styled.ul`
	position: relative;
	top: ${({ top }) => top};
	min-height: 643px;
	width: 88.542vw;
	overflow: scroll;
	flex-direction: row;
	flex-wrap: ${({ routepage }) => routepage === "cases" ? "wrap" : "nowrap"};
  display: flex;
	gap: 31px;
  &::-webkit-scrollbar {
    display: none;
  }
	@media only screen and (max-width: 600px) {
		min-height: 517px;
		width: 91.467vw;
	}
`;

