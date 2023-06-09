import styled from 'styled-components';

export const StyledCareerPageOpenPositionsSection = styled.section`
	position: relative;
	margin: 120px 0;
  padding: 0 11.458vw;
	display: flex;
	flex-direction: column;
	
	.all-positions {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	@media only screen and (max-width: 600px) {
		margin: 80px 0;
		padding: 0;		
		.all-positions {
			flex-wrap: nowrap;
			flex-direction: column;
		}
	}
`;

export const StyledCareerPageOpenPositionsHeadline = styled.h2`
  position: relative;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: #333333;
	margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    width: 85vw;
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    margin: 0 4.267vw 30px 4.267vw;
  }
  @media only screen and (max-width: 338px) {
  	font-size: 35px;
  }
`;

export const StyledCareerPageOpenPositionsBlock = styled.div`
	position: relative;
	padding: 50px 30px;
  background-color: #FFFFFF;
  border: 1px solid #AEAEAE;
  border-radius: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&.big-position-block {
		width: 635px;
    height: 385px;
		margin-right: 30px;
	}
	&.small-position-block {
		top: 30px;
		width: 445px;
		height: 435px;
	}
  .headline-position-block {
    height: 27px;
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #333333;
	  margin-bottom: 18px;
	  mark {
		  background: transparent;
		  color: #B81034;
	  }
    @media only screen and (max-width: 600px) {
      font-size: 19px;
      line-height: 27px;
    }
    @media only screen and (max-width: 361px) {
      font-size: 16px;
      line-height: 27px;
    }
  }
	.paragraph-position-block {
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
		margin-bottom: 10px;
		@media only screen and (max-width: 600px) {
      font-size: 16px;
      line-height: 22px;
		}
	}
	.career-btn-image {
		width: 65px;
		height: 65px;
	}
	@media only screen and (max-width: 600px) {
    &.big-position-block, &.small-position-block {
      width: 91.2vw;
      height: 414px;
      margin: 0 4.267vw;
    }
	}
`;

export const StyledCareerPageOpenPositionsLastBlock = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 10px;
  align-items: flex-start;
  padding: 50px 30px;
  width: 635px;
  height: 229px;
  background: #F2F2F2;
  border-radius: 20px;
	p.title {
    height: 38px;
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: #333333;
	}
	p.paragraph {
    height: 81px;
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #333333;
    mark {
      background: transparent;
      color: #B81034;
    }
	}
	@media only screen and (max-width: 600px) {
    width: 91.2vw;
    min-height: 310px;
    margin: 60px 4.267vw 0 4.267vw;
	}
`;

export const StyledCareerPageOpenPositionsEmail = styled.form`
	margin-top: 60px;
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
  width: 1110px;
  height: 225px;
  background: #272727;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
	gap: 130px;
	.leave-email-section-of-career-page {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		max-width: 715px;
		gap: 15px;
    .leave-email-section-headline {
      position: relative;
      width: 100%;
      min-height: 38px;
      font-family: 'Nunito Sans', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      color: #FFFFFF;
		}
	}
	.logo-in-email-request {
		position: relative;
		width: 135px;
		height: 133px;
	}
  @media only screen and (max-width: 600px) {
	  min-height: 460px;
  	flex-direction: column-reverse;
	  border-radius: 0;
		gap: 25px;
	  width: 100vw;
    .leave-email-section-of-career-page {
	    max-width: 100vw;
	    padding: 0 4.267vw;
	    
      .leave-email-section-headline {
        width: 91.466vw;
        min-height: 66px;
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        flex: none;
        order: 0;
        flex-grow: 0;
      }
    }

    .logo-in-email-request {
    }
  }
`;