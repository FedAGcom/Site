import styled from 'styled-components';


export const StyledContactUsPage = styled.div`
	min-height: ${({russian}) => russian === "ru" ? "1514px" : "1446px"};

  @media only screen and (max-width: 600px) {
    min-height: ${({russian}) => russian === "ru" ? "1800px" : "1800px"};
  }
	@media only screen and (max-width: 413px) {
    min-height: ${({russian}) => russian === "ru" ? "1900px" : "1900px"};
	}
  @media only screen and (max-width: 360px) {
    min-height: ${({russian}) => russian === "ru" ? "2000px" : "2000px"};
  }
  @media only screen and (max-width: 355px) {
    min-height: ${({russian}) => russian === "ru" ? "2000px" : "2000px"};
  }
`;