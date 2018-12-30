// @flow
import React from 'react';

type Props = {
  children: React$Node,
  name: string,
};

const TodoItem = ({ children, name }: Props) => (
  <label htmlFor={name}>
    <input type="checkbox" name={name} id={name} className="mr2 inline-flex" />
    {children}
  </label>
);

export default TodoItem;
