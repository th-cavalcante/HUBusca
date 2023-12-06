// /src/components/UserProfile.tsx
import React from 'react';
import styled from 'styled-components';

interface UserProfileProps {
  avatarUrl: string;
  name: string;
  login: string;
  location: string;
  // Adicione mais propriedades conforme necessário
}

const ProfileContainer = styled.div`
  margin-top: 20px;
  padding: 16px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  
  
`;

const UserProfile: React.FC<UserProfileProps> = ({ avatarUrl, name, login, location }) => {
  console.log({ avatarUrl, name, login, location });
  return (
   
    <ProfileContainer>
      
      <Avatar src={avatarUrl} alt={login} />
      <>
        <h2>{name}</h2>
        <p>Login: {login}</p>
        <p>Localização: {location}</p>
        {/* Adicione mais informações conforme necessário */}
      </>
    </ProfileContainer>
  );
};

export default UserProfile;

