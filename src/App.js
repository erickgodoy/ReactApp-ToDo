import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {TodoAdd} from './TodoAdd'

const todos = [
  { text: "Limpiar escritorio", completed: false },
  { text: "Estudiar react", completed: false },
  { text: "Preparar almuerzo", completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
       <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <TodoAdd />
    </React.Fragment>
  );
}

export default App;
