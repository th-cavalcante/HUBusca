import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from '../pages/Home';
import Logo from './img/logomarca.png';
import '../src/styles/style.css';

const App: React.FC = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedUsername, setSelectedUsername] = useState<string | null>(null);

  const handleRecentSearch = (username: string) => {
    setRecentSearches((prevSearches) => [username, ...prevSearches]);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedUsername(selectedValue);
  };

  const handleSearchClick = () => {
    // Chama a função de busca ao clicar no botão
    if (selectedUsername) {
      handleRecentSearch(selectedUsername);
    }
  };

  return (
    <>
      <GlobalStyles />
      <header>
        <img src={Logo} alt="logo" />
        <select name="" id="" value={selectedUsername || ''} onChange={handleSelectChange}>
          <option value="">Buscas recentes</option>
          {recentSearches.map((search, index) => (
            <option key={index} value={search}>
              {search}
            </option>
          ))}
        </select>
        <button id='btn-search' onClick={handleSearchClick} ></button>
      </header>

      <Home onRecentSearch={handleRecentSearch} selectedUsername={selectedUsername} />

      <footer>
        <p>Desenvolvido por <span>ThiagoFernandes</span></p>
      </footer>
    </>
  );
};

export default App;
