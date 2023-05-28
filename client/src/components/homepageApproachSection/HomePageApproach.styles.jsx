import styled from "styled-components";

import approachImage from '../../assets/homepage/approach.png'

export const StyledHomePageApproachSection = styled.section`
	height: 733px;
	position: relative;
	top: 1576px;
	padding: 0 165px 0 165px;
	margin: 0 0 120px 0;
	width: 100vw;
	
	@media only screen and (max-width: 800px) {
		margin-bottom: 80px;
		padding: 0 16px;
		height: 1222px;
		top: 1408px
	}
`;

export const StyledHomePageApproachHeadline = styled.h2`
  width: 311px;
  height: 68px;
	position: absolute;
	left: 165px;
  font-weight: 600;
  font-size: 50px;
  line-height: 68px;
  color: #333333;

  @media only screen and (max-width: 800px) {
    width: 315px;
    height: 55px;
    left: 16px;
    font-size: 40px;
    line-height: 55px;
  }
`;

export const StyledHomePageApproachImage = styled.div`
	position: absolute;
  width: 730px;
  height: 419px;
  left: 545px;
  background: url(${approachImage});
	background-size: cover;
  border-radius: 20px;

  @media only screen and (max-width: 800px) {
    width: 375px;
    height: 226px;
    padding: 0;
	  left: 0;
    top: 75px;
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
    position: absolute;
    width: 635px;
    height: 321px;
    top: 78px;
		
		h3 {
      position: absolute;
			top: 50px;
			left: 30px;
      width: 531px;
      height: 76px;
		}
		
		p {
			position: absolute;
			top: 136px;
			left: 30px;
      width: 555px;
      height: 135px;
		}
	}
	
	&.small-info-block {
    position: absolute;
    top: 439px;
		
		h3 {
      position: absolute;
      height: 76px;
      left: 25px;
      top: 50px;
		}
		
		p {
      position: absolute;
      left: 25px;
      top: 146px;
		}
		
		&.first {
      width: 350px;
      height: 294px;
      h3 {
        width: 198px;
      }
      p {
        width: 297px;
        height: 108px;
      } 
		}
		
		&.second {
      width: 350px;
      height: 294px;
      left: 545px;
			h3 {
        width: 166px;
			}
			p {
        width: 298px;
        height: 108px;
			}
		}
		
		&.third {
      width: 350px;
      height: 294px;
      left: 925px;
			h3 {
        width: 201px;
			}
			p {
        width: 291px;
        height: 135px;
			}
		}
	}
	
	@media only screen and (max-width: 800px) {
		&.big-info-block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 30px;
      gap: 10px;

      position: absolute;
      width: 343px;
      height: 389px;
      left: 16px;
      top: 170px;
			
			h3 {
        width: 283px;
        height: 81px;
        font-size: 20px;
        line-height: 27px;
        flex: none;
        order: 0;
        flex-grow: 0;
			}
			
			p {
				top: 141px;
        width: 283px;
        height: 198px;
        font-size: 16px;
        line-height: 22px;
        flex: none;
        order: 1;
        flex-grow: 0;
			}
		}
		
		&.small-info-block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px 30px;
      gap: 10px;
      left: 16px;
      width: 343px;
      
			
			h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        flex: none;
        order: 0;
        flex-grow: 0;
        top: 40px;
        left: 30px;
			}
			
			p {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        flex: none;
        order: 1;
        flex-grow: 0;
        top: 87px;
        left: 30px;
			}
			
			&.first {
      	top: 570px;
        height: 193px;
				
				h3 {
	        width: 198px;
	        height: 27px;
				}
				p {
	        width: 283px;
	        height: 66px;
				}
			}
			
			&.second {
				left: 16px;
        top: 773px;
        height: 193px;
				
				h3 {
          width: 198px;
          height: 27px;
				}
				p {
          width: 283px;
          height: 66px;
				}
			}
			
			&.third {
        height: 237px;
				left: 16px;
				top: 976px;
				
				h3 {
          width: 201px;
          height: 27px;
				}
				p {
          width: 283px;
          height: 110px;
				}
			}
		}
	}
`;
