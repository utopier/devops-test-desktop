/* eslint-disable */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Button = ({ type, children, theme, onClick }) => {
  return (
    <button type={type} css={[style, themes[theme]]} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'default',
};

const style = css`
  width: 70px;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #4ecca3;
  color: white;
  border-radius: 5px;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`;

const themes = {
  default: css`
    background: #4ecca3;
  `,
  addTodo: css`
    background: #4ecca3;
  `,
  deleteTodo: css`
    background: #d7385e;
  `,
};

export default Button;
