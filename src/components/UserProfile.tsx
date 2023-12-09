  import React, { useEffect, useState } from 'react';
  import styled from 'styled-components';
  import { getUserRepos, Repo } from '../utils/api';

  

  interface UserProfileProps {
    avatarUrl: string;
    name: string;
    login: string;
    location: string;
    followers: number;
    repositories: Repo[] | undefined;
    
  }

  const ProfileContainer = styled.div`
    margin-top: 10px;
    padding: 20px;
    .info-user {
      font-size: 14px;
      color: red;
    }
    .title-info-details-user{
      margin-top:px;
      padding-top:15px;
      background:#fff;
      width: 450px;
      margin:auto;
      color:red;
      font-weight:bold;
      color:red;
      border-radius: 10px;
      font-size:15px;
      span{
        text-transform:uppercase;
        
      }

    }
    h1 {
      color: red;
    }
    h2,h3{
      color:#388BFD;
    }
     strong{
        color:#fff;
      }

    .all-details-user.visible {
      margin-top: 20px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      display: none;
     

      
    }

    .show-repo {
      color: #fff;
      border-radius: 5px;
      padding-left: 10px;
      padding-right: 10px;
      background-color: #388BFD;
      cursor: pointer;
      width:300px;
      margin:auto;
      opacity: 0.8;
    }:hover{
      opacity: 1;
    }
    @media (max-width: 490px){
      .show-repo {
        width:auto;
    }
    .title-info-details-user{
      width: auto;
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
    const [isRepoVisible, setIsRepoVisible] = useState(true);

    const toggleRepoVisibility = () => {
      setIsRepoVisible((prev) => !prev);
    };

    const openGitHubRepo = (repoName: string) => {
    
      const githubUrl = `https://github.com/${login}/${repoName}`;
      window.open(githubUrl, '_blank');
    };

    useEffect(() => {
      const fetchUserRepos = async () => {
        if (repositories) {
          console.log('repositories:', repositories);

          const repos = await Promise.all(repositories.map((repo) => getUserRepos(repo.url)));
          console.log('repos:', repos);
          setUserRepos(repos.flat());
        }
      };

      fetchUserRepos();
    }, [repositories]);

    return (
      <ProfileContainer>
        <p className='info-user' onClick={toggleRepoVisibility}>
          Clique na foto para acessar mais informações do usuário.
        </p>
        <Avatar src={avatarUrl} alt={login} onClick={toggleRepoVisibility} />

        <h2>{name}</h2>
        <p>Login: {login}</p>
        <p>Localização: {location}</p>

        <div className={`all-details-user ${isRepoVisible ? 'visible' : ''}`}>
          <h3>Informações Adicionais:</h3>
          <p className='title-info-details-user'>Clique no <span>Nome</span> do repositório para abrir no GitHub.</p>
          <p>Seguidores: {followers}</p>

          <h3>Repositórios:</h3>
          {userRepos.length > 0 ? (
            <ul>
              {userRepos.map((repo) => (
                <li key={repo.name}>
                  <strong>Nome:</strong>
                  <p className='show-repo' onClick={() => openGitHubRepo(repo.name)}>
                    {repo.name}
                  </p>
                  <br />
                  <strong>ID:</strong> {repo.id} <br />
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