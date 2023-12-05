// /src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body,
  h1, h2, h3, h4, h5, h6,
  p,
  ul, ol {
    margin: 0;
    padding: 0;
    text-align:center;
  }

  /* Estilos globais para o aplicativo */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
  h1{
    color: red;
  }

   h1, h2, h3, h4, h5, h6 {
    color: #007bff; 
    
  }
 

  ul {
    list-style: none;
  }

  
`;

export default GlobalStyles;
