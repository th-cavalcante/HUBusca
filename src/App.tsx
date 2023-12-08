// /src/App.tsx
import React, { useState } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Home from '../pages/Home';


import Logo from './img/logomarca.png';
import '../src/styles/style.css';


const App: React.FC = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);


  const handleRecentSearch = (username: string) => {
    setRecentSearches((prevSearches) => [username, ...prevSearches]);
  };


  

  return (
    <>
      <GlobalStyles />
      <header>
        <img src={Logo} alt="logo" />
        <select name="" id="">
          <option value="">Buscas recentes</option>
          {recentSearches.map((search, index) => (
            <option key={index} value={search}>
              {search}
            </option>
          ))}
        </select>
      </header>

      
        <Home onRecentSearch={handleRecentSearch}  />

        
    
      <footer>
        <p>Desenvolvido por <span>ThiagoFernandes</span></p>
      </footer>
    </>
  );
};

export default App;


