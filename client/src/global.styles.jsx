import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', 'Inter', sans-serif;
  }
  
  p {
    color: #FFFFFF;
	  
  }
  
  input {
    outline: none;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9A9A9A;;
  }
  
  textarea {
    font-family: "Nunito Sans", "Inter", sans-serif;
    outline: none;
    color: #9A9A9A;;
    resize: none;
  }
	
  ul {
	  list-style: none;
  }
  
  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
	  margin: 0;
	  padding: 0;
  }

`;