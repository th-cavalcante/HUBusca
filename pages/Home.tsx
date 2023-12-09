import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from '../src/components/SearchForm';
import UserProfile from '../src/components/UserProfile';
import { searchUser, User } from '../src/utils/api';

import '../src/styles/style.css';

interface HomeProps {
  onRecentSearch: (username: string) => void;
  selectedUsername: string | null;
}

const Home: React.FC<HomeProps> = ({ onRecentSearch, selectedUsername }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    async (username: string) => {
      try {
        setLoading(true);
        const data = await searchUser(username);
        setUserData(data);
        onRecentSearch(username);
        console.log('userData:', data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      } finally {
        setLoading(false);
      }
    },
    [onRecentSearch]
  );

  useEffect(() => {
    // Se um usuário foi selecionado e é diferente do que já está sendo exibido, realiza a busca
    if (selectedUsername && selectedUsername !== (userData?.login || null)) {
      handleSearch(selectedUsername);
    }
  }, [selectedUsername, userData?.login, handleSearch]);

  return (
    <div className='home'>
      <div>
        <h1>Seja bem-vindo ao Hubusca</h1>
        <p>Encontre informações sobre desenvolvedores do GitHub.</p>
        <SearchForm onSearch={handleSearch} />
        {loading && <p>Carregando...</p>}
      </div>

      {userData && (
        <UserProfile
          avatarUrl={userData.avatar_url}
          name={userData.name}
          login={userData.login}
          location={userData.location}
          followers={userData.followers}
          repositories={userData.repositories}
        />
      )}
    </div>
  );
};

export default Home;
