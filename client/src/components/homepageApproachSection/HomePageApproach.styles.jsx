import styled from "styled-components";

import approachImage from '../../assets/homepage/approach.png'

export const StyledHomePageApproachSection = styled.section`
	position: relative;
	min-height: 100px;
	padding: 0 11.458vw;
	margin: 120px 0;
	width: 100vw;
	max-height: 733px;
	
	@media only screen and (max-width: 600px) {
		margin: 80px 0;
		padding: 0 4.267vw;
    max-height: ${({ russian }) => russian === "true" ? "1237px" : "1222px"};
	}
  @media only screen and (max-width: 374px) {
    max-height: ${({ russian }) => russian === "true" ? "1334px" : "1222px"};
  }
`;

export const StyledHomePageApproachHeadline = styled.h2`
  width: 311px;
  min-height: 68px;
	position: relative;
  font-weight: 600;
  font-size: 50px;
  line-height: 68px;
  color: #333333;

  @media only screen and (max-width: 600px) {
    width: 84vw;
    min-height: 55px;
    font-size: 40px;
    line-height: 55px;
  }
`;

export const StyledHomePageApproachImage = styled.div`
	position: relative;
  width: 730px;
  min-height: 419px;
	top: -68px;
  left: 26.447vw;
  background: url(${approachImage});
	background-size: cover;
  border-radius: 20px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    min-height: 226px;
	  top: 20px;
	  left: -4.267vw;
  }
`;

export const StyledHomePageApproachInfoBlock = styled.div`
  background: #F2F2F2;
  border-radius: 20px;
	
	h3 {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: #333333;
	}
	p {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #333333;
	}
	
	&.big-info-block {
    position: relative;
    width: 635px;
    min-height: 321px;
    top: -409px;

    h3 {
      position: relative;
			padding-top: 50px;
			left: 30px;
      width: 531px;
      min-height: 76px;
		}
		
		p {
			position: relative;
			padding-top: 10px;
			left: 30px;
      width: 555px;
      min-height: 135px;
		}
	}
	&.small-info-block {
    position: relative;
    top: -369px;
		
		h3 {
      position: relative;
      min-height: 76px;
      left: 25px;
      padding-top: 50px;
		}
		
		p {
      position: relative;
      left: 25px;
      padding-top: 20px;
		}
		
		&.first {
      width: 350px;
      min-height: 294px;
      h3 {
        width: 198px;
      }
      p {
        width: 297px;
        min-height: 108px;
      } 
		}
		
		&.second {
      width: 350px;
      min-height: 294px;
			top: -663px;
      left: 380px;
			h3 {
        width: 166px;
			}
			p {
        width: 298px;
        min-height: 108px;
			}
		}
		
		&.third {
      width: 350px;
      min-height: 294px;
      left: 760px;
			top: -957px;
			h3 {
        width: 201px;
			}
			p {
        width: 291px;
        min-height: 135px;
			}
		}
	}
	
	@media only screen and (max-width: 600px) {
		&.big-info-block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
			top: -101px;
      position: relative;
      width: 91.467vw;
      min-height: 389px;
			h3 {
        width: 75.467vw;
        min-height: 81px;
        font-size: 20px;
        line-height: 27px;
			}
			p {
        width: 75.467vw;
        min-height: 198px;
        font-size: 16px;
        line-height: 22px;
			}
		}
		&.small-info-block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 91.457vw;
			
			h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
			}
			p {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
			}
			&.first {
        width: 91.457vw;
      	top: -91px;
        min-height: 193px;
				
				h3 {
	        width: 52.8vw;
	        min-height: 27px;
				}
				p {
	        width: 75.467vw;
	        min-height: 66px;
				}
			}
			
			&.second {
        width: 91.457vw;
        top: -81px;
        min-height: 193px;
        left: 0;
				
				
				h3 {
          width: 52.8vw;
          min-height: 27px;
				}
				p {
          width: 75.467vw;
          min-height: 66px;
				}
			}
			
			&.third {
        width: 91.457vw;
        min-height: 237px;
				top: -71px;
				left: 0;
				
				h3 {
          width: 53.6vw;
          min-height: 27px;
				}
				p {
          width: 75.467vw;
          min-height: 110px;
				}
			}
		}
	}
`;
