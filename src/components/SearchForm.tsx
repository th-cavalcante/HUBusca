import React, { useState } from 'react';
import '../styles/style.css';

interface SearchFormProps {
  onSearch: (username: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Chama a função de busca
    onSearch(username);

    // Adiciona o username ao localStorage
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const updatedSearches = [...recentSearches, username];
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));

    // Limpa o input após a busca
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome de usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
