import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './LocalStorage';

// const defaultTodos = [
//   { text: "Tarea 1", completed: true, hour: "13:00", id: 1 },
//   { text: "Tarea 2", completed: false, hour: "13:00", id: 2},
//   { text: "Tarea 3", completed: false, hour: "13:00", id: 3 },
//   { text: "Tarea 4", completed: true, hour: "13:00", id: 4},
//   { text: "Tarea 5", completed: true, hour: "13:00", id: 5}
// ]
// localStorage.setItem('TODO_APP', JSON.stringify(defaultTodos))

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODO_APP', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


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
    <AppUI 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      todosSearched={todosSearched}
      toggleTodoComplete={toggleTodoComplete}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export {
  App
} 
