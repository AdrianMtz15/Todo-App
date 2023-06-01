import React from "react";
import { useLocalStorage } from "./LocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODO_APP', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
  
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
  
    const todosSearched = todos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
  
        return todoText.includes(searchText);
      }
    );

    const createNewTodo = (text) => {
      const updatedTodos = [...todos];
      const newTodo = {
        text,
        completed: false,
        hour: '12:00',
        id: updatedTodos.length + 1
      }

      updatedTodos.push(newTodo);
      saveTodos(updatedTodos);
    }
  
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
        <TodoContext.Provider value={{
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            todosSearched,
            toggleTodoComplete,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            createNewTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {
    TodoContext,
    TodoProvider
}