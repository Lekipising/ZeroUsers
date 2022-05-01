import React from 'react';
import { UserPosts } from 'src/components/userPosts';
import HeaderNav from 'src/shared/header';
import { Wrapper } from './index.styles';

export const UserPage = () => {
  return (
    <Wrapper>
      <HeaderNav />
      <UserPosts />
    </Wrapper>
  );
};
