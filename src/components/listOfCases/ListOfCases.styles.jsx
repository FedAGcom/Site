import styled from "styled-components";

export const StyledProjectTagsButtonSpan = styled.span`
	min-width: ${({ spanwidth }) => spanwidth};
	height: ${({ tag }) => (tag ? "" : "27px")};

	font-weight: 400;
	font-size: ${({ tag }) => (tag ? "16px" : "20px")};
	line-height: ${({ tag }) => (tag ? "" : "27px")};
	white-space: nowrap;

	color: #606060;

	flex: none;
	order: 0;
	flex-grow: 0;

	@media only screen and (max-width: 600px) {
		min-width: ${({ respspanwidth }) => respspanwidth};
		height: ${({ tag }) => (tag ? "19px" : "27px")};
		font-size: ${({ tag }) => (tag ? "14px" : "20px")};
		line-height: ${({ tag }) => (tag ? "19px" : "27px")};
	}
`;

export const StyledProjectTagsButton = styled.button`
	padding: 0 20px;
	min-width: fit-content;
	height: ${({ tag }) => (tag ? "39px" : "47px")};
	border-radius: 20px;
	border: 1px solid #aeaeae;
	flex: none;
	order: 0;
	flex-grow: 0;
	outline: none;
	background: white;
	@media only screen and (max-width: 600px) {
		padding: 0px 14px;
	}

	&.active {
		animation-name: faded;
		animation-timing-function: ease-in-out;
		animation-duration: 500ms;
		border: 1px solid #b81034;
		span {
			color: #b81034;
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
	padding: 0 40px 0 0;
	gap: 10px;
	width: 100%;
	position: relative;
	flex: none;

	flex-grow: 0;

	@media only screen and (max-width: 600px) {
		width: 100%;

		padding: 0 0 0 0;
	}
`;

export const StyledNameOfProject = styled.p`
	// min-width: ${({ namewidth, routepage }) =>	routepage === "cases" ? "480px" : namewidth[0]};
	font-weight: 700;
	font-size: 30px;
	line-height: 41px;
	color: #333333;
	flex: none;
	order: 0;
	flex-grow: 0;
	position: relative;

	@media only screen and (max-width: 600px) {
		min-width: ${({ namewidth }) => namewidth[1]};
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
	padding: 30px 0px 0px 30px;
	gap: 10px;
	height: 55%;
  justify-content: space-around;
	// justify-content: space-between;
	// min-width: ${({ routepage }) =>routepage === "cases" ? "480px" : "351px"};

	@media only screen and (max-width: 600px) {
		//min-width: 80.532vw;
		//min-height: 128px;
		padding: 20px 0px 0px 15px;
	}
`;

export const StyledArrowButton = styled.img`
	min-width: 65px;
	min-height: 65px;
	margin-top: 40px;
	object-fit: cover;
	justify-self: flex-end;
`;

export const StyledPreviewImageOfListElement = styled.img`
	width: 100%;
	max-width: 100%;
	// max-width: ${({ routepage }) =>	routepage === "cases" ? "538px" : "443px"};
	min-height: 35%;
	border-radius: 49px;
	object-fit: cover;

	@media only screen and (max-width: 600px) {
		// width: 91vw;
		// height: 218px;
		border-radius: 29px;
	}
`;

export const StyledPreviewOfListElement = styled.li`
	position: relative;
	display: flex;
	min-width: 35dvw;
	max-width: 35dvw;
	flex-direction: column;
	height: 643px;
	background: #ffffff;
	border: 1px solid #aeaeae;
	border-radius: 50px;
	.link-btn-svg {
		border-radius: 50%;
		margin: 0;
    @media only screen and (max-width: 1100px) {
      margin-top: ${({ routepage }) => (routepage === "cases" ? "40px" : "8%")};
	}
	}

	&:hover {
		background: #272727;
		p {
			color: white;
		}
		.btnTags {
			border: 1px solid #dadada;
			background-color: #272727;

			span {
				color: white;
			}
		}
		.svgCircle {
			fill: #272727;
		}

		.link-btn-svg {
			svg {
				circle {
					fill: #b81034;
					stroke: #b81034;
				}

				path {
					fill: white;
				}
			}
		}
	}
	@media only screen and (max-width: 1100px) {
		width: 50dvw;
		min-width: 50dvw;
	}
	@media only screen and (max-width: 800px) {
    ${({ routepage }) =>
		routepage === "cases" ? "width: 85dvw" : "width: 55dvw"};
    ${({ routepage }) =>
		routepage === "cases" ? "min-width: 85dvw;" : "min-width: 55dvw"};
	}
	@media only screen and (max-width: 600px) {
    ${({ routepage }) =>
		routepage === "cases" ? "min-width: 85dvw;" : "min-width: 70dvw"};
		min-height: 482px;
		max-height: 517px;
		border-radius: 30px;
	}
  @media only screen and (max-width: 420px) {
		min-width: 80dvw;
	}
`;
export const StyledListOfCases = styled.ul`
	position: relative;
	min-height: 643px;
	${({ routepage }) =>
		routepage === "cases" ? "" : "justify-content: center"};
	${({ routepage }) =>
	routepage === "cases" ? "width: 88dvw" : ""};
	${({ routepage }) =>
	routepage === "cases" ? "overflow: hidden" : ""};
	${({ routepage }) =>
	routepage === "cases" ? "flex-direction: row" : ""};
	${({ routepage }) =>
	routepage === "cases" ? "display: flex" : ""};
	flex-wrap: ${({ routepage }) => (routepage === "cases" ? "wrap" : "nowrap")};
	gap: ${({ routepage }) => (routepage === "cases" ? "32px" : "9dvw")};
	&::-webkit-scrollbar {
		display: none;
	}
  @media only screen and (max-width: 1100px) {
	${({ routepage }) =>
	routepage === "cases" ? "width: 50dvw" : ""};
	}
	@media only screen and (max-width: 800px) {
    ${({ routepage }) =>
		routepage === "cases" ? "width: 85dvw" : ""};
	}
	@media only screen and (max-width: 600px) {
    ${({ routepage }) =>
		routepage === "cases" ? "width: 85dvw;" : ""};
    min-height: 517px;
	}
  @media only screen and (max-width: 420px) {
	${({ routepage }) =>
	routepage === "cases" ? "width: 80dvw;" : ""};
	}
`;
export const StyledArrowSlider = styled.img`
${({ position }) => (position === "left" ? "left" : "right")}: 40px;
	width: 40px;
	position: absolute;
	margin-top: 25%;
	&:hover {
		opacity: 0.5;
		cursor: pointer;
	}
  @media only screen and (max-width: 1300px) {
    margin-top: 33%;
	}
  @media only screen and (max-width: 1100px) {
    margin-top: 40%;
		width: 50px;
	}
  @media only screen and (max-width: 800px) {
		margin-top: 55%
	}
  @media only screen and (max-width: 600px) {
		${({ position }) => (position === "left" ? "left" : "right")}: 10px;
	}
  @media only screen and (max-width: 480px) {
		${({ position }) => (position === "left" ? "left" : "right")}: 5px;
    width: 45px;
    margin-top: 65%
	}
  @media only screen and (max-width: 420px) {
		${({ position }) => (position === "left" ? "left" : "right")}: 0;
    width: 35px;
    margin-top: 80%
	}
`;
