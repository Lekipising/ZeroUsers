import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserLocation from 'src/components/location';
import { TopPosts } from 'src/components/topPosts';
import UsersTable from 'src/components/users/UserTable';
import HeaderNav from 'src/shared/header';
import { Main } from './index.styles';

export const HomePage = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then((response) => setUsers(response.data));
  }, []);

  return (
    <Main>
      <HeaderNav />
      <UsersTable users={users} />
      <TopPosts />
      <UserLocation users={users} />
    </Main>
  );
};
