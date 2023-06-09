import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  min-height: ${({ height }) => height ? height : "100%"};
	z-index: 1;
  width: ${({ width }) => width ? width : "100%"};
  display: flex;
	position: relative;
  justify-content: center;
	top: ${({ top }) => top ? "50vh" : ""};
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
