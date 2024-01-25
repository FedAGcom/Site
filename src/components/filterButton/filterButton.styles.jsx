import styled from "styled-components";

export const StyledFilterButtonDiv = styled.div`
  display: flex;
  // flex-direction: row;
  // width: 64.8%;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 15px;
  align-self: start;
  margin-left: ${({ routepage, collection }) => (routepage === "cases" || collection === 'technologies') ? "0" : "6.5%"};
  position: relative;
	top: ${({top}) => top ? top : "0"};
  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    flex-wrap: nowrap;
    padding: 0;
    position: relative;
    max-width: 90dvw;
    height: 49px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const StyledFilterButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 20px;
  cursor:pointer;
  gap: ${({gap}) => gap};
  min-width: ${({btnwidth}) => btnwidth};
  height: ${({tag}) => tag ? "39px" : "47px"};
  border-radius: 20px;
  border: 1px solid #AEAEAE;
  flex: none;
  order: 0;
  flex-grow: 0;
  outline: none;
	background: white;
	
	&.active {
    animation-name: faded;
    animation-timing-function: ease-in-out;
    animation-duration: 500ms;
    border: 1px solid #B81034;
    span {
      color: #B81034;
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

export const StyledFilterButtonSpan = styled.span`
  min-width: ${({spanwidth}) => spanwidth};
  height: ${({ tag }) => tag ? "22px" : "27px"};

  font-weight: 400;
  font-size: ${({ tag }) => tag ? "16px" : "20px"};
  line-height: ${({ tag }) => tag ? "22px" : "27px"};

  color: #606060;

  flex: none;
  order: 0;
  flex-grow: 0;
	
	@media only screen and (max-width: 600px) {
    min-width: ${({spanwidth}) => spanwidth};

		height: ${({tag}) => tag ? "19px" : "27px"};
		font-size: ${({tag}) => tag ? "14px" : "20px"};
    line-height: ${({tag}) => tag ? "19px" : "27px"};
	}
`;