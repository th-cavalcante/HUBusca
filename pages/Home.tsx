// /src/pages/Home.tsx
import React, { useState } from 'react';
import SearchForm from '../src/components/SearchForm';
import UserProfile from '../src/components/UserProfile';
import { searchUser, User } from '../src/utils/api';

import '../src/styles/style.css';


const Home: React.FC = () => {
    const [showSearch, setShowSearch] = useState<boolean>(true);
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (username: string) => {
      try {
        setLoading(true);
        const data = await searchUser(username);
        setUserData(data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      } finally {
        setLoading(false);
        setShowSearch(false); // Oculta a busca ao finalizar a busca
      }
    };

  
  return (
    <div className='home'>
      {showSearch && (
        <div>
          <h1>Seja bem vindo ao Hubusca</h1>
          <p>Encontre informações sobre desenvolvedores do GitHub.</p>
          <SearchForm onSearch={handleSearch} />

          {loading && <p>Carregando...</p>}
        </div>
      )}

      {userData && !showSearch && (
        <UserProfile
          avatarUrl={userData.avatar_url}
          name={userData.name}
          login={userData.login}
          location={userData.location}
          // Adicione mais propriedades conforme necessário
        />
      )}
    </div>
  );
};

export default Home;
