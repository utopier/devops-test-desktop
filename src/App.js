import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AppLayout from './components/AppLayout/AppLayout';
import TodoApp from './components/TodoApp/TodoApp';

import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          body {
            background-color: #232931;
            color: #eeeeee;
          }
          a {
            text-decoration: none;
            outline: none;
            color: #4ecca3;
          }
          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/todoapp">
              <TodoApp />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
