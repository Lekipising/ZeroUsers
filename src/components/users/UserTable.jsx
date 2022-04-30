import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Section, OneUser } from './index.styles';
import { Spinner } from 'src/shared/spinner';

export const UsersTable = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then((response) => setUsers(response.data));
  }, []);

  useEffect(() => {
    console.log('users', users);
  }, [users]);

  return (
    <Section>
      <h1>Users</h1>
      {!users ? (
        <Spinner />
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => <OneUser key={user.id}>{user.name}</OneUser>)
      )}
    </Section>
  );
};

export default UsersTable;
