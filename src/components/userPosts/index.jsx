import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerFull } from 'src/shared/spinner/indexFull';
import { Section } from './index.styles';

export const UserPosts = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios.get(url).then((response) => setUser(response.data));
  }, []);

  if (!user) return <SpinnerFull />;
  return (
    <Section>
      <h1>{id}</h1>
    </Section>
  );
};
