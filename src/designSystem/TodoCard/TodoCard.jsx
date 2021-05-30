/* eslint-disable */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from '../Button/Button';

const TodoCard = ({ text, done, remove, toggle }) => {
  return (
    <div css={style}>
      <Button children="삭제" onClick={remove} theme={'deleteTodo'} />
      <span
        style={{
          textDecoration: done ? 'line-through' : 'none',
        }}
        onClick={toggle}
      >
        {text}
      </span>
    </div>
  );
};

const style = css`
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #232931;
  color: #eeeeee;
  padding: 10px;
  margin: 5px;
  button {
    border-radius: 5px;
    background-color: #d7385e;
    color: #eeeeee;
  }
  span {
    padding-left: 10px;
    line-height: 1.5;
    font-size: 1.3rem;
  }
`;

export default TodoCard;
