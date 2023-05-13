import React from 'react';
import './App.css';

import { Header } from './Header';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateButton } from './CreateButton';
import { TodoSearch } from './TodoSearch';

const defaultTodos = [
  { text: "Tarea 1", completed: true, hour: "13:00" },
  { text: "Tarea 2", completed: false, hour: "13:00" },
  { text: "Tarea 3", completed: false, hour: "13:00" },
  { text: "Tarea 4", completed: true, hour: "13:00" },
  { text: "Tarea 5", completed: true, hour: "13:00" }
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <Header/>

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />

      <TodoList title={"Today"}>
        { 
          todos.map(todo => (
            <TodoItem 
              key={todos.indexOf(todo)} 
              text={todo.text} 
              completed={todo.completed} 
              hour={todo.hour}
            />
          )) 
        }
      </TodoList>

      <TodoList title={"Tomorrow"}>
        { 
          todos.map(todo => (
            <TodoItem 
              key={todos.indexOf(todo)} 
              text={todo.text} 
              completed={todo.completed} 
              hour={todo.hour}
              />
          )) 
        }
      </TodoList>

      <CreateButton/>
      <section className='sectionPrueba'>
        
      </section>
    </>
  );
}

export {
  App
} 
