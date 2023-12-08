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
    font-family: 'montserrat';
    background-color: #f4f4f4;
    color: #333;
  }
 

   h1, h2, h3, h4, h5, h6 {
    color: #633EBB; 
    
  }
 

  ul {
    list-style: none;
  }

  
`;

export default GlobalStyles;
