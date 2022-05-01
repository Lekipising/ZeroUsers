import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OnePost from 'src/shared/post';
import { Spinner } from 'src/shared/spinner';
import { Section } from './index.styles';

export const TopPosts = () => {
  const [posts, setPosts] = useState(null);

  const getTop10Posts = async () => {
    try {
      const urlPosts = `https://jsonplaceholder.typicode.com/posts`;
      axios.get(urlPosts).then((response) => setPosts(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTop10Posts();
  }, []);

  return (
    <Section>
      <h1>Top 10 posts</h1>
      {!posts ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <h2>No posts</h2>
      ) : (
        posts.slice(0, 10).map((post) => <OnePost key={post.id} post={post} />)
      )}
    </Section>
  );
};
