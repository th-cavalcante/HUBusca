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
  display:flex;
    justify-content: space-around;
    align-items:center;

  padding: 16px;
  
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  
  
`;

const UserProfile: React.FC<UserProfileProps> = ({ avatarUrl, name, login, location }) => {
  return (
    <ProfileContainer>
      
      <Avatar src={avatarUrl} alt={login} />
      <div>
        
        <h2>{name}</h2>
        <p>{login}</p>
        <p>Location: {location}</p>
        {/* Adicione mais informações conforme necessário */}
      </div>
    </ProfileContainer>
  );
};

export default UserProfile;

