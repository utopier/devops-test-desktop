import React, { memo } from 'react';
import styled from '@emotion/styled';
import TodoItem from '../TodoItem/TodoItem';

const TodoListWrapper = styled.div`
  min-height: 500px;
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    padding: 0 30%;
    padding-top: 20px;
  }
`;

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <TodoListWrapper>
      <ul data-testid="TodoList">
        {todos &&
          todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
      </ul>
    </TodoListWrapper>
  );
};

export default memo(TodoList);
