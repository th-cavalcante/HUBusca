// /src/components/RecentUserMenu.tsx
import React from 'react';
import styled from 'styled-components';
import { User } from '../utils/api'; // Certifique-se de importar a interface User ou o tipo correto

interface RecentUserMenuProps {
  recentUsers: User[];
}

const MenuContainer = styled.div`
  margin-top: 20px;
`;

const UserItem = styled.div`
  margin-bottom: 8px;
`;

const RecentUserMenu: React.FC<RecentUserMenuProps> = ({ recentUsers }) => {
  return (
    <MenuContainer>
      <h2>Usuários Pesquisados Recentemente</h2>
      <ul>
        {recentUsers.map((user) => (
          <UserItem key={user.login}>
            <img src={user.avatar_url} alt={user.login} width="20" height="20" />
            <span>{user.name}</span>
          </UserItem>
        ))}
      </ul>
    </MenuContainer>
  );
};

export default RecentUserMenu;
