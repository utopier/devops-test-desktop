import React, { useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import TodoList, { Todo } from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

import { TodoService } from '../../services/TodoServices';

const TodoAppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  div {
    border: 1px solid black;
  }
  h1 {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const TodoApp = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    const todoData = TodoService.todoData.subscribe((v) => {
      setTodos(v);
    });
    return () => todoData;
  }, []);

  const onInsert = useCallback((text) => {
    TodoService.addTodo(text);
  }, []);

  const onToggle = useCallback(
    (id, done) => TodoService.toggleTodo(id, done),
    []
  );

  const onRemove = useCallback((id) => TodoService.deleteTodo(id), []);

  return (
    <TodoAppWrapper>
      <h1>TodoApp</h1>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoAppWrapper>
  );
};

export default TodoApp;
