import styled from "styled-components";

export const StyledApplicationRequestListOfInputs = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 80px;
  left: 665px;
  align-items: flex-start;
  padding: 0;
  gap: 15px;
  @media only screen and (max-width: 600px) {
	  top: 220px;
	  left: 4.267vw;
  }
`;

export const StyledApplicationRequestElementOfInputList = styled.li`
  &:nth-child(1) {
	  margin-right: 15px;
    @media only screen and (max-width: 600px) {
			margin-right: 0;
    }
  }
  
`;

export const StyledApplicationRequestLabel = styled.label`
  display: flex;
	color: white;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 2px;
`;

export const StyledApplicationRequestInput = styled.input`
  height: 40px;
	padding: 10px 10px;
  width: ${({ naming }) => naming === "true" ? "160px" : "350px"};
	
  @media only screen and (max-width: 600px) {
		width: 91.333vw;
  }
`;

export const StyledApplicationRequestTextArea = styled.textarea`
  width: 350px;
	height: 80px;
	padding: 10px 10px;
  background: #FFFFFF;
  border-radius: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
	
	@media only screen and (max-width: 600px) {
    width: 91.333vw;
	}
`;

export const StyledApplicationRequestForm= styled.form`
  
`;
export const StyledApplicationRequestContainer = styled.section`
  position: relative;
  width: 77vw;
  height: 583px;
	left: 11.458vw;
	margin: 120px 0;
  background: #272727;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 802px;
	  margin: 80px 0;
	  left: 0;
  }
`;
export const StyledApplicationRequestHeadline = styled.p`
  position: relative;
  width: 515px;
  height: 136px;
  left: 95px;
  top: 224px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
	
	@media only screen and (max-width: 600px) {
    position: relative;
    width: 91.467vw;
    height: 110px;
    left: 4.267vw;
    top: 80px;
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
	}
  @media only screen and (max-width: 320px) {
    top: 60px;
	  font-size: 35px;
	  line-height: 50px;
  }
`;
