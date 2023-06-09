import styled from 'styled-components';

export const StyledCareerPage = styled.div`
	min-height: ${({russian}) => russian === "true" ? "3672px" : "3632px"};
	@media only screen and (max-width: 600px) {
    min-height: ${({russian}) => russian === "true" ? "4605px" : "4465px"};
	}
  @media only screen and (max-width: 351px) {
    min-height: ${({russian}) => russian === "true" ? "4615px" : "4475px"};
  }
  @media only screen and (max-width: 341px) {
    min-height: ${({russian}) => russian === "true" ? "4625px" : "4485px"};
  }
  @media only screen and (max-width: 331px) {
    min-height: ${({russian}) => russian === "true" ? "4635px" : "4495px"};
  }
  @media only screen and (max-width: 321px) {
    min-height: ${({russian}) => russian === "true" ? "4645px" : "4505px"};
  }
`;