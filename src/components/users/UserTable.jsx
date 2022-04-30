import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';

export const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then((response) => setUsers(response.data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
