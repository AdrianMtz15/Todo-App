import React from 'react';

import { TodoContext } from '../TodoContext/TodoContext';

import { Header } from '../Header/Header';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateButton } from '../CreateButton/CreateTodoButton';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoLoader } from '../TodoLoader/TodoLoader';
import { Modal } from '../Modal/Modal';


function AppUI() {
    const {
        todosSearched,
        toggleTodoComplete,
        deleteTodo,
        loading,
        error,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <Header/>

            <TodoSearch/>

            <TodoList title={"Today"}>
                {error && <p>Lo sentimos, hubo un error</p>}
                {loading && <TodoLoader/>}
                {todosSearched.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.completed} 
                        hour={todo.hour}
                        toggleComplete={(id, completed) => toggleTodoComplete(id, completed)}
                        id={todo.id}
                        deleteTodo={(id) => deleteTodo(id)}
                    />
                ))}
            </TodoList>

            {
                openModal && <Modal>Sección del Modal</Modal>
            }
            
            <CreateButton/>
        </>
    )
}

export {
    AppUI
}