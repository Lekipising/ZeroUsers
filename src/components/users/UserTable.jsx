import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Section, OneUser } from './index.styles';
import { Spinner } from 'src/shared/spinner';
import { AiOutlineUser } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { USER } from 'src/routes';

export const UsersTable = () => {
  const [users, setUsers] = useState(null);
  const history = useHistory();

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
        users.map((user) => (
          <OneUser
            onClick={() => history.push(`${USER}/${user.id}`)}
            key={user.id}
          >
            <AiOutlineUser className="icon" />
            <span>{user.name}</span>
          </OneUser>
        ))
      )}
    </Section>
  );
};

export default UsersTable;
