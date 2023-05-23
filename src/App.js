import React from 'react';
import './App.css';

import { Header } from './Header';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateButton } from './CreateButton';
import { TodoSearch } from './TodoSearch';

// const defaultTodos = [
//   { text: "Tarea 1", completed: true, hour: "13:00", id: 1 },
//   { text: "Tarea 2", completed: false, hour: "13:00", id: 2},
//   { text: "Tarea 3", completed: false, hour: "13:00", id: 3 },
//   { text: "Tarea 4", completed: true, hour: "13:00", id: 4},
//   { text: "Tarea 5", completed: true, hour: "13:00", id: 5}
// ]

function App() {
  let savedTodos = [];
  const localTodos = JSON.parse(localStorage.getItem('TODO_APP'));

  if(localTodos) {
    savedTodos = localTodos;
  } else {
    savedTodos = []
  }

  const [todos, setTodos] = React.useState(savedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const saveTodos = (updatedTodos) => {
    localStorage.setItem('TODO_APP', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }

  const todosSearched = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }
  );

  const toggleTodoComplete = (todoId, completed) => {
    const updatedTodos = [...todos];
    const todoItemIndex = updatedTodos.findIndex(todoItem => todoItem.id === todoId);
    
    updatedTodos[todoItemIndex].completed = completed;
    saveTodos(updatedTodos);
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = [...todos];
    const todoItemIndex = updatedTodos.findIndex(todoItem => todoItem.id === todoId);

    updatedTodos.splice(todoItemIndex, 1);
    saveTodos(updatedTodos);
  } 

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
            todosSearched.map(todo => (
              <TodoItem 
                key={todo.id} 
                text={todo.text} 
                completed={todo.completed} 
                hour={todo.hour}
                toggleComplete={(id, completed) => toggleTodoComplete(id, completed)}
                id={todo.id}
                deleteTodo={(id) => deleteTodo(id)}
              />
            )) 
          }
        </TodoList>

        {/* <TodoList title={"Tomorrow"}>
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
        </TodoList> */}

        <CreateButton/>

      {/* <section className='app__footer'>
        
      </section> */}
    </>
  );
}

export {
  App
} 
