import styled from "styled-components";

export const StyledApplicationRequestListOfInputs = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  gap: 15px;
  @media only screen and (max-width: 600px) {
	
  }
`;
export const StyledDivContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 80px 95px;
  gap:50px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 80px 16px;
    
  }

`

export const StyledApplicationRequestElementOfInputList = styled.li`
  &:nth-child(1) {
	  margin-right: 15px;
    @media only screen and (max-width: 600px) {
    }
  }
  
`;

export const StyledApplicationRequestLabel = styled.label`
  display: flex;
	color: white;
  flex-direction: column;
  padding: 0;
  gap: 2px;
`;

export const StyledApplicationRequestInput = styled.input`
  height: ${({height}) => height ? height : "40px"};
	padding: 10px 10px;
  width: ${({ naming }) => naming === "true" ? "160px" : "350px"};
	
  @media only screen and (max-width: 600px) {
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

	}
`;

export const StyledApplicationRequestForm= styled.form`
  max-width:350px;
`;

export const StyledApplicationRequestContainer = styled.section`
  width: 77vw;
  height: 583px;
	margin: 120px auto;
  background: #272727;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 802px;
	  margin: 80px 0;
  }
`;
export const StyledApplicationRequestHeadline = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 68.2px;
	
	@media only screen and (max-width: 600px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
	}
  @media only screen and (max-width: 341px) {
	  font-size: 35px;
	  line-height: 54.56px;
  }
`;
