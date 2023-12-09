// /src/components/UserProfile.tsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserRepos, Repo } from '../utils/api';

interface UserProfileProps {
  avatarUrl: string;
  name: string;
  login: string;
  location: string;
  followers: number;
  repositories: Repo[] | undefined; // Alterado para aceitar undefined
}

const ProfileContainer = styled.div`
  margin-top: 10px;
  padding: 20px;
  .info-user {
    font-size: 14px;
    color: red;
  }
  h1 {
    color: red;
  }

  .all-details-user {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserProfile: React.FC<UserProfileProps> = ({
  avatarUrl,
  name,
  login,
  location,
  followers,
  repositories,
}) => {
  const [userRepos, setUserRepos] = useState<Repo[]>([]);
  
  useEffect(() => {
    const fetchUserRepos = async () => {
      if (repositories) {
        console.log('repositories:', repositories);

        const repos = await Promise.all(repositories.map(repo => getUserRepos(repo.url)));
        console.log('repos:', repos);
        setUserRepos(repos.flat());
      }
    };

    fetchUserRepos();
  }, [repositories]);

  return (
    <ProfileContainer>
      <p className='info-user'>Clique na foto para acessar mais informações do usuário.</p>
      <Avatar src={avatarUrl} alt={login} />

      <h2>{name}</h2>
      <p>Login: {login}</p>
      <p>Localização: {location}</p>

      <div className='all-details-user'>
        <h3>Informações Adicionais:</h3>
        <p>Seguidores: {followers}</p>

        <h3>Repositórios:</h3>
        {userRepos.length > 0 ? (
          <ul>
            {userRepos.map((repo) => (
              <li key={repo.name}>
                <strong>Nome:</strong> {repo.name} <br />
                <strong>Linguagem:</strong> {repo.language} <br />
                <strong>Descrição:</strong> {repo.description} <br />
                <strong>Criado em:</strong> {repo.created_at} <br />
                <strong>Último push em:</strong> {repo.pushed_at} <br />
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum repositório disponível.</p>
        )}
      </div>
    </ProfileContainer>
  );
};

export default UserProfile;

