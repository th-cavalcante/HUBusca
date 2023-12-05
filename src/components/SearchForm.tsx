// /src/components/SearchForm.tsx
import React, { useState } from 'react';

import '../styles/style.css';

interface SearchFormProps {
  onSearch: (username: string) => void; // Modificado para aceitar um nome de usuário (string)
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(username);
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
