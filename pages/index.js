// @flow
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import Content from '../components/Content';
import Page from '../components/Page';
import TodoItem from '../components/TodoItem';
import theme from './theme';

const Index = () => (
  <ThemeProvider theme={theme}>
    <Page title="Roast tracker">
      <Content className="mw6 center">
        <h2>Todo</h2>
        <ul className="lh-copy list pl0">
          <li>
            <TodoItem name="first">Make it work</TodoItem>
          </li>
          <li>
            <TodoItem name="second">Make it right</TodoItem>
          </li>
          <li>
            <TodoItem name="third">Make it fast</TodoItem>
          </li>
        </ul>

        <hr className="o-30" />
      </Content>
    </Page>
  </ThemeProvider>
);

export default Index;
