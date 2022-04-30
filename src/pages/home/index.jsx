import React from 'react';
import { TopPosts } from 'src/components/topPosts';
import UsersTable from 'src/components/users/UserTable';
import { Main } from './index.styles';

export const HomePage = () => {
  return (
    <Main>
      <UsersTable />
      <TopPosts />
    </Main>
  );
};
