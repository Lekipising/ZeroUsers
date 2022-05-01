import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerFull } from 'src/shared/spinner/indexFull';
import {
  Section,
  UserInfo,
  Form,
  Input,
  H1,
  UserDetail,
  Span,
  Posts,
} from './index.styles';
import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import notification from 'src/shared/notification';
import OnePost from 'src/shared/post';

export const UserPosts = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (id) {
      // get user info
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      axios.get(url).then((response) => setUser(response.data));
      // get user posts
      const urlPosts = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
      axios.get(urlPosts).then((response) => setPosts(response.data));
    }
  }, [id]);

  const [name, setName] = useState('');
  const onChange = (e) => setName(e.target.value);

  const updateUserName = async () => {
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { name: name },
      );
      notification({
        type: 'success',
        message: 'User name updated successfully',
      });
    } catch (error) {
      notification({
        type: 'error',
        message: 'Something went wrong',
      });
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  if (!user || !posts) return <SpinnerFull />;

  return (
    <Section>
      <UserInfo
        initial={{ y: 10 }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <H1>User information</H1>
        <Form>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <AiOutlineEdit
            style={
              name === user.name ? { cursor: 'default' } : { cursor: 'pointer' }
            }
            disabled={name === user.name}
            className="icon"
            onClick={() => updateUserName()}
          />
        </Form>
        <UserDetail>
          <FiUser className="icon" />
          <Span>{user.username}</Span>
        </UserDetail>
        <UserDetail>
          <AiOutlineMail className="icon" />
          <Span>{user.email}</Span>
        </UserDetail>
        <UserDetail>
          <AiOutlinePhone className="icon" />
          <Span>{user.phone}</Span>
        </UserDetail>
        <UserDetail>
          <MdOutlineBusinessCenter className="icon" />
          <Span>{user.company.name}</Span>
        </UserDetail>
      </UserInfo>
      <Posts>
        <H1>Posts from {user.username}</H1>
        {posts.length === 0 ? (
          <h2>No posts</h2>
        ) : (
          posts.map((post) => <OnePost key={post.id} post={post} />)
        )}
      </Posts>
    </Section>
  );
};
