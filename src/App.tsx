// /src/App.tsx
import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Home from '../pages/Home'



import Logo from './img/logomarca.png';
import '../src/styles/style.css';

const App: React.FC = () => {

  return (
    <>
      <GlobalStyles />
     
      <header>
        <img src={Logo} alt="logo" />
        <select name="" id="">
          <option value="">Buscas recentes</option>
        </select>
      </header>
     
  
      < Home />

      <footer>
        <p>Desenvolvido por <span>ThiagoFernandes</span></p>
      </footer>
    
        
    </>
  );
};

export default App;
