import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans';
  }
	
  ul {
	  list-style-type: none;
  }
  
  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

`;