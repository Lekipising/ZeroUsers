import React from 'react';
import { Header, Span } from './index.styles';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <Header>
      <Link to="/" className="group">
        <AiOutlineHome className="icon" />
        <Span>Home</Span>
      </Link>
    </Header>
  );
}
