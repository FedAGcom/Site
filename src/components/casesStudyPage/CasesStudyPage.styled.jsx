import styled, {css} from 'styled-components';

const sameTitleStyles = css`
	min-height: 68px;
  font-weight: 600;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
`;

const sameParagraphStyles = css`
  min-height: 81px;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #333333;
`;

const sameCategoryStyles = css`
  padding: 10px 20px;
  border-radius: 20px;
  width: fit-content;
  min-height: 47px;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
`;

export const StyledCasesStudyPage = styled.div`
	position: relative;
  min-height: ${({ russian }) => russian === "true" ? "6434px" : "6380px"};
  @media only screen and (max-width: 600px) {
    min-height: ${({ russian }) => russian === "true" ? "7860px" : "8050px"};
  }
	h2 {
		${sameTitleStyles};
		margin-bottom: 31px;
	}
	background: palegoldenrod;
`;

export const StyledCasesStudyPageMain = styled.main`
	position: relative;
	padding: 99px 11.467vw 0 11.467vw;
  @media only screen and (max-width: 600px) {
  }
	background: salmon;
`;

export const StyledCasesStudyMainPreviewSection = styled.section`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 77.083vw;
	background: palegreen;
	align-items: center;
	margin: 30px 0 100px 0;
	.hero-text {
		max-width: 28.333vw;
		position: relative;
		display: flex;
		flex-direction: column;
    justify-content: flex-start;
		gap: 10px;
		
    h1 {
      min-height: 82px;
      font-weight: 700;
      font-size: 60px;
      line-height: 82px;
      color: #333333;
    }
    p {
      ${sameParagraphStyles}
    }
    div.category {
      ${sameCategoryStyles};
      color: #606060;
      border: 1px solid #AEAEAE;
    }
	}
  @media only screen and (max-width: 600px) {
    flex-direction: row-reverse;
  }
`;

export const StyledCasesStudyClientSection = styled.section`
  position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 30px;
	background: darkseagreen;
	margin: 100px 0;
	h2 {
    ${sameTitleStyles}
	}
	.info-block {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 50px 100px 50px 30px;
		justify-content: space-between;
    width: 77.083vw;
    min-height: 181px;
    background: #F2F2F2;
    border-radius: 30px;
		
		p.name {
      max-width: 32.986vw;
      min-height: 41px;
      font-weight: 700;
      font-size: 30px;
      line-height: 41px;
      color: #333333;
		}
		
		p.address {
      max-width: 32.986vw;
      ${sameParagraphStyles};
		}
	}
`;

export const StyledCasesStudyProjectSummarySection = styled.section`
	h2 {
		${sameTitleStyles};
	}
	p {
		${sameParagraphStyles};
		margin: 30px 0;
		max-width: 57.292vw;
	}
	div.table {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 60px;
		div.column {
			position: relative;
			display: flex;
			flex-direction: column;
			gap: 12px;
			justify-content: flex-start;
			
			h3.column-title {
        width: fit-content;
        height: 38px;
        font-weight: 600;
        font-size: 28px;
        line-height: 38px;
        color: #333333;
			}
			p.column-data {
				margin: 0;
        width: fit-content;
        min-height: 38px;
        font-weight: 600;
        font-size: 28px;
        line-height: 38px;
        color: #B81034;
				display: flex;
				flex-direction: row;
				gap: 15px;
				.category {
					${sameCategoryStyles};
          color: #B81034;
          border: 1px solid #B81034;
				}
			}
		}
	}
	img.overview {
		width: 77.083vw;
		height: 600px;
	}
	background: darkkhaki;
`;

export const StyledCasesStudyTaskImplementationSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  background: darkseagreen;
  margin: 100px 0;
	width: 57.292vw;
	h2 {
		${sameTitleStyles};
	}
	p {
		${sameParagraphStyles};
	}
`;

export const StyledCasesStudyFunctionality = styled.section`
  margin: 100px 0;
	position: relative;
	h2 {
		${sameTitleStyles}
	}
	background: #F1CFD6;
	
	ul {
		margin: 30px 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 15px;
		li {
			width: 37.5vw;
			display: flex;
			flex-direction: row;
			gap: 5px;
			p {
				${sameParagraphStyles};
				min-height: fit-content;
			}
		}
	}
	
	.case-images {
		display: flex;
		flex-direction: row;
    justify-content: space-between;
		.smaller-images {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.smallest-images {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
`;

export const StyledCasesStudyProjectResults = styled.section`
  margin: 100px 0;
	position: relative;
	background: aquamarine;
	h2 {
		${sameTitleStyles};
	}
	p {
		margin: 30px 0;
		${sameParagraphStyles};
	}
  ul {
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    li {
      width: 37.5vw;
      display: flex;
      flex-direction: row;
      gap: 5px;
      p {
        ${sameParagraphStyles};
        min-height: fit-content;
	      margin: 0;
      }
    }
  }
`;

export const StyledCasesStudyCustomerFeedback = styled.section`
	h2 {
		${sameTitleStyles};
		margin-bottom: 30px;
	}
	div.customer-block {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
    .customer-info {
      width: 24.306vw;
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 18px;
      div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p.name {
          height: 33px;
          font-weight: 600;
          font-size: 24px;
          line-height: 33px;
          color: #000000;
        }
        p.position {
          height: 27px;
          font-weight: 400;
          font-size: 20px;
          line-height: 27px;
          color: #000000;
        }
      }
    }
		p.context {
			${sameParagraphStyles};
			margin: 0;
			min-height: fit-content;
			width: 50.694vw;
		}
	}
`;