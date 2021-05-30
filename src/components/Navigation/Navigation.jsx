/* eslint "jsx-a11y/anchor-is-valid":"off" */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { memo } from 'react';

const NavigationWrapper = styled.nav`
  ul {
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    li {
      font-size: 1rem;
      margin-left: 10px;
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <ul>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/todoapp">
            <a>TodoApp</a>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </NavigationWrapper>
  );
};

export default memo(Navigation);
