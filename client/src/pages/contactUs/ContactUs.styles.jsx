import styled from 'styled-components';


export const StyledContactUsPage = styled.div`
	min-height: ${({russian}) => russian === "ru" ? "2514px" : "2446px"};

  @media only screen and (max-width: 600px) {
    min-height: ${({russian}) => russian === "ru" ? "4300px" : "4243px"};
  }
	@media only screen and (max-width: 413px) {
    min-height: ${({russian}) => russian === "ru" ? "4353px" : "4243px"};
	}
  @media only screen and (max-width: 360px) {
    min-height: ${({russian}) => russian === "ru" ? "4408px" : "4298px"};
  }
  @media only screen and (max-width: 355px) {
    min-height: ${({russian}) => russian === "ru" ? "4463px" : "4300px"};
  }
`;