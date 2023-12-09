import React, { useState } from 'react';
import SearchForm from '../src/components/SearchForm';
import UserProfile from '../src/components/UserProfile';
import { searchUser, User } from '../src/utils/api';

import '../src/styles/style.css';

interface HomeProps {
  onRecentSearch: (username: string) => void;
}

const Home: React.FC<HomeProps> = ({ onRecentSearch }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username: string) => {
    try {
      setLoading(true);
      const data = await searchUser(username);
      setUserData(data);
      onRecentSearch(username);
      console.log('userData:', data);
    } catch (error) {
      console.error('Erroo ao buscar usuário:', error);
    } finally {
      setLoading(false);
    }
  };

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
