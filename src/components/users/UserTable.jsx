import React from 'react';
import { Section, OneUser } from './index.styles';
import { Spinner } from 'src/shared/spinner';
import { AiOutlineUser } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { USER } from 'src/routes';

export default function UsersTable({ users }) {
  const history = useHistory();

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
            initial={{ scaleX: 0.8 }}
            whileInView={{ scaleX: 1, transition: { duration: 0.5 } }}
          >
            <AiOutlineUser className="icon" />
            <span>{user.name}</span>
            <span className="view">View user</span>
          </OneUser>
        ))
      )}
    </Section>
  );
}
