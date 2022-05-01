import React from 'react';
import { Title, Body, Post, Pic } from './index.styles';

export default function OnePost({ post }) {
  return (
    <Post
      initial={{ x: 10 }}
      whileInView={{ x: 0, transition: { duration: 0.5 } }}
      whileHover={{ scale: 1.01, opacity: 1 }}
    >
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
    </Post>
  );
}
